import { categoryControllers } from '../controllers/categoryControllers'
import { Router } from 'express'

export const categoriesRoutes = Router()

categoriesRoutes.get('/', categoryControllers.getAllCategories)
categoriesRoutes.post('/', categoryControllers.createCategory)
categoriesRoutes.get('/:id', categoryControllers.getCategoryById)
