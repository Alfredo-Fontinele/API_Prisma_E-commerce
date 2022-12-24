import { Category } from '@prisma/client'
import { Request } from 'express' 
import { ICategory } from '../interfaces/categories'
import { categoryModel } from './../database/index'

class CategoryServices {
    async getAllCategories(req:Request):Promise<Category[]> {
        return await categoryModel.findMany()
    }
    async createCategory(req:Request):Promise<Category> {
        const { name }:ICategory = await req.body
        return await categoryModel.create({
            data: { 
                name 
            }
        })
    }
    async getCategoryById(req:Request):Promise<Category | null> {
        const { id } = req.params
        return await categoryModel.findUnique({
            where: {
                id: id
            }
        })
    }
}

export const categoryServices = new CategoryServices()
