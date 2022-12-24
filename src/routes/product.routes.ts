import { productControllers } from './../controllers/productControllers'
import { Router } from 'express'

export const productsRoutes = Router()

productsRoutes.get('/', productControllers.getAllProducts)
productsRoutes.post('/', productControllers.createProduct)
productsRoutes.post('/', productControllers.createProductCategory)
productsRoutes.get('/:id', productControllers.getProductById)
