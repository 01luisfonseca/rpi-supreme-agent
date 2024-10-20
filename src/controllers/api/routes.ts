import { Application, Request, Response } from 'express'

export default function routes(app: Application) {
  app.get('/', (req: Request, res: Response) => {
    res.send('OK')
  })
}
