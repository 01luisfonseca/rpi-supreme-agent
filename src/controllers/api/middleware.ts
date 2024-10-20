import { Application } from 'express'
import cors from 'cors'

export default function middleware(app: Application) {
  app.use(cors())
}
