export type Sensor<T> = {
  read(): Promise<T>;
};
