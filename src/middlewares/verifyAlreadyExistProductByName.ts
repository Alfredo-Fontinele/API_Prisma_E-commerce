import { Request, Response, NextFunction } from 'express'
import { productModel } from '../database'
import { IProduct } from './../interfaces/products'
import { AppError } from './../errors/appError'

export const verifyAlreadyExistProductByName = async (req:Request, res:Response, next:NextFunction) => {
    const body:IProduct = await req.body
    const productFound = await productModel.findFirst({
        where: {
            name: body.name
        }
    })
    if (productFound) {
        throw new AppError('Product`s name Already Exist', 400)
    }
    return next()
}
