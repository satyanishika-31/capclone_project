import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import { ArticleModel } from '../models/ArticleModel.js'
import { verifyToken } from '../middleware/VerifyToken.js'

export const authorApp = exp.Router()


//write article
authorApp.post('/article', verifyToken("AUTHOR"), async (req, res) => {

  const articleObj = req.body

  //get author id from token
  const authorIdOfToken = req.user?.id

  //check author
  let author = await UserModel.findOne({_id: articleObj.author, isUserActive: true})

  if (!author) {
    return res.status(404).json({ message: "Author not found" })
  }

  //check if logged-in author matches
  if (author._id.toString() !== authorIdOfToken) {
    return res.status(403).json({ message: "You are not authorised" })
  }

  //create article
  const articleDoc = await ArticleModel.create(articleObj)

  res.status(201).json({
    message: "Article published successfully",
    payload: articleDoc
  })
})


//get articles
authorApp.get('/article', verifyToken("AUTHOR"), async (req, res) => {

  const authorIdOfToken = req.user?.id

  const articleList = await ArticleModel.find({
    author: authorIdOfToken
  })

  res.status(200).json({
    message: "Articles fetched successfully",
    payload: articleList
  })

})


//edit article
authorApp.put("/article",async (req, res) => {

  const authorIdOfToken = req.user?.id

  const { articleId, title, category, content } = req.body

  const modifiedArticle = await ArticleModel.findOneAndUpdate(
    { _id: articleId, author: authorIdOfToken },
    { $set: { title, category, content } },
    { new: true }
  )

  if (!modifiedArticle) {
    return res.status(403).json({
      message: "You are not authorized to edit this article"
    })
  }

  res.status(200).json({
    message: "Article updated successfully",
    payload: modifiedArticle
  })

})
//de;llection soft delition
authorApp.patch("/article",verifyToken("AUTHOR"),async(req,res)=>{
//get author id from decodedToken
    const authorIdOfToken=req.user?.id
    //get modifies article from client
    const {articleId,isArticleActive}=req.body
    //get article by id
    const articleOfDB=await ArticleModel.findOne({_id:articleId,author:authorIdOfToken})
    //check status
    if(isArticleActive===articleOfDB.isArticleActive)
        return res.status(200).json({message:"Article already in the same state"})
    //update the status with status recived by the req 
    articleOfDB.isArticleActive=isArticleActive
    await articleOfDB.save()
    //send res
    res.status(200).json({message:"Article modifies",payload:articleOfDB})
})