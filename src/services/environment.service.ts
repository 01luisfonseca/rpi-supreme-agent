import { DeviceReader } from '../entities/deviceReader.entity'

export class EnvironmentService {
  private deviceReader: DeviceReader

  constructor(deviceReader: DeviceReader) {
    this.deviceReader = deviceReader
  }

  async getTemperature(): Promise<number> {
    const data = await this.deviceReader.read()
    return data.temperature
  }
}
