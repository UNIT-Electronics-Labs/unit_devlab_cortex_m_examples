# Prácticas de laboratorio con PY32F003

Cada ejercicio se abre como un sketch independiente en **Arduino IDE**.
Utiliza la configuración **DevLab PY32F003 Board → PY32F003x4**, reloj
**HSI de 24 MHz** y VCC de **3.3 V**.

## Descarga

[Descargar todos los ejemplos de Arduino (ZIP)](/examples/py32f003-ejemplos.zip)

Extrae el ZIP y abre el archivo `.ino` dentro de la carpeta del mismo nombre.
No reúnas los cinco archivos en una sola carpeta: cada uno define su propio
`setup()` y `loop()`.

## Ejercicios

| Práctica | Qué aprenderás | Material adicional | Tiempo orientativo |
| --- | --- | --- | --- |
| [1. LED Blink](./lab01-blink.md) | Compilar, cargar por SWD y modificar tiempos | Ninguno | 20 min |
| [2. Entrada digital](./lab02-gpio.md) | Leer un pulsador con pull-up | Pulsador y cables | 15 min |
| [3. UART](./lab03-uart.md) | Observar mensajes y comprobar eco | Adaptador USB-UART de 3.3 V | 15 min |
| [4. ADC](./lab04-adc.md) | Medir una señal analógica y controlar el LED | Potenciómetro de 10 kΩ; USB-UART para visualizar | 20 min |
| [5. Falla y validación](./lab05-validacion.md) | Reproducir un fallo, corregirlo y registrar evidencia | Ninguno | 35 min |

La ruta de dos horas combina las prácticas **1 y 5** con el reconocimiento
de hardware y el [análisis de compilación](../guide/compilacion.md). Las otras
prácticas son ampliaciones según los accesorios disponibles.

## Antes de empezar

- [Configura Arduino IDE y pyOCD](../py32f003-getting-started/02_0_duino.md).
- [Revisa alimentación, pinout y LED Enable](../py32f003-getting-started/03_pinout.md).
- [Comprueba las conexiones SWD](../py32f003-getting-started/04_swd.md).

## Registro de resultados

Guarda el nombre del ejemplo, versión del paquete, opciones de placa, cambio
realizado y comportamiento observado. Compilar correctamente es una parte
de la comprobación; cada práctica incluye también pruebas sobre la placa.
