
const User = require('../models/userModel')
const bcrypt = require('bcrypt')

module.exports.register = async  (req,res,next)=>{
   
    const {username,email,password}= req.body;
    const uNameCheck = await User.findOne({username})

    if(uNameCheck){
        return res.json({status:false,msg:"Username already used"});
    }

    const emailCheck = await User.findOne({email})

    if(emailCheck){
        return res.json({status:false,msg:"Email already used"});
    }

    const hashedPassword = await bcrypt.hash(password,10);
    
    const user = await User.create({
        email,username,
        password:hashedPassword,
    })

    delete user.password
    return res.status(200).json({status:true,user})
}


module.exports.login = async (req,res,next)=>{
   
    const {username,password}= req.body;
    const user = await User.findOne({username})

    if(!user){
        return res.json({status:false,msg:"Incorrect Credentials"});

    }
    console.log(user);
    const isPassValid = await bcrypt.compare(password,user.password)
    if(!isPassValid){
        return res.json({status:false,msg:"Incorrect Credentials"});
    }

    delete user.password
    return res.status(200).json({status:true,user})
}