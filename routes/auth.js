import { Router } from 'express'

import { signUp, login } from '../controllers/auth'

const router = Router()

router.post('/users', signUp)
router.post('/auth', login)

export default router
