import { verifyAlreadyExistProductCategoryByIds } from '../middlewares/verifyAlreadyExistProductCategoryByIds'
import { verifyAlreadyExistProductByName } from './../middlewares/verifyAlreadyExistProductByName'
import { createProductCategorySchema } from './../schemas/createProductCategorySchema'
import { verifyExistProductById } from './../middlewares/verifyExistProductById'
import { validateSchema } from '../middlewares/validations/validateSchema'
import { productControllers } from './../controllers/productControllers'
import { createProductSchema } from './../schemas/createProductSchema'
import { Router } from 'express'
import { verifyExistCategoryById } from './../middlewares/verifyExistCategoryById';

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
    verifyExistProductById,
    verifyExistCategoryById,
    verifyAlreadyExistProductCategoryByIds,
    productControllers.createProductCategory
)

productsRoutes.get('/:id',
    verifyExistProductById,
    productControllers.getProductById
)
