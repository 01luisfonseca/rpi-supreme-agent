import bmp180 from 'bmp180-sensor'

export type BMP180 = {
  temperature: number
  pressure: number
}

export async function readBMP180(): Promise<BMP180> {
  const sensor = await bmp180({
    address: 0x77,
    mode: 1,
  })
  const data = await sensor.read()
  await sensor.close()
  return data
}
