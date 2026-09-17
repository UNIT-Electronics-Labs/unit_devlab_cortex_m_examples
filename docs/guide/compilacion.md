# Compilación, memoria y archivos de firmware

## Objetivo

Reconocer qué genera Arduino IDE, comprobar que el programa cabe en el
PY32F003L24D6TR y conservar los archivos asociados a una prueba.

## Compilar y leer el resultado

1. Abre [01_blink](../examples/lab01-blink.md).
2. En las preferencias del IDE, activa la salida detallada durante compilación.
3. Selecciona **PY32F003x4**, **HSI 24Mhz, HCLK 24Mhz** y **Smallest (-Os default)**.
4. Pulsa **Verificar** y lee la consola desde el primer error, si lo hay.

| Dato | Qué revisar |
| --- | --- |
| Flash disponible | El límite debe ser 16 384 bytes |
| RAM disponible | El límite debe ser 2 048 bytes |
| Programa utilizado | Debe caber en la Flash seleccionada |
| Variables globales/estáticas | Deben dejar espacio para pila, búferes y memoria dinámica |
| Advertencias | Determina su causa antes de dar por preparada la estación |

Seleccionar `x6` o `x8` permite enlazar para una memoria mayor que la del
dispositivo del taller. Comprueba la variante incluso si la compilación pasa.

## Archivos que genera el paquete

| Archivo | Contenido | Uso |
| --- | --- | --- |
| `.ino` | Código fuente del sketch | Modificar y conservar la práctica |
| `.elf` | Programa enlazado; puede incluir símbolos de depuración | Inspección y depuración |
| `.hex` | Firmware con direcciones | Formato utilizado por la receta de carga pyOCD |
| `.bin` | Imagen binaria sin direcciones incorporadas | Programación con una dirección de inicio explícita |
| `.map` | Distribución de secciones y símbolos | Analizar el uso de memoria |

En **Programa/Sketch → Exportar binarios compilados**, el IDE guarda los
artefactos exportables en la carpeta del sketch, normalmente bajo `build/`.
Revisa la salida detallada para localizar también el `.map` y los archivos
de la carpeta temporal de compilación. Copia allí los que necesites conservar
antes de cerrar o limpiar el entorno.

::: tip Firmware de recuperación
Compila `01_blink` con la configuración de la estación y conserva su `.hex`
junto al código y la versión del paquete. Para el taller utiliza un firmware
que el instructor haya probado en la placa correspondiente.
:::

## Compilación opcional por terminal

Si ya tienes **Arduino CLI**, el paquete 0.1.7 y sus herramientas instalados,
puedes ejecutar desde la raíz de este repositorio:

```bash
arduino-cli compile \
  --fqbn UNIT_Electronics_PY32:py32:GenF003:pnum=PY32F003x4,ClockSourceAndFrequency=HSI24M_HCLK24M,SupplyVoltage=3V3 \
  --output-dir build/01_blink \
  docs/public/examples/py32f003/01_blink
```

En PowerShell, escribe el comando en una línea o utiliza su sintaxis de
continuación. La instrucción compila; la carga de la práctica se realiza
con [Arduino IDE y SWD](../py32f003-getting-started/04_swd.md).

## Comprobación de los ejemplos incluidos

Compilación con UNIT Electronics PY32 **0.1.7**, variante **PY32F003x4**, HSI
a **24 MHz**, opción **3.3V**, `Serial` genérico habilitado y optimización
**-Os**:

| Ejemplo | Flash utilizada (bytes) | RAM estática (bytes) |
| --- | --- | --- |
| 01_blink | 10 656 | 1 112 |
| 02_entrada_digital | 10 768 | 1 112 |
| 03_uart | 9 704 | 1 076 |
| 04_adc | 14 948 | 1 124 |
| 05_validacion | 10 648 | 1 120 |

Los cinco ejemplos caben en la memoria seleccionada. El ejemplo ADC ocupa
aproximadamente el 91 % de la Flash; comprueba de nuevo el tamaño si añades
funcionalidad. Las cifras de RAM no incluyen todo el consumo de pila en ejecución.

El paquete emite una advertencia de declaración implícita de `READ_BIT` en
su archivo `system_py32f0xx.c`, dentro de `SystemCoreClockUpdate`. Estos
ejemplos enlazan correctamente con la configuración indicada. Conserva esa
advertencia en el registro de la estación y revísala al cambiar el core o
añadir código que utilice esa función. El origen es el paquete de la placa.

Esta comprobación verifica compilación y enlace; el instructor debe completar
la carga SWD y las pruebas físicas descritas en cada laboratorio.

## Comparación entre versiones

Compila Blink con intervalos de 500 ms y 250 ms y registra los tamaños.
Cambiar un valor constante puede cambiar el comportamiento sin modificar
el tamaño final. La comprobación sobre la placa permite identificar esa
diferencia.

Conserva para cada prueba: fuente, configuración, versión de herramientas,
artefacto programado y resultado observado. Continúa con el
[laboratorio de validación](../examples/lab05-validacion.md).
