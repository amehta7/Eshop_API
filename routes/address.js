import { Router } from 'express'

import { addAddress } from '../controllers/address'

import { authMiddleware } from '../middleware/auth'

import { addressValidation } from '../middleware/validation'

const router = Router()

router.route('/').post(authMiddleware, addressValidation, addAddress)

export default router
