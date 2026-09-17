# Placa de desarrollo DevLab PY32F003

## Introducción

La **DevLab PY32F003L24D6TR**, de UNIT Electronics, permite aprender cómo un
programa controla entradas, salidas y periféricos de un microcontrolador.
En este taller utilizaremos Arduino IDE para escribir C/C++ y un programador
CMSIS-DAP para cargar el firmware mediante SWD.

![Vista superior de la placa DevLab PY32F003](/py32f003/placa-superior.png)

## Microcontrolador

| Característica de PY32F003L24D6TR | Valor |
| --- | --- |
| Núcleo | ARM Cortex-M0+ de 32 bits |
| Frecuencia máxima de esta variante | 24 MHz |
| Memoria Flash | 16 KB (16 384 bytes) |
| Memoria SRAM | 2 KB (2 048 bytes) |
| Encapsulado | DFN8 de 3 × 2 mm, con pad de tierra |
| ADC | 12 bits |
| Interfaces de aplicación | GPIO, UART, I²C y SPI; con pines compartidos |
| Programación y depuración | SWD |
| LED de usuario | PB5, activo en nivel alto |
| Alimentación del taller | VCC del microcontrolador a 3.3 V |

Los datos de núcleo, memoria y frecuencia corresponden a la columna
**PY32F003L24D6** de la tabla 1-4 (página 9) de la
[hoja de datos del fabricante, revisión 1.7](/py32f003/PY32F003_Datasheet_Rev1.7.pdf).
En Arduino IDE, esta memoria corresponde a **PY32F003x4**. El sufijo final
`D6TR` no indica que deba elegirse la variante `x6`.

## Componentes de la placa

- Regulador de 5 V a 3.3 V y selector de VCC.
- LED de alimentación y LED de usuario en PB5.
- Botón de reinicio, conectado a la señal compartida PB0/PF2-NRST.
- Cabeceras para alimentación, GPIO y señales de los periféricos.
- Conectores para SWD/I²C y SPI.
- Puente **LED Enable** en la cara inferior: revisa que esté cerrado para usar el LED de usuario.

![Vista inferior con el puente LED Enable](/py32f003/placa-inferior.png)

## Alcance del taller

Aprenderás a modificar, compilar, programar y comprobar firmware. El PY32F003
no incorpora conectividad Wi-Fi, Bluetooth ni Zigbee; sus interfaces permiten
conectar dispositivos externos. Los ejercicios utilizan los recursos locales
de la placa y, en las ampliaciones, un adaptador USB-UART y un potenciómetro.

**Siguiente paso:** [Preparar la estación](./01_setup.md).
