import {
  DeviceReader,
  EnvironmentSensor,
  EnvironmentSensorRegistry,
} from '../entities/deviceReader.entity'
import { Repository } from '../entities/repository.entity'

export class EnvironmentService {
  private deviceReader: DeviceReader
  private repository: Repository<EnvironmentSensor, EnvironmentSensorRegistry>

  constructor(
    deviceReader: DeviceReader,
    repository: Repository<EnvironmentSensor, EnvironmentSensorRegistry>
  ) {
    this.deviceReader = deviceReader
    this.repository = repository
  }

  async saveMeasure(): Promise<void> {
    const data = await this.deviceReader.read()
    await this.repository.create(data)
  }
}
