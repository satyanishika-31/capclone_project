import exp from 'express'
import { verifyToken } from '../middleware/VerifyToken.js'
import { ArticleModel } from '../models/ArticleModel.js'
export const userApp = exp.Router()

userApp.get("/articles",verifyToken("USER"),async(req,res)=>{
    //read articles
    const articlesList=await  ArticleModel.find()
    //send res
    res.status(200).json({message:"articles",paylode:articlesList})
})
//!xxs and csrf work on it  cross side scripting   crf-cross site resouse fortuin 
//adding commint to the article
userApp.put("/articles",verifyToken("USER"),async(req,res)=>{
    //get body from req
    const {articleId,comment} = req.body
    //chck article
    const artticleDocument = await ArticleModel.findOne({_id:articleId,isArticleActtive:true})

    if(!artticleDocument){
        return res.status(404).json({message:"Article not found"})
         
    }
    //get user id
    const userId=req.user?.id
    artticleDocument.comment.push({user:userId,comment:comment})
    await artticleDocument.save()
    res.status(200).json({message:"the comment added sucessfully"})

})