import exp from 'express'
import { verifyToken } from '../middleware/VerifyToken.js'
import { UserModel } from '../models/UserModel.js'

export const adminApp = exp.Router()

//read emails of users and authors
adminApp.get('/users', verifyToken("ADMIN"), async (req, res) => {

  //get users and authors emails only
  const usersList = await UserModel.find(
    { role: { $in: ["USER", "AUTHOR"] } }, //filter roles
    { email: 1, role: 1, _id: 0 } //show only email and role
  )

  //send response
  res.status(200).json({message: "Users and authors details fetched successfully",payload: usersList})
})

//block or activate user or author
adminApp.patch('/user', verifyToken("ADMIN"), async (req, res) => {

  //get email and status from client
  const { email, isUserActive } = req.body

  //find user by email
  const user = await UserModel.findOne({ email: email })

  //check if user exists
  if (!user) {
    return res.status(404).json({message: "User not found"})
  }
  //update user status
  user.isUserActive = isUserActive
  await user.save()
  //send response
  res.status(200).json({message: "User status updated successfully",payload: user})
})