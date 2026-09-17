// Potenciometro entre 3V3 y GND; terminal central a PA2.
// Alimenta el microcontrolador a 3.3 V durante esta practica.
const uint32_t SENSOR = PA2;
const uint32_t PIN_LED = PB5;
const uint32_t VREF_MV = 3300;  // Sustituye por el VCC medido para estimar tension.

void setup() {
  pinMode(PIN_LED, OUTPUT);
  Serial.begin(115200);
  analogReadResolution(12);
}

void loop() {
  const uint32_t lectura = analogRead(SENSOR);
  const uint32_t milivoltios = lectura * VREF_MV / 4095;

  Serial.print("ADC=");
  Serial.print(lectura);
  Serial.print("; mV estimados=");
  Serial.println(milivoltios);
  digitalWrite(PIN_LED, lectura >= 2048 ? HIGH : LOW);
  delay(200);
}
