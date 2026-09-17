# Pinout y esquemático

## Distribución de pines

![Pinout de DevLab PY32F003 en español, vistas superior e inferior](/py32f003/pinout-es.png)

[Descargar pinout en español (PDF)](/py32f003/pinout-es.pdf) ·
[Abrir esquemático (PDF)](/py32f003/esquematico.pdf)

## Pines utilizados en los ejemplos

| Señal de la placa | Uso en el taller | Observación |
| --- | --- | --- |
| PB5 | LED de usuario | Comparte la función MOSI; comprobar LED Enable |
| PA0 | TX de `Serial` | Conectar a RX del adaptador USB-UART |
| PA1 | RX de `Serial` | Conectar a TX del adaptador USB-UART |
| PA2 | Pulsador externo o ADC_IN2 | Usar un solo ejercicio a la vez |
| PA13 / PA10 | SWDIO / SDA | Misma conexión física en este encapsulado |
| PA14 / PB6 | SWCLK / SCL | Misma conexión física en este encapsulado |
| PB0 / PF2-NRST | Reinicio | Mantener la función de reset durante el taller |
| GND | Tierra | Referencia común para placa, programador y accesorios |

Los nombres `PA0`, `PA1`, `PA2` y `PB5` son los identificadores usados en el
código Arduino. Los números de un Arduino UNO no describen estas conexiones.

::: warning Pines compartidos
PA10/PB6 y PA13/PA14 corresponden a dos conexiones físicas compartidas del
DFN8. Los dos conectores de cuatro pines tampoco son buses independientes.
No conectes un periférico I²C mientras programas por SWD. Consulta la
[guía I²C](./33_i2c.md) antes de reutilizar esas líneas.
:::

## Alimentación

El esquema distingue la entrada **5V**, la salida regulada **3V3** y
**VCC**, que alimenta al microcontrolador. El selector determina si VCC se
une a 3.3 V o a 5 V. La estación del taller se prepara con VCC a **3.3 V**.

Los conectores de cuatro pines llevan **GND, VCC, SWDIO/SDA y SWCLK/SCL**.
Identifica cada señal en la serigrafía: la orientación de la placa y del
cable cambia el orden que ves. El formato JST no garantiza compatibilidad
eléctrica entre cualquier par de dispositivos.

## LED y botón de la placa

El LED de usuario se conecta a **PB5** y enciende con `HIGH`. En las placas
con puente **LED Enable**, éste debe estar cerrado para completar el circuito.
El LED de alimentación sólo indica presencia de tensión.

El botón integrado es **RESET**, por lo que reinicia la ejecución cuando la
función NRST está habilitada. Para practicar `digitalRead()` utiliza un
[pulsador externo en PA2](../examples/lab02-gpio.md).

## Topología y dimensiones

![Topología de la placa DevLab PY32F003](/py32f003/topologia.png)

![Dimensiones de la placa DevLab PY32F003](/py32f003/dimensiones.png)

**Siguiente paso:** [Programación SWD](./04_swd.md).
