import {Schema,model} from 'mongoose'

const userSchema = new Schema({
	firstName:{
		type:String,
		required:[true,"first name is required"],
	},
	lastName:{
		type:String
	},
	email:{
		type:String,
		required:[true,"email is required"],
		unique:[true,"email already existed"]
	},
	password:{
		type:String,
        required:[true,"password is required"],
	},
	role:{
		type:String,
		enum:["USER","AUTHOR","ADMIN"],
		required:[true,"{Value} is an invalid role"]
	},
	profileImageUrl:{
		type:String
	},
	isUserActive:{
	type:Boolean,
	default:true
}
},{timestamps:true,
	versionKey:false,
	strict:"throw"
})
//create model
export const UserModel=model("User",userSchema)