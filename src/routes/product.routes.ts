import { verifyAlreadyExistProductCategoryByIds } from '../middlewares/products/verifyAlreadyExistProductCategoryByIds'
import { verifyAlreadyExistProductByName } from '../middlewares/products/verifyAlreadyExistProductByName'
import { createProductCategorySchema } from './../schemas/createProductCategorySchema'
import { validateIdCategory } from './../middlewares/validations/validateIdCategory'
import { verifyExistCategoryById } from '../middlewares/categories/verifyExistCategoryById'
import { validateIdProduct } from './../middlewares/validations/validateIdProduct'
import { verifyExistProductById } from '../middlewares/products/verifyExistProductById'
import { validateSchema } from '../middlewares/validations/validateSchema'
import { productControllers } from './../controllers/productControllers'
import { createProductSchema } from './../schemas/createProductSchema'
import { Router } from 'express'

export const productsRoutes = Router()

productsRoutes.get('/', 
    productControllers.getAllProducts
)

productsRoutes.post('/',
    validateSchema(createProductSchema),
    verifyAlreadyExistProductByName, 
    productControllers.createProduct
)

productsRoutes.post('/categories',
    validateSchema(createProductCategorySchema),
    validateIdProduct,
    validateIdCategory,
    verifyAlreadyExistProductCategoryByIds,
    productControllers.createProductCategory
)

productsRoutes.get('/:id',
    verifyExistProductById,
    productControllers.getProductById
)
