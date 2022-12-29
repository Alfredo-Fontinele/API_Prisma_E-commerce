import { Request, Response, NextFunction } from 'express'
import { productModel } from '../../database'
import { IProduct } from '../../interfaces/products'
import { AppError } from '../../errors/appError'
import { categoryModel } from '../../database/index'

export const verifyExistCategoryById = async (req:Request, res:Response, next:NextFunction) => {
    const { id } = req.params
    const categoryFound = await categoryModel.findFirst({
        where: { 
            id
        }
    })
    if (!categoryFound) {
        throw new AppError('Category Not Exist', 404)
    }
    return next()
}
