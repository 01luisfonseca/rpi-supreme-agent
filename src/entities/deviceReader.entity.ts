import {
  CreatedAt,
  CreatedBy,
  DeletedAt,
  DeletedBy,
  ID,
  UpdatedAt,
  UpdatedBy,
} from './common'

export type EnvironmentSensor = {
  temperature: number
  humidity: number
  pressure: number
}

export type EnvironmentSensorRegistry = EnvironmentSensor & {
  id: ID
  createdAt: CreatedAt
  updatedAt: UpdatedAt
  deletedAt: DeletedAt
  createdBy: CreatedBy
  updatedBy: UpdatedBy
  deletedBy: DeletedBy
}

export type DeviceReader = {
  read(): Promise<EnvironmentSensor>
}
