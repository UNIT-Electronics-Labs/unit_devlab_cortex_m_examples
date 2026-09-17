<script setup>
import { withBase } from 'vitepress'
</script>

# Lab 3: Comunicación UART y eco

## Objetivo

Enviar mensajes desde la placa y comprobar que recibe y devuelve los bytes
escritos en el monitor serie.

## Material y conexiones

Utiliza un adaptador **USB-UART con lógica de 3.3 V** y tierra común con la
placa. Mantén la alimentación habitual de la estación.

| PY32F003 | USB-UART |
| --- | --- |
| PA0 (TX) | RX |
| PA1 (RX) | TX |
| GND | GND |

Deja sin conectar la salida de alimentación del adaptador. No uses una
interfaz RS-232, cuyas tensiones no corresponden a la lógica del microcontrolador.

## Código

<a :href="withBase('/examples/py32f003/03_uart/03_uart.ino')" download>Descargar 03_uart.ino</a>

<<< @/public/examples/py32f003/03_uart/03_uart.ino{cpp}

## Procedimiento

1. Selecciona **U(S)ART support → Enabled (generic 'Serial')**.
2. Compila y carga por SWD.
3. Abre el monitor serie en el puerto del **adaptador USB-UART**.
4. Selecciona **115200 baudios** y terminación de línea «Nueva línea».
5. Escribe `Hola PY32F003` y envía el mensaje.

## Resultado esperado

El monitor muestra `PY32F003 en ejecucion` aproximadamente cada dos segundos.
Al enviar un texto, aparece su eco. La repetición del mensaje de estado
permite observar actividad aunque abras el monitor después del arranque.

## Comprobación

Envía tres mensajes distintos y verifica que vuelven completos. Pulsa RESET
y comprueba que el mensaje de arranque vuelve a aparecer. Guarda una captura
o copia del registro.

Si no recibes texto, comprueba puerto, velocidad, tierra común y el cruce
TX→RX. Verifica primero la recepción del mensaje periódico y después el eco.
Un programador CMSIS-DAP sin función UART no transporta estos mensajes.

**Continúa con:** [Lab 4: ADC](./lab04-adc.md).
