export type EnvironmentSensor = {
  temperature: number
  humidity: number
  pressure: number
}

export type DeviceReader = {
  read(): Promise<EnvironmentSensor>
}
