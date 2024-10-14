package main

import (
	"log"
	"time"

	"github.com/01luisfonseca/rpi-supreme-agent/sensors"
)

func main() {

	// Sensor
	dht11, err := sensors.NewDHT11("Port4", 4)
	if err != nil {
		log.Fatalf("Error creating DHT11 sensor: %s", err)
	}

	// Loop
	for {
		// Read sensor
		err = dht11.Read()
		if err != nil {
			log.Printf("Error reading DHT11 sensor: %s", err)
		}
		// Log sensor
		log.Printf("DHT11 sensor: %v C, %v rh", dht11.Temperature, dht11.Humidity)
		// Wait
		time.Sleep(time.Second * 5)
	}
}
