import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()
const { verify } = jwt


export const verifyToken = (...allowedRoles) => {//allowedRoles is an array of allowed roles for this route
    return (req, res, next) => {
        try {
            //get token from cookie.	
            const token = req.cookies?.token
            //check token existed or not
            if (!token) {
                return res.status(401).json({ message: "please login first" })
            }
            //validate token
            let decodedToken = verify(token, process.env.SECRET_KEY)  //if token is invalid verify throw error
            if(!allowedRoles.includes(decodedToken.role)){
                return res.status(403).json({message:"you are not authorized to access this resource"})
            }
            //add decoded token
            req.user = decodedToken
            next()
        } catch (err) {
            res.status(401).json({ message: "invalid token" })
        }

    }
}
//export const verifyToken=(req,res,next)=>{}