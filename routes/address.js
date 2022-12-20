import { Router } from 'express'

import { getAddress, addAddress } from '../controllers/address'

import { authMiddleware } from '../middleware/auth'

const router = Router()

router.route('/').get(authMiddleware, getAddress).post(addAddress)

export default router
