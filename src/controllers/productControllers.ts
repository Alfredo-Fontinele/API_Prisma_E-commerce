import { Request, Response } from 'express' 
import { productServices } from './../services/productservices'

class ProductControllers {
    async getAllProducts(req:Request, res:Response) {
        const data = await productServices.getAllProducts(req)
        return res.status(200).json(data)
    }
    async createProduct(req:Request, res:Response) {
        const data = await productServices.createProduct(req)
        return res.status(201).json(data)
    }
    async getProductById(req:Request, res:Response) {
        const data = await productServices.getProductById(req)
        return res.status(200).json(data)
    }
    async createProductCategory(req:Request, res:Response) {
        const data = await productServices.createProductCategory(req)
        return res.status(201).json(data)
    }
}

export const productControllers = new ProductControllers()
