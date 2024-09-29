const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:3,
        max:20,
        unique:true,
    },
    email:{
        type:String,
        require:true,
        //min:3,
        max:50,
        unique:true,
    },
    password:{
        type:String,
        require:true,
        min:8,
        //select:false,
        //max:20,
        //unique:true,
    },
    isAvatarSet:{
        type:String,
        default:false,
    },
    avatarImage:{
        type:String,
        default:""
    }

});


module.exports = mongoose.model("Users",userSchema)