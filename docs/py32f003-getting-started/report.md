# Solución de problemas

## La compilación falla

- Confirma que el paquete es **UNIT Electronics PY32 0.1.7** y la variante **PY32F003x4**.
- Abre cada `.ino` en su carpeta independiente; evita varias definiciones de `setup()` o `loop()`.
- Lee el primer error de la consola y registra el archivo y la línea indicados.
- Si usas UART, habilita **Enabled (generic 'Serial')** en U(S)ART support.
- Para los ejemplos del taller, utiliza los pines simbólicos PA0, PA1, PA2 y PB5.

Si aparece un error de desbordamiento de Flash o RAM, revisa el tamaño del
programa y sus bibliotecas. No lo resuelvas seleccionando una variante con
más memoria que la del microcontrolador instalado.

## pyOCD no se encuentra

Prueba en una terminal:

```text
pyocd --version
pyocd list
```

Si el primer comando falla, revisa la [instalación y el PATH](./02_0_duino.md#_2-instalar-pyocd).
Reabre Arduino IDE después del cambio. La opción `python -m pyocd` sólo es
adecuada si ese mismo intérprete Python tiene instalado pyOCD; una instalación
con pipx se usa mediante el comando `pyocd` disponible en PATH.

## El programador no aparece

- Comprueba que el cable USB transmite datos.
- Verifica que el CH552 u otro programador ejecuta firmware CMSIS-DAP.
- Cierra herramientas que puedan mantener abierto el programador.
- En Linux, revisa las [reglas udev oficiales](https://pyocd.io/docs/installing.html#udev-rules-on-linux). El acceso al USB del programador y al puerto serie son permisos diferentes.

## La carga falla aunque el programador aparece

1. Revisa VCC y GND y confirma que la placa está alimentada.
2. Revisa SWDIO y SWCLK en ambos extremos del cable.
3. Confirma **Upload method → CMSIS-DAP (pyOCD)** y el destino PY32F003x4.
4. Desconecta periféricos I²C de las líneas compartidas con la estación apagada.
5. Comprueba que existe el archivo `Misc/Puya.PY32.pack` dentro del paquete instalado.
6. Sigue la [recuperación básica por SWD](./04_swd.md#recuperacion-basica).

## No aparece un puerto COM

La programación CMSIS-DAP no necesita un puerto COM. Para usar el monitor
serie conecta un adaptador USB-UART de 3.3 V y selecciona **su** puerto.
Consulta la [práctica UART](../examples/lab03-uart.md).

## El programa se carga, pero el LED no parpadea

- Comprueba que estás observando el LED de PB5 y que **LED Enable** está cerrado.
- Confirma PB5 como salida y nivel HIGH para encender.
- Pulsa RESET después de la carga.
- En la práctica de validación, comprueba que `INYECTAR_FALLA` esté en `false`.
- Carga [01_blink](../examples/lab01-blink.md) como referencia.

## UART muestra caracteres incorrectos

Selecciona 115200 baudios, revisa el reloj HSI de 24 MHz y comprueba TX→RX,
RX→TX y GND común. Los mensajes iniciales se pueden perder si el monitor
se abre tarde; el ejemplo UART repite un mensaje cada dos segundos.

## ADC no cambia o muestra valores inestables

Revisa el terminal central del potenciómetro en PA2 y sus extremos en 3V3
y GND. Confirma VCC de 3.3 V y `analogReadResolution(12)`. Retira el pulsador
de PA2 y mide la tensión con un multímetro. Una entrada sin conexión queda
flotante y no ofrece una lectura de referencia.

## Registrar una incidencia

Incluye nombre del ejemplo, modelo de la placa, versión del paquete, opciones
del menú, primer error completo y pasos para reproducirlo. Adjunta al registro
local una fotografía de las conexiones y el resultado esperado. Esa información
permite distinguir una falla de montaje de una falla de configuración o código.
