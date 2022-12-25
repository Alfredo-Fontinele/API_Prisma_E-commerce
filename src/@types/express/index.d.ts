import { Product } from '@prisma/client'

declare global {
    namespace Express {
        interface Request {
            productFound: Product
        }
    }
}

export {}