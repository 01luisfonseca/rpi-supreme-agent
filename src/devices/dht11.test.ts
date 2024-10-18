import { describe, expect, it, vi } from 'vitest'
import { readDHT11 } from './dht11'

describe('readDHT11', () => {
  vi.mock('node-dht-sensor', () => {
    return {
      default: {
        read: (
          one: number,
          two: number,
          callback: (
            err: NodeJS.ErrnoException | null,
            temperature: number,
            humidity: number
          ) => void
        ) => {
          console.log('read', one, two, callback)
          callback(null, 10, 10)
        },
      },
    }
  })

  it('should return a temperature value', async () => {
    const data = await readDHT11()
    expect(data.temperature).toBe(10)
  })
})
