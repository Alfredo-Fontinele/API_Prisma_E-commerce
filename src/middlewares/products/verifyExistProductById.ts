import { Request, Response, NextFunction } from 'express'
import { productModel } from '../../database'
import { AppError } from '../../errors/appError'

export const verifyExistProductById = async (req:Request, res:Response, next:NextFunction) => {
    const { id } = req.params
    const productFound = await productModel.findFirst({
        where: {
            id: id
        }
    })
    if (!productFound) {
        throw new AppError('Product Not Exist', 404)
    }
    return next()
}
