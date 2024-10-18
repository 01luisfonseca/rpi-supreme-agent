import dht11 from 'node-dht-sensor'

export type DHT11 = {
  temperature: number
  humidity: number
}

export const readDHT11 = async (): Promise<DHT11> => {
  return new Promise((resolve, reject) => {
    dht11.read(
      11,
      4,
      (
        err: NodeJS.ErrnoException | null,
        temperature: number,
        humidity: number
      ) => {
        if (!err) {
          resolve({
            temperature: temperature,
            humidity: humidity,
          })
        } else {
          reject(err)
        }
      }
    )
  })
}
