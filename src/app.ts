import express from 'express'
import { handlerError } from './errors/handlerError'
import { Routes } from './routes/index'

export const app = express()

app.use(express.json())
app.use(Routes)
app.use(handlerError)
