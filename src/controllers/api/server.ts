import express, { Application } from 'express'

export type Middleware = (app: Application) => void
export type Routes = (app: Application) => void

export type ServerInstance = {
  port: number
  middleware?: Middleware
  routes?: Routes
}

export class Server {
  app: Application
  private port: number

  constructor(serverInstance: ServerInstance) {
    const { port, middleware, routes } = serverInstance
    this.app = express()
    this.port = port
    if (middleware) {
      middleware(this.app)
    }
    if (routes) {
      routes(this.app)
    }
  }

  // Método para iniciar el servidor
  public start() {
    return this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`)
    })
  }
}
