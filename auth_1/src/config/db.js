import mongoose from 'mongoose'


const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mogo db connected")
    }catch(error){

        console.error('mongo error',error.message)
        process.exit(1);

    }
}

export default connectDb