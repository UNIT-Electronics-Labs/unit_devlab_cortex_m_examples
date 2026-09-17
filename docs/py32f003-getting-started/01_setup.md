# Preparar la estación de trabajo

## Material básico

| Material | Uso |
| --- | --- |
| Placa DevLab PY32F003L24D6TR | Ejecutar el programa |
| Programador CMSIS-DAP/SWD | Cargar el firmware; por ejemplo, DevLab CH552 con firmware CMSIS-DAP |
| Cable USB de datos | Conectar el programador a la computadora |
| Cable JST SH de 1.0 mm, 4 pines, con correspondencia verificada | Conectar alimentación, GND, SWDIO y SWCLK |
| Computadora con Arduino IDE y Python | Compilar y ejecutar pyOCD |

Para Blink y la práctica de validación basta con este material. El instructor
debe preparar previamente el programador en modo **CMSIS-DAP** y verificar
el puente **LED Enable**.

## Accesorios para ampliar las prácticas

- Pulsador externo, protoboard y cables para la [entrada digital](../examples/lab02-gpio.md).
- Adaptador USB-UART con lógica de **3.3 V** para [UART](../examples/lab03-uart.md).
- Potenciómetro de 10 kΩ y multímetro para [ADC](../examples/lab04-adc.md).

## Preparación del software

1. Instala [Arduino IDE](https://www.arduino.cc/en/software/).
2. Instala Python con acceso desde la terminal.
3. Sigue la [instalación del paquete PY32 y pyOCD](./02_0_duino.md).
4. Descarga y extrae el [paquete de ejemplos](/examples/py32f003-ejemplos.zip).
5. Comprueba la compilación de `01_blink` antes de comenzar la sesión.

## Alimentación de referencia

Con todo desconectado, identifica **5V**, **3V3**, **VCC** y **GND** en el
[pinout](./03_pinout.md). Para estas prácticas, utiliza una estación con
**VCC a 3.3 V** y señales compatibles con ese nivel.

El selector de VCC une el punto central con 3.3 V o con 5 V. Cuando se utiliza
la entrada **5V**, el regulador genera **3V3**; el selector debe quedar en
3.3 V para alimentar así al microcontrolador. Un programador que alimente
directamente **VCC** debe entregar la tensión acordada para esa estación.
El cable de cuatro pines transporta VCC, por lo que hay que comprobar su
tensión antes de conectarlo.

::: warning Alimentación y señales
No unas dos fuentes de alimentación a VCC. Algunos programadores tienen una
salida de alimentación y otros sólo una entrada de referencia VTref: revisa
el modelo utilizado. La lógica USB-UART y la entrada ADC se usarán a 3.3 V.
:::

## Comprobación inicial

- El programador aparece con `pyocd list`.
- La selección de placa indica PY32F003x4, 16 KB de Flash y 2 KB de RAM.
- SWDIO, SWCLK, VCC y GND corresponden con las señales de la placa.
- El LED de alimentación enciende y Blink compila.

**Siguiente paso:** [Arduino IDE](./02_0_duino.md).
