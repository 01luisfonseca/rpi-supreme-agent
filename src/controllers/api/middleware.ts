import express from 'express'
import cors from 'cors'

export default function middleware(app: express.Application) {
  app.use(cors())
}
