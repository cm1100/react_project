import bcrypt from 'bcrypt'
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken'


export async function registerUser(req, res) {

    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword)


        const user = new User({
            name,
            email,
            password: hashedPassword,
        })

        await user.save();

        res.status(201).json({
            "message": "User registered successdully"
        })

    } catch (error) {
        res.status(500).json({
            "message": error.message
        })

    }




}


export async function loginUser(req, res) {

    const { email, password } = req.body;
    try {
        //we need to check if user exists or not

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(404).json({ message: "Wrong pass" });

        //we need a token

        const token = jwt.sign({
            id:user._id,
        },process.env.JWT_SECRET,{
            expiresIn:"1h"
        })

        res.status(201).json({
            token
        })

    } catch (eror) {


        res.status(500).json({
            message:error.message
        })

    }

    

}


export const getProfile=(req,res)=>{
    res.status(200).json({"message":"profile"})
}