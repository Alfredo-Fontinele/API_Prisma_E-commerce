import { Request, Response } from 'express' 
import { categoryServices } from '../services/categoryServices'

class CategoryControllers {
    async getAllCategories(req:Request, res:Response) {
        const data = await categoryServices.getAllCategories(req)
        return res.status(200).json(data)
    }
    async createCategory(req:Request, res:Response) {
        const data = await categoryServices.createCategory(req)
        return res.status(201).json(data)
    }
    async getCategoryById(req:Request, res:Response) {
        const data = await categoryServices.getCategoryById(req)
        return res.status(200).json(data)
    }
    async editCategory(req:Request, res:Response) {
        const data = await categoryServices.editCategory(req)
        return res.status(200).json(data)
    }
    async deleteCategory(req:Request, res:Response) {
        const data = await categoryServices.deleteCategory(req)
        return res.status(204).json(data)
    }
}

export const categoryControllers = new CategoryControllers()
