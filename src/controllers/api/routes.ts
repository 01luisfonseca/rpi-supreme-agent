import express from 'express'

export default function routes(app: express.Application) {
  app.get('/', (req: express.Request, res: express.Response) => {
    res.send('OK')
  })
}
