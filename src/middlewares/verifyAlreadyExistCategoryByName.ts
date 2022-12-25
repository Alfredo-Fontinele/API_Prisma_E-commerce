import { Request, Response, NextFunction } from 'express'
import { IProduct } from './../interfaces/products'
import { AppError } from './../errors/appError'
import { categoryModel } from './../database/index';

export const verifyAlreadyExistCategoryByName = async (req:Request, res:Response, next:NextFunction) => {
    const body:IProduct = await req.body
    const categoryFound = await categoryModel.findFirst({
        where: {
            name: body.name
        }
    })
    if (categoryFound) {
        throw new AppError('Category`s name Already Exist', 400)
    }
    return next()
}
