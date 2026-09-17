# Arduino IDE (C/C++)

## Objetivo

Configurar Arduino IDE para compilar ejemplos para **DevLab PY32F003L24D6TR**
y cargarlos con **CMSIS-DAP (pyOCD)**. La referencia de esta guía es el paquete
**UNIT Electronics PY32 0.1.7**.

## 1. Agregar el paquete de placas

Abre **Archivo → Preferencias → URLs adicionales de tarjetas** y agrega:

```text
https://raw.githubusercontent.com/UNIT-Electronics-MX/unit_electronics_py32_arduino_package/main/package_unit_electronics_py32_index.json
```

En el gestor de placas busca **UNIT Electronics PY32**, selecciona **0.1.7**
e instala el paquete y sus herramientas. Conserva la misma versión en todas
las estaciones del taller.

![Gestor de placas con el paquete PY32](/py32f003/gestor-placas.jpg)

## 2. Instalar pyOCD

pyOCD comunica la computadora con el programador CMSIS-DAP. Instálalo en un
entorno disponible en el **PATH** de Arduino IDE.

::: code-group

```powershell [Windows]
py -m pip install --user pipx
py -m pipx ensurepath
# Cierra y vuelve a abrir la terminal después de ensurepath.
pipx install pyocd
pyocd --version
pyocd list
```

```bash [Linux (Ubuntu/Debian)]
sudo apt update
sudo apt install pipx
pipx ensurepath
# Cierra y vuelve a abrir la terminal después de ensurepath.
pipx install pyocd
pyocd --version
pyocd list
```

:::

Cierra y vuelve a abrir Arduino IDE después de modificar el PATH. En Linux,
si el escritorio no hereda el cambio, abre el IDE desde la terminal donde
funcione `pyocd --version`. Para permisos del programador consulta las
[reglas udev de pyOCD](https://pyocd.io/docs/installing.html).

## 3. Seleccionar la placa y sus opciones

| Menú de Herramientas (nombre en el paquete 0.1.7) | Selección |
| --- | --- |
| Board | DevLab PY32F003 Board |
| Board part number | **PY32F003x4** |
| Clock Source and Frequency | **HSI 24Mhz, HCLK 24Mhz** |
| Supply Voltage | **3.3V** |
| U(S)ART support | **Enabled (generic 'Serial')** |
| Optimize | Smallest (-Os default) |
| Upload method | **CMSIS-DAP (pyOCD)** |
| pyOCD Command | **pyocd (direct)** |
| Programmer | pyOCD Debugger |

La opción **Supply Voltage** configura el software: la tensión real se
establece con la alimentación y el selector de la placa. HSI utiliza el
oscilador interno, sin cristal externo.

![Selección de la placa PY32 en Arduino IDE](/py32f003/seleccion-placa.jpeg)

::: info Capturas de referencia
Las capturas provienen de la documentación de Development Board y pueden
mostrar etiquetas de otra revisión del paquete. Utiliza los valores de la
tabla para la versión 0.1.7; en especial, selecciona **PY32F003x4**.
:::

## 4. Compilar y cargar Blink

1. Abre `01_blink/01_blink.ino` del [ZIP de ejemplos](/examples/py32f003-ejemplos.zip).
2. Pulsa **Verificar** y revisa que compile sin errores.
3. Conecta la estación siguiendo la [guía SWD](./04_swd.md).
4. Usa **Subir** con el método **CMSIS-DAP (pyOCD)** seleccionado.
5. Al terminar, comprueba el parpadeo; si el núcleo queda detenido, pulsa RESET.

El paquete define la carga por pyOCD en la receta de **Subir**. Seleccionar
el programador por sí solo no cambia el método de carga. Para este recorrido
utiliza **Subir**, sin elegir «Grabar bootloader».

![Selección del programador pyOCD](/py32f003/programador-pyocd.jpeg)

::: tip Puerto serie
La carga por CMSIS-DAP/SWD no necesita un puerto COM. Para ver mensajes de
`Serial`, conecta un adaptador USB-UART independiente y selecciona su puerto
en el monitor serie, como se explica en la [práctica UART](../examples/lab03-uart.md).
:::

## Resultado esperado

El LED PB5 permanece encendido 500 ms y apagado 500 ms. La salida de
compilación debe indicar límites de **16 384 bytes de programa** y
**2 048 bytes de memoria de datos**.

## Fuentes

- [Paquete Arduino de UNIT Electronics](https://github.com/UNIT-Electronics-MX/unit_electronics_py32_arduino_package): índice, `boards.txt`, `platform.txt` y variante PY32F003_Base de la versión 0.1.7.
- [Instalación de pyOCD](https://pyocd.io/docs/installing.html).
- [Ejemplo Blink paso a paso](../examples/lab01-blink.md).
