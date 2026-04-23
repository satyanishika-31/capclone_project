//CommonAPI.js

import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import { hash,compare } from 'bcryptjs'
import { config } from 'dotenv'
config()
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middleware/VerifyToken.js'
const {sign}=jwt
export const commonApp=exp.Router()

//route for registration
commonApp.post('/users',async(req,res) =>{
    let allowedRoles=["USER","AUTHOR"]
    //get user from req
    const newUser=req.body
    //check the role
    if(!allowedRoles.includes(newUser.role))
        return res.status(400).json({message:"Invalid role"})
    //hash password adn replace plain with hashed one
    newUser.password=await hash(newUser.password,12)
    //create new user document
    const newUserDoc=new UserModel(newUser)
    //save document
    await newUserDoc.save()
    //send res
    res.status(201).json({message:"user created"})
})

//route for login(user,author,admin)
commonApp.post('/login',async(req,res) => {
    //get user credential obj
    const {email,password}=req.body
    //find user by email
    const user=await UserModel.findOne({email:email})
    //if user not found
    if(!user)
        return res.status(400).json({message:"Invalid email"})
    //compare password
    const isMatched=await compare(password,user.password)
    //password not matched
    if(!isMatched)
        return res.status(400).json({message:"Invalid password"})
    //create jwt
    const signedToken=sign({id:user._id,email:email,role:user.role},process.env.SECRET_KEY,{expiresIn:"1hr"})
    //set token to res header as httpOnly
    res.cookie("token",signedToken,{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    })
    //remove password from user document
    //convert documnet into js obj
    const userObj=user.toObject()
    delete userObj.password
    //send res
    res.status(200).json({message:"Login successful",payload:userObj})


})
//route for logout
commonApp.get('/logout', (req,res) => {
    //delete token from cookie storage
    res.clearCookie("token",{
        httpOnly:true,
        secure:false,
        sameSite:'lax'
    })
    //send res
    res.status(200).json({message:"Logout successful"})
})
commonApp.put("/password",verifyToken("USER","AUTHOR","ADMIN"),async(req,res)=>{
    //get current pass and new pass from req
    const {currentPassword,newPassword}=req.body
    //check current password and new password are same
    if(currentPassword===newPassword)
        return res.status(400).json({message:"New password cannot be same as current password"})
    //get user id from token
    const userId=req.user?.id
    //get user from db
    const user=await UserModel.findById(userId)
    //get current password of user/admin/author
    //compare password
    const isMatched=await compare(currentPassword,user.password)
    //if not matched
    if(!isMatched)
        return res.status(400).json({message:"Current password is not correct"})
    //hash new password
    const newPassObj=await hash(newPassword,12)
    //replace current password of user with hashed new password
    await UserModel.findOneAndUpdate({_id:userId},{$set:{password:newPassObj}})
    //send res
    res.status(200).json({message:"Password updated successfully"})




})