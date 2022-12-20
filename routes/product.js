import { Router } from 'express'

import {
  getAllProducts,
  getSingleProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProductCategories,
} from '../controllers/product'

const router = Router()

router.route('/').get(getAllProducts).post(createProduct)

router.get('/categories', getAllProductCategories)

router
  .route('/:id')
  .get(getSingleProductById)
  .put(updateProduct)
  .delete(deleteProduct)

export default router
