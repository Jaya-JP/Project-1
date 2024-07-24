import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

// Login user
const loginUser = async (req,res) =>{


}

// create token 
const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
// register user 
const registerUser = async (req,res) =>{
    const {name,password,email} = req.body;
    try {
        // user already exist
        const exists = await userModel.findOne({email});
        if (condition) {
            return res.json({success:false , message:"User Already Exists"})
            
        }
        // validating email password
        if (!validator.isEmail(email)) {
            return res.json({success:false , message:"Please Enter Valid Email"})
        }
        if (password.length<8) {
            return res.json({success:false , message:"Please Enter Strong Password"})
            
        }
        
        // user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)
        res.json({success:true, token})

    } catch (error) {
        console.log(error);
        res.json({success : false,message : "error"})
        
    }
    

}

export {loginUser,registerUser}