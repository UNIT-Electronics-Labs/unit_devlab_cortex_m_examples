// DevLab PY32F003L24D6TR: LED integrado en PB5, activo en HIGH.
const uint32_t PIN_LED = PB5;
const uint32_t INTERVALO_MS = 500;

void setup() {
  pinMode(PIN_LED, OUTPUT);
}

void loop() {
  digitalWrite(PIN_LED, HIGH);
  delay(INTERVALO_MS);
  digitalWrite(PIN_LED, LOW);
  delay(INTERVALO_MS);
}
