import { describe, expect, it, vi } from 'vitest'
import { SensorAdapter } from './sensor.adapter'

describe('BPM180DeviceAdapter', () => {
  vi.mock('../devices/bmp180', () => {
    return {
      readBMP180: async () => {
        return {
          temperature: 10,
          pressure: 10,
        }
      },
    }
  })
  vi.mock('../devices/dht11', () => {
    return {
      readDHT11: async () => {
        return {
          temperature: 11,
          humidity: 10,
        }
      },
    }
  })

  it('should return a temperature value', async () => {
    const data = await new SensorAdapter().read()
    expect(data.temperature).toBe(10.5)
  })
})
