import bcrypt from 'bcrypt'
import User from '../models/userModel.js';


export async function registerUser(req,res){

    const {name,email,password}=req.body;
    try{
        const hashedPassword = await bcrypt.hash(password,10);
        console.log(hashedPassword)


        const user = new User({
            name,
            email,
            password:hashedPassword,
        })
    
        await user.save();
    
        res.status(201).json({
            "message":"User registered successdully"
        })

    }catch(error){
        res.status(500).json({
            "message":error.message
        })

    }

    


}


export async function loginUser(req,res){

    const {email,password}=req.body;
    try{
        //we need to check if user exists or not
        const hashedPassword = bcrypt.hash(password,10);
    
        const user = User.findOne({email,password:hashedPassword});
        
        console.log(user)
        if(!user){
            return res.status(404).json({message:'User not found'});
        }


    }catch(eror){

    }

    res.status(201).json({
        token:'nkjshdjshdj'
    })

}