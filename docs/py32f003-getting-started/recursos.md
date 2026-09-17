# Imágenes y recursos del PY32F003

## Documentación para el taller

Estos recursos se copiaron del repositorio **Development Board** al sitio
de Cortex para que las imágenes y descargas estén disponibles desde la misma
documentación. Las figuras originales conservan las etiquetas de su autor;
el pinout tiene versión en español.

| Recurso | Archivo |
| --- | --- |
| Pinout en español | [PDF](/py32f003/pinout-es.pdf) · [PNG](/py32f003/pinout-es.png) |
| Esquemático de la placa | [PDF](/py32f003/esquematico.pdf) |
| Hoja de datos PY32F003, revisión 1.7 | [PDF del fabricante, en inglés](/py32f003/PY32F003_Datasheet_Rev1.7.pdf) |
| Manual original de la placa | [PDF, en inglés](/py32f003/manual-placa-en.pdf) |
| Vista superior | [PNG](/py32f003/placa-superior.png) |
| Vista inferior | [PNG](/py32f003/placa-inferior.png) |
| Topología | [PNG](/py32f003/topologia.png) |
| Dimensiones | [PNG](/py32f003/dimensiones.png) |
| Conexión del programador | [Fotografía](/py32f003/conexion-swd.jpeg) |
| Ejemplos de Arduino | [ZIP](/examples/py32f003-ejemplos.zip) |
| Registro de validación | [CSV](/examples/registro-validacion.csv) |

::: info Cómo interpretar las referencias
El manual original contiene diferencias entre tablas y descripciones de la
familia. Esta guía utiliza la columna **PY32F003L24D6** de la tabla 1-4 de la
hoja de datos: Cortex-M0+, **16 KB de Flash, 2 KB de RAM y 24 MHz**.
Las opciones de Arduino se documentan para el paquete **0.1.7**.
:::

## Procedencia

- Hardware y figuras: [DevLab PY32F003L24D6TR Development Board](https://github.com/UNIT-Electronics-MX/unit_devlab_py32f003l24d6tr_development_board).
- Capturas y ejemplos de referencia: `software/sphinx/src/source/` del mismo repositorio.
- [Correspondencia de nombres locales y rutas originales (JSON)](/py32f003/procedencia.json).
- Entorno de programación: [paquete Arduino de UNIT Electronics](https://github.com/UNIT-Electronics-MX/unit_electronics_py32_arduino_package).
- Programación y permisos USB: [documentación de pyOCD](https://pyocd.io/docs/installing.html).

Los ejemplos iniciales adaptan las prácticas de Blink, UART y ADC a un
recorrido de taller en español. Las imágenes y documentos conservan su
autoría original de UNIT Electronics y Puya Semiconductor, según corresponda.

## Descarga para trabajar localmente

Descarga el ZIP de ejemplos, el pinout y el esquemático antes de la sesión.
Las capturas de Arduino se utilizan como apoyo; sigue los valores escritos
en la [tabla de configuración](./02_0_duino.md#_3-seleccionar-la-placa-y-sus-opciones).
