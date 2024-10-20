import {
  DeviceReader,
  EnvironmentSensor,
  EnvironmentSensorRegistry,
} from '../entities/deviceReader.entity'
import { Filter, Pagination, Repository } from '../entities/repository.entity'

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

  async getCurrentMeasure(): Promise<EnvironmentSensor> {
    const measure = await this.deviceReader.read()
    return measure
  }

  async getMeasures(filter?: Filter): Promise<Pagination<EnvironmentSensor>> {
    const measures = await this.repository.findAll(filter)
    return measures
  }

  async getMeasure(id: string): Promise<EnvironmentSensor> {
    const measure = await this.repository.read(id)
    return measure
  }

  async updateMeasure(id: string, data: EnvironmentSensor): Promise<void> {
    await this.repository.update(id, data)
  }

  async deleteMeasure(id: string): Promise<void> {
    await this.repository.delete(id)
  }
}
