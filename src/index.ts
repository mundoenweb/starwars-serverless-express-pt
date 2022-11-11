import serverless from 'serverless-http'
import express from 'express'
import IndexRouter from './routes/index'
import { error404, handlerErrors } from './middleware/errors'
require('./config/connection')

const app = express()

// middlewares
app.use(express.json())

app.use(IndexRouter)

// helper errors
app.use(error404)
app.use(handlerErrors)

const handler = serverless(app)

export { handler, app }
