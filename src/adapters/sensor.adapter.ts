import {
  DeviceReader,
  EnvironmentSensor,
} from '../entities/deviceReader.entity'
import { DHT11, readDHT11 } from '../devices/dht11'
import { readBMP180 } from '../devices/bmp180'

export class SensorAdapter implements DeviceReader {
  async read(): Promise<EnvironmentSensor> {
    const dht11 = await readDHT11()
    const bmp180 = await readBMP180()
    const data = {
      temperature: (dht11.temperature + bmp180.temperature) / 2,
      humidity: dht11.humidity,
      pressure: bmp180.pressure,
    }
    return data
  }
}
