import { DeviceReader } from '../entities/deviceReader.entity'
import { Repository } from '../entities/repository.entity'

export class EnvironmentService<TFields, T> {
  private deviceReader: DeviceReader
  private repository: Repository<TFields, T>

  constructor(deviceReader: DeviceReader, repository: Repository<TFields, T>) {
    this.deviceReader = deviceReader
    this.repository = repository
  }

  async saveMeasure(): Promise<void> {
    const data = (await this.deviceReader.read()) as TFields
    await this.repository.create(data)
  }
}
