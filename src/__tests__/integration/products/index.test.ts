import { app } from '../../../app'
import request from 'supertest'
import { product1 } from './../../mocks/products/index'

describe("POST /products", () => {
    it("Should be able to create a new product", async () => {
        const response = await request(app).post('/products').send(product1)
        
        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("name")
        expect(response.body).toHaveProperty("price")
        expect(response.body).toHaveProperty("quantity")
        expect(response.body).toHaveProperty("description")
        expect(response.body).toHaveProperty("image")
        expect(response.body).toHaveProperty("isStock")
        expect(response.body).toHaveProperty("created_at")
        
        expect(response.status).toBe(201)
    })
})
