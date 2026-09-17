# Primeros pasos con PY32F003

Esta guía te acompaña desde la preparación de la **DevLab PY32F003L24D6TR**
hasta tu primer programa con **Arduino IDE (C/C++)**. Cada práctica incluye
conexiones, código descargable, resultado esperado y una comprobación.

## Ruta recomendada

1. [Conoce la placa y el microcontrolador](./00_about.md).
2. [Prepara la estación de trabajo](./01_setup.md).
3. [Instala Arduino IDE y el paquete PY32](./02_0_duino.md).
4. [Identifica los pines y la alimentación](./03_pinout.md).
5. [Conecta el programador CMSIS-DAP por SWD](./04_swd.md).
6. [Compila y carga el ejemplo Blink](../examples/lab01-blink.md).
7. [Reproduce una falla y valida la corrección](../examples/lab05-validacion.md).

::: tip Para el taller de dos horas
Realiza primero Blink, el análisis de compilación y la práctica de validación.
Las prácticas de entrada digital, UART y ADC amplían el recorrido cuando estén
disponibles sus accesorios. Consulta el [plan del taller](../guide/taller.md).
:::

## Periféricos y ejemplos

| Tema | Guía | Práctica |
| --- | --- | --- |
| Salidas y entradas digitales | [GPIO](./11_gpio.md) | [LED](../examples/lab01-blink.md) y [pulsador](../examples/lab02-gpio.md) |
| Comunicación con la computadora | [UART](./66_communication.md) | [Eco serial](../examples/lab03-uart.md) |
| Adquisición analógica | [ADC](./22_adc.md) | [Potenciómetro](../examples/lab04-adc.md) |
| Interfaces de sensores | [I²C](./33_i2c.md) y [SPI](./44_spi.md) | Referencia para una sesión posterior |

## Material de apoyo

- [Descargar los ejemplos de Arduino](../examples/index.md).
- [Pinout en español, imágenes, esquemático y hojas de datos](./recursos.md).
- [Solución de problemas](./report.md).
