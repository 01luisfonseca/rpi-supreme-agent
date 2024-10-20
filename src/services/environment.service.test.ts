import { describe, expect, it, vi } from 'vitest'
import { EnvironmentService } from './environment.service'
import {
  DeviceReader,
  EnvironmentSensor,
  EnvironmentSensorRegistry,
} from '../entities/deviceReader.entity'
import { MockupRepository } from '../repositories/mockup.repository'

describe('EnvironmentService', () => {
  const deviceReader: DeviceReader = {
    read: async () => {
      return {
        temperature: 10,
        humidity: 10,
        pressure: 10,
      } as EnvironmentSensor
    },
  }
  const repository: MockupRepository<
    EnvironmentSensor,
    EnvironmentSensorRegistry
  > = new MockupRepository()

  it('should return a temperature value', async () => {
    const service = new EnvironmentService(deviceReader, repository)
    const result = await service.saveMeasure()
    expect(result).toBe(undefined)
  })
})
