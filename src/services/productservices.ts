import { Product, ProductCategory } from '@prisma/client'
import { Request } from 'express'
import { productModel } from '../database'
import { IProduct } from '../interfaces/products'
import { productCategoryModel } from '../database/index'
import { IProductCategory } from '../interfaces/productCategories'
import 'express-async-errors'

class ProductServices {
    async getAllProducts(req:Request):Promise<Product[]> {
        return await productModel.findMany()
    }
    async createProduct(req:Request):Promise<Product> {
        const { name, price, image, description, isStock, quantity }:IProduct = await req.body
        return await productModel.create({
            data: {
                name, price, image, description, isStock, quantity
            }
        })
    }
    async getProductById(req:Request):Promise<Product | null> {
        const { id } = req.params
        return await productModel.findUnique({
            where: {
                id: id
            },
            include: {
                ProductCategory: {
                    select: {
                        category: true
                    }
                }
            }
        })
    }
    async createProductCategory(req: Request):Promise<ProductCategory | null> {
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
