import { Request, Response, NextFunction } from 'express'
import { AppError } from './../../errors/appError'
import * as yup from 'yup'

export const validateSchema = (serializer: yup.AnySchema) => async (req:Request, res:Response, next:NextFunction) => {
    try {
        const body = await req.body
        await serializer.validate(body)
        return next()
    } catch (error:any) {
        throw new AppError(error.message, 400)
    }
}
