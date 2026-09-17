# Cortex-M · DevLab PY32F003

Documentación en español para un taller de **compilación, programación SWD y
validación de firmware** con **Arduino IDE** y **DevLab PY32F003L24D6TR**.
El sitio conserva el formato VitePress y el diseño visual de la documentación
original de Cortex.

## Comenzar el taller

1. [Plan del taller de dos horas](docs/guide/taller.md).
2. [Primeros pasos con PY32F003](docs/py32f003-getting-started/index.md).
3. [Instalación de Arduino IDE y pyOCD](docs/py32f003-getting-started/02_0_duino.md).
4. [Pinout, alimentación y esquemático](docs/py32f003-getting-started/03_pinout.md).
5. [Prácticas y descargas](docs/examples/index.md).

## Configuración de referencia

| Elemento | Configuración |
| --- | --- |
| Microcontrolador | PY32F003L24D6TR, ARM Cortex-M0+ |
| Memoria | 16 KB de Flash y 2 KB de RAM |
| Paquete Arduino | UNIT Electronics PY32 0.1.7 |
| Placa y variante | DevLab PY32F003 Board → PY32F003x4 |
| Reloj | HSI 24Mhz, HCLK 24Mhz |
| Alimentación del MCU | VCC a 3.3 V |
| Programación | CMSIS-DAP (pyOCD), mediante SWD |

Instala el paquete en Arduino IDE con la URL indicada en la guía. Para el LED,
comprueba el puente **LED Enable**; para UART utiliza un adaptador USB-UART de
3.3 V. La variante **x4** corresponde a la memoria del modelo L24D6TR.

## Ejemplos incluidos

| Ejemplo | Uso |
| --- | --- |
| `01_blink` | Parpadeo del LED PB5 |
| `02_entrada_digital` | Pulsador externo en PA2 |
| `03_uart` | Mensajes y eco por PA0/PA1 |
| `04_adc` | Lectura de PA2 a 12 bits y umbral del LED |
| `05_validacion` | Falla lógica, corrección y recuperación |

Los sketches están en [docs/public/examples/py32f003](docs/public/examples/py32f003).
Las páginas muestran esos mismos archivos como fragmentos de código; el
[ZIP descargable](docs/public/examples/py32f003-ejemplos.zip) contiene una
carpeta independiente por ejemplo.

## Ver la documentación localmente

Requiere **Node.js 22 o posterior**. Desde la raíz del repositorio:

```bash
cd docs
npm ci
npm run dev
```

Abre la dirección local que indique VitePress, normalmente
[http://localhost:5173](http://localhost:5173).

Para compilar y previsualizar el sitio:

```bash
cd docs
npm run build
npm run preview
```

`cd docs` se ejecuta desde la raíz del repositorio. Los comandos de npm
pertenecen a esa carpeta. Para una instalación bajo un subdirectorio:

```bash
BASE_PATH=/unit_devlab_cortex_m_examples/ npm run build
```

El flujo existente de GitHub Pages configura `BASE_PATH` según el nombre
del repositorio.

## Actualizar los ejemplos descargables

Después de modificar un sketch, ejecuta desde la raíz:

```bash
python3 scripts/prepare-workshop.py
```

Este comando regenera el ZIP con los mismos archivos que presenta el sitio.
No genera ni publica firmware para una placa conectada.

## Estructura

```text
README.md
scripts/prepare-workshop.py
archive/pulsar-c6/            Material anterior de Pulsar y ESP32-C6
docs/
  .vitepress/                Tema, componentes y navegación
  guide/                     Taller, arquitectura y compilación
  py32f003-getting-started/   Inicio, periféricos y recursos
  examples/                  Guías de las cinco prácticas
  public/
    py32f003/                Imágenes, pinout y documentos de la placa
    examples/                Sketches, ZIP y registro de validación
```

## Recursos y procedencia

Las imágenes, capturas y PDF proceden de
[DevLab PY32F003 Development Board](https://github.com/UNIT-Electronics-MX/unit_devlab_py32f003l24d6tr_development_board).
La correspondencia de archivos se conserva en
[procedencia.json](docs/public/py32f003/procedencia.json).

La información del modelo L24D6 se contrastó con la tabla 1-4 de la hoja de
datos PY32F003 revisión 1.7 y con los archivos del paquete Arduino 0.1.7.
Los recursos conservan sus créditos y avisos originales.

El material anterior de Pulsar C6 permanece en `archive/pulsar-c6/`, fuera
del sitio del taller. El repositorio de Development Board se conserva intacto.

## Validación

Los cinco sketches compilan para PY32F003x4 con el paquete 0.1.7, HSI de
24 MHz y configuración de 3.3 V. El paquete emite una advertencia propia
sobre `READ_BIT` en `system_py32f0xx.c`; no impide estas compilaciones.
Consulta [las notas de compilación](docs/guide/compilacion.md) para ver los tamaños.

La carga SWD, las tensiones y el comportamiento físico requieren comprobación
en las estaciones del taller. Esta revisión no implica validación en hardware.
