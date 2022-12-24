import { Router } from 'express'
import { productsRoutes } from './product.routes'
import { categoriesRoutes } from './category.routes'

export const Routes = Router()

Routes.use('/products', productsRoutes)
Routes.use('/categories', categoriesRoutes)
