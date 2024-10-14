package sensors

type Sensor interface {
	Read() error
}

type Temperature float32
type Humidity float32
type Pressure float32
