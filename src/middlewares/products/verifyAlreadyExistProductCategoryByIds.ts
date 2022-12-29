import { Request, Response, NextFunction } from 'express'
import { AppError } from '../../errors/appError'
import { IProductCategory } from '../../interfaces/productCategories'
import { productCategoryModel } from '../../database/index'

export const verifyAlreadyExistProductCategoryByIds = async (req:Request, res:Response, next:NextFunction) => {
    const body:IProductCategory = await req.body
    const productFound = await productCategoryModel.findFirst({
        where: {
            id_category: body.id_category,
            id_product: body.id_product
        }
    })
    if (productFound) {
        throw new AppError('Product already exists in this category', 400)
    }
    return next()
}
