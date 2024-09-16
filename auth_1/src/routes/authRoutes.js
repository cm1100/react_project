import Router from 'express'
import { getProfile, loginUser, registerUser } from '../controller/authController.js'
import { authMiddleware } from '../middelware/authMiddleware.js'

const router = Router()


router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/profile',[authMiddleware],getProfile)


export default router