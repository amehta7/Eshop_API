import { Router } from 'express'

import { createOrder } from '../controllers/order'

import { authMiddleware } from '../middleware/auth'

const router = Router()

router.post('/', authMiddleware, createOrder)

export default router
