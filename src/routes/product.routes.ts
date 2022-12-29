import { verifyAlreadyExistProductCategoryByIds } from '../middlewares/products/verifyAlreadyExistProductCategoryByIds'
import { verifyAlreadyExistProductByName } from '../middlewares/products/verifyAlreadyExistProductByName'
import { productCategorySchema, productSchema } from '../schemas/products'
import { validateIdCategory } from './../middlewares/validations/validateIdCategory'
import { verifyExistCategoryById } from '../middlewares/categories/verifyExistCategoryById'
import { validateIdProduct } from './../middlewares/validations/validateIdProduct'
import { verifyExistProductById } from '../middlewares/products/verifyExistProductById'
import { validateSchema } from '../middlewares/validations/validateSchema'
import { productControllers } from './../controllers/productControllers'

import { Router } from 'express'

export const productsRoutes = Router()

productsRoutes.get('/', 
    productControllers.getAllProducts
)

productsRoutes.post('/',
    validateSchema(productSchema),
    verifyAlreadyExistProductByName, 
    productControllers.createProduct
)

productsRoutes.post('/categories',
    validateSchema(productCategorySchema),
    validateIdProduct,
    validateIdCategory,
    verifyAlreadyExistProductCategoryByIds,
    productControllers.createProductCategory
)

productsRoutes.get('/:id',
    verifyExistProductById,
    productControllers.getProductById
)
