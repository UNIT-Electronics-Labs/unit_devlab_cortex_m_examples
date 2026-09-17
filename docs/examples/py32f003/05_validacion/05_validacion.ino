// Cambia a true para reproducir una falla logica, luego restaura false.
const bool INYECTAR_FALLA = false;
const uint32_t PIN_LED = PB5;
const uint32_t INTERVALO_MS = 500;

uint32_t ultimoCambio = 0;
bool encendido = false;

void setup() {
  pinMode(PIN_LED, OUTPUT);
  digitalWrite(PIN_LED, LOW);
}

void loop() {
  const uint32_t ahora = millis();
  if (ahora - ultimoCambio >= INTERVALO_MS) {
    ultimoCambio = ahora;
    encendido = !encendido;
    digitalWrite(PIN_LED, INYECTAR_FALLA ? LOW : (encendido ? HIGH : LOW));
  }
}
