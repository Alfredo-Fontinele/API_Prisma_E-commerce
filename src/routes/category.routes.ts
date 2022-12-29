import { verifyAlreadyExistCategoryByName } from '../middlewares/categories/verifyAlreadyExistCategoryByName'
import { verifyExistCategoryById } from '../middlewares/categories/verifyExistCategoryById'
import { categorySchema } from '../schemas/categories'
import { categoryControllers } from '../controllers/categoryControllers'
import { validateSchema } from './../middlewares/validations/validateSchema'
import { Router } from 'express'

export const categoriesRoutes = Router()

categoriesRoutes.get('/', 
    categoryControllers.getAllCategories
)

categoriesRoutes.post('/', 
    validateSchema(categorySchema),
    verifyAlreadyExistCategoryByName,
    categoryControllers.createCategory
)

categoriesRoutes.get('/:id', 
    verifyExistCategoryById,
    categoryControllers.getCategoryById
)

categoriesRoutes.patch('/:id',
    validateSchema(categorySchema),
    verifyExistCategoryById,
    categoryControllers.editCategory
)

categoriesRoutes.delete('/:id',
    verifyExistCategoryById,
    categoryControllers.deleteCategory
)
