import request from "supertest"
import { app } from "../../../app"
import { category1 } from './../../mocks/categories/index'
import { PrismaClient } from '@prisma/client'

describe("POST /categories", () => {
    it("Should be able to create a category", async () => {
        const response = await request(app).post("/categories").send(category1)

        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("name")

        expect(response.status).toBe(201)
    })
})
