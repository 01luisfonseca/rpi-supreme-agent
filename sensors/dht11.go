package sensors

import (
	"log"
	"strconv"

	"github.com/MichaelS11/go-dht"
)

type DHT11 struct {
	port        int
	sensorName  string
	dht         *dht.DHT
	Temperature Temperature
	Humidity    Humidity
}

func NewDHT11(sensorName string, gpio int) (*DHT11, error) {
	err := dht.HostInit()
	if err != nil {
		log.Println("HostInit error:", err)
		return nil, err
	}
	dhtInstance, err := dht.NewDHT("GPIO"+strconv.Itoa(gpio), dht.Celsius, "")
	if err != nil {
		log.Println("NewDHT error:", err)
		return nil, err
	}
	return &DHT11{port: gpio, sensorName: sensorName, dht: dhtInstance}, nil
}

func (d *DHT11) Read() error {
	// Leer datos del sensor
	temperature, humidity, err := d.dht.ReadRetry(11)
	if err != nil {
		log.Fatalf("Error in DHT11 sensor %s: %s", d.sensorName, err)
		return err
	}
	// Log the measure
	log.Printf("Measure: %v C, %vrh", temperature, humidity)
	d.Temperature = Temperature(temperature)
	d.Humidity = Humidity(humidity)
	return nil
}
