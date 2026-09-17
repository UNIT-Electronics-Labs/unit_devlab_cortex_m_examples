# GPIO y temporización

## Qué es un GPIO

Un GPIO es un pin configurable como entrada o salida digital. En el taller,
**PB5** controla el LED y **PA2** permite leer un pulsador externo.

| Función Arduino | Acción |
| --- | --- |
| `pinMode(PB5, OUTPUT)` | Configura PB5 como salida |
| `digitalWrite(PB5, HIGH)` | Enciende el LED integrado si LED Enable está cerrado |
| `digitalWrite(PB5, LOW)` | Apaga el LED |
| `pinMode(PA2, INPUT_PULLUP)` | Configura una entrada con resistencia interna a VCC |
| `digitalRead(PA2)` | Lee HIGH o LOW |

En el circuito del pulsador, PA2 está en HIGH al soltarlo y en LOW al
conectarlo a GND. El botón RESET integrado tiene otra función: reiniciar
el microcontrolador.

## Primeros ejemplos

- [Lab 1: Parpadeo del LED integrado](../examples/lab01-blink.md).
- [Lab 2: Control del LED mediante un pulsador externo](../examples/lab02-gpio.md).

## Tiempo de espera y tiempo transcurrido

`delay(500)` detiene el avance de `loop()` durante 500 ms, aunque las
interrupciones habilitadas pueden seguir ejecutándose. Es útil para comenzar.

`millis()` permite consultar el tiempo transcurrido y decidir cuándo cambiar
una salida sin detener el resto del ciclo. En la [práctica de validación](../examples/lab05-validacion.md)
se utiliza una resta sin signo:

```cpp
const uint32_t ahora = millis();
if (ahora - ultimoCambio >= INTERVALO_MS) {
  ultimoCambio = ahora;
  // Actualizar la salida.
}
```

Las variables temporales son de tipo `uint32_t`. La resta permite mantener
la comparación cuando el contador vuelve a cero, siempre que se evalúe
regularmente con intervalos cortos como los del ejemplo.

## PWM como ampliación

PWM cambia la proporción de tiempo que una salida permanece en HIGH. Puede
regular el brillo de un LED mediante un temporizador compatible. No es una
salida de tensión analógica continua ni implica que exista un DAC.

En PB5 hay funciones compartidas con SPI. Antes de combinar periféricos,
revisa su asignación y los límites del encapsulado en el [pinout](./03_pinout.md).
