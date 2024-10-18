import { describe, expect, it, vi } from 'vitest'
import { readBMP180 } from './bmp180'

describe('readBMP180', () => {
  vi.mock('bmp180-sensor', () => {
    return {
      default: vi.fn().mockImplementation(() => {
        return {
          read: vi.fn().mockResolvedValue({ temperature: 10, pressure: 10 }),
          close: vi.fn(),
        }
      }),
    }
  })

  it('should return a temperature value', async () => {
    const data = await readBMP180()
    expect(data.temperature).toBe(10)
  })
})
