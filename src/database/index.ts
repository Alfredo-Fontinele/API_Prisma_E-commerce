import { PrismaClient } from "@prisma/client"

const prismaClient = new PrismaClient({
    log: ["error", "info", "query", "warn"],
})

export const categoryModel = prismaClient.category
export const productModel = prismaClient.product
export const productCategoryModel = prismaClient.productCategory
