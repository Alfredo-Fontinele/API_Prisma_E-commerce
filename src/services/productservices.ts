import { Product, ProductCategory } from '@prisma/client'
import { Request } from 'express' 
import { productModel } from '../database'
import { IProduct } from './../interfaces/products'
import { productCategoryModel } from './../database/index'
import { IProductCategory } from '../interfaces/productCategories'

class ProductServices {
    async getAllProducts(req:Request):Promise<Product[]> {
        return await productModel.findMany()
    }
    async createProduct(req:Request) {
        const { name, price }:IProduct = await req.body
        return await productModel.create({
          data: {
            name,
            price,
          },
        })
    }
    async getProductById(req:Request):Promise<Product | null> {
        const { id } = req.params
        return await productModel.findUnique({
            where: {
                id: id
            }
        })
    }
    async createProductCategory(req: Request):Promise<ProductCategory> {
        const { id_product, id_category }:IProductCategory = req.body
        return await productCategoryModel.create({
            data: {
                id_category,
                id_product
            }
        })
    }
}

export const productServices = new ProductServices()
