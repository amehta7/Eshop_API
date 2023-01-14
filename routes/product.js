import { Router } from 'express'

import {
  getAllProducts,
  getSingleProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProductCategories,
} from '../controllers/product'

import { authMiddleware } from '../middleware/auth'
import { adminMiddleware } from '../middleware/admin'

const router = Router()

router
  .route('/')
  .get(getAllProducts)
  .post([authMiddleware, adminMiddleware], createProduct)

router.get('/categories', getAllProductCategories)

router
  .route('/:id')
  .get(getSingleProductById)
  .put([authMiddleware, adminMiddleware], updateProduct)
  .delete([authMiddleware, adminMiddleware], deleteProduct)

export default router
