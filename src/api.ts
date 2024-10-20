import { Server } from './controllers/api/server'
import middleware from './controllers/api/middleware'
import routes from './controllers/api/routes'

const server = new Server({
  port: 3000,
  middleware,
  routes,
})

server.start()
