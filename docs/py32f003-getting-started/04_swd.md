# Programación mediante SWD

## Qué hace cada componente

**Arduino IDE** compila el código. **pyOCD** envía el firmware al programador.
**CMSIS-DAP** es el protocolo entre la computadora y el programador; **SWD**
es la interfaz que llega al microcontrolador por SWDIO y SWCLK.

```text
Archivo .ino → compilador ARM → firmware .hex
                                   ↓
                         pyOCD → USB → CMSIS-DAP
                                           ↓ SWDIO / SWCLK
                                      PY32F003
```

## Conexiones

Realiza el cableado con la alimentación desconectada y el programador ya
configurado en modo CMSIS-DAP.

| Programador | Placa DevLab | Función |
| --- | --- | --- |
| GND | GND | Referencia común |
| Alimentación o referencia de destino, según el modelo | VCC | Estación configurada a 3.3 V |
| SWDIO | SWDIO / PA13 | Datos |
| SWCLK | SWCLK / PA14 | Reloj |

1. Verifica la [alimentación de la estación](./01_setup.md#alimentacion-de-referencia).
2. Comprueba la correspondencia de las cuatro señales en ambos extremos del cable.
3. Conecta el programador a la computadora mediante un cable USB de datos.
4. Ejecuta `pyocd list` y confirma que aparece el programador.

![Ejemplo de conexión de DevLab al programador CH552](/py32f003/conexion-swd.jpeg)

La fotografía muestra el montaje de referencia de Development Board.
Comprueba los selectores de tu estación para trabajar a 3.3 V.

## Cargar el programa

En Arduino IDE selecciona **PY32F003x4** y **CMSIS-DAP (pyOCD)**, verifica el
programa y pulsa **Subir**. El paquete 0.1.7 utiliza su archivo
`Misc/Puya.PY32.pack` para que pyOCD reconozca el dispositivo y programe la
Flash. No se necesita instalar un bootloader para este flujo.

![Salida de programación en Arduino IDE](/py32f003/carga-firmware.png)

La carga correcta confirma la comunicación y la escritura del firmware.
Comprueba después el comportamiento de la [práctica Blink](../examples/lab01-blink.md).
Si la ejecución no comienza al terminar la carga, pulsa RESET.

## Recuperación básica

1. Confirma la alimentación y la presencia del programador con `pyocd list`.
2. Retira accesorios de las líneas compartidas SWD/I²C con la estación apagada.
3. Vuelve a conectar y carga el ejemplo `01_blink` conocido.
4. Pulsa RESET y comprueba el parpadeo.

Los ejemplos de este taller conservan las líneas SWD y no modifican los
option bytes del microcontrolador. Si el firmware de otra práctica cambió
esas funciones, el instructor debe revisar el procedimiento de conexión bajo
reset para su programador antes de continuar.

## Programación desde el navegador

El plan de la actividad contempla WebUSB como posibilidad para las estaciones.
Esta guía usa **Arduino IDE + pyOCD**, un flujo concreto incluido en el paquete
PY32. Una demostración de WebUSB requiere que el instructor prepare y pruebe
una herramienta compatible con PY32F003 y con el programador disponible.

**Ayuda:** [Solución de problemas](./report.md).
