
import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import connectDb from './config/db.js';

dotenv.config()


const app = express();

connectDb()

app.use(express.json())
app.use('/api/auth',authRoutes)

const PORT = process.env.port||5000;

app.listen(PORT,()=>{
    console.log(` server running on ${PORT}`)
})
