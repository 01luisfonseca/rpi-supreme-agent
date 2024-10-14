package sensors

import (
	"log"

	"github.com/d2r2/go-dht"
	"github.com/d2r2/go-logger"
)

type DHT11 struct {
	port        int
	sensorName  string
	Temperature Temperature
	Humidity    Humidity
	Retries     int
}

func NewDHT11(sensorName string, gpio int) (*DHT11, error) {
	logger.ChangePackageLogLevel("DHT11 "+sensorName, logger.InfoLevel)
	return &DHT11{port: gpio, sensorName: sensorName}, nil
}

func (d *DHT11) Read() error {
	// Leer datos del sensor
	temperature, humidity, retries, err := dht.ReadDHTxxWithRetry(dht.DHT11, d.port, false, 10)
	if err != nil {
		log.Fatalf("Error in DHT11 sensor %s: %s", d.sensorName, err)
		return err
	}
	// Log the measure
	log.Printf("Measure: %v C, %v %, %v retries", temperature, humidity, retries)
	d.Temperature = Temperature(temperature)
	d.Humidity = Humidity(humidity)
	d.Retries = retries
	return nil
}
