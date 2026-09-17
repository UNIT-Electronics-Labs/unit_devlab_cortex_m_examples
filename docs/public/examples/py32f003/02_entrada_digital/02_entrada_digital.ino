// Conecta un pulsador externo entre PA2 y GND.
const uint32_t PIN_LED = PB5;
const uint32_t BOTON = PA2;

void setup() {
  pinMode(PIN_LED, OUTPUT);
  pinMode(BOTON, INPUT_PULLUP);
}

void loop() {
  const bool presionado = digitalRead(BOTON) == LOW;
  digitalWrite(PIN_LED, presionado ? HIGH : LOW);
  delay(10);
}
