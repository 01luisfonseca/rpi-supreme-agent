import * as bmp180 from 'bmp180-sensor';

export async function readBMP180() {
  const sensor = await bmp180({
    address: 0x77,
    mode: 1
  });
  const data = await sensor.read();
  await sensor.close();
  return data;
}
