import { verifyAlreadyExistCategoryByName } from './../middlewares/verifyAlreadyExistCategoryByName'
import { verifyExistCategoryById } from '../middlewares/verifyExistCategoryById'
import { createCategorySchema } from './../schemas/createCategorySchema'
import { categoryControllers } from '../controllers/categoryControllers'
import { validateSchema } from './../middlewares/validations/validateSchema'
import { Router } from 'express'

export const categoriesRoutes = Router()

categoriesRoutes.get('/', 
    categoryControllers.getAllCategories
)

categoriesRoutes.post('/', 
    validateSchema(createCategorySchema),
    verifyAlreadyExistCategoryByName,
    categoryControllers.createCategory
)

categoriesRoutes.get('/:id', 
    verifyExistCategoryById,
    categoryControllers.getCategoryById
)
