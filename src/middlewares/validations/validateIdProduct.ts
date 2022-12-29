import { Request, Response, NextFunction } from 'express'
import { AppError } from '../../errors/appError'
import { IProductId } from '../../interfaces/productCategories'
import { productModel } from './../../database/index'

export const validateIdProduct = async (req:Request, res:Response, next:NextFunction) => {
    const body:IProductId = await req.body
    const productFound = await productModel.findFirst({
        where: {
            id: body.id_product
        }
    })
    if (!productFound) {
        throw new AppError('Product Id Not Exist', 400)
    }
    return next()
}
