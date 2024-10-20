import { describe, expect, it, vi } from 'vitest'
import request from 'supertest'
import { Server } from './server'
import { Application, Request, Response } from 'express'

describe('Server', () => {
  const serverInstance = {
    port: 3000,
    routes: (app: Application) => {
      app.get('/', (req: Request, res: Response) => {
        console.log('GET /')
        res.status(200).json({ message: 'OK' })
      })
    },
  }
  const server = new Server(serverInstance)

  it('should return a response', async () => {
    const response = await request(server.app).get('/')
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ message: 'OK' })
  })
})
