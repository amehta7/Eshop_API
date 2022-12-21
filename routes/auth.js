import { Router } from 'express'

import { signUp, login } from '../controllers/auth'

import {
  loginUserValidation,
  signUpUserValidation,
} from '../middleware/validation'

const router = Router()

router.post('/users', signUpUserValidation, signUp)
router.post('/auth', loginUserValidation, login)

export default router
