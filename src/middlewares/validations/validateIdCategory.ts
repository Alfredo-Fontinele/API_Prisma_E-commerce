import { Request, Response, NextFunction } from 'express'
import { AppError } from '../../errors/appError'
import { ICategoryId } from '../../interfaces/productCategories'
import { categoryModel } from './../../database/index'

export const validateIdCategory = async (req:Request, res:Response, next:NextFunction) => {
    const body:ICategoryId = await req.body
    const categoryFound = await categoryModel.findFirst({
        where: {
            id: body.id_category
        }
    })
    if (!categoryFound) {
        throw new AppError('Category Id Not Exist', 400)
    }
    return next()
}
