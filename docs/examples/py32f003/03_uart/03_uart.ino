// Core UNIT Electronics PY32 0.1.7: Serial usa PA0 (TX) y PA1 (RX).
uint32_t ultimoMensaje = 0;

void setup() {
  Serial.begin(115200);
  Serial.println("DevLab PY32F003: escribe un mensaje para recibir el eco.");
}

void loop() {
  while (Serial.available() > 0) {
    Serial.write(Serial.read());
  }

  const uint32_t ahora = millis();
  if (ahora - ultimoMensaje >= 2000) {
    ultimoMensaje = ahora;
    Serial.println("PY32F003 en ejecucion");
  }
}
