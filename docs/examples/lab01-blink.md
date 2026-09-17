<script setup>
import { withBase } from 'vitepress'
</script>

# Lab 1: Parpadeo del LED integrado

## Objetivo

Compilar, programar y ejecutar tu primer firmware en DevLab PY32F003.
Después modificarás un parámetro y comprobarás su efecto.

## Material y conexiones

- DevLab PY32F003L24D6TR y programador CMSIS-DAP conectado por [SWD](../py32f003-getting-started/04_swd.md).
- VCC configurado a 3.3 V.
- Puente **LED Enable** cerrado para utilizar el LED de PB5.

El LED integrado se controla por **PB5** y enciende con **HIGH**. No requiere
un LED externo. El core 0.1.7 también define `LED_BUILTIN` como PB5.

## Código

<a :href="withBase('/examples/py32f003/01_blink/01_blink.ino')" download>Descargar 01_blink.ino</a>

<<< @/public/examples/py32f003/01_blink/01_blink.ino{cpp}

## Procedimiento

1. Abre el sketch desde el ZIP o guárdalo como `01_blink/01_blink.ino`.
2. Selecciona la [configuración Arduino](../py32f003-getting-started/02_0_duino.md#_3-seleccionar-la-placa-y-sus-opciones).
3. Pulsa **Verificar** y registra el consumo de memoria que aparece en la consola.
4. Pulsa **Subir** con el método CMSIS-DAP (pyOCD).
5. Al terminar, observa PB5; pulsa RESET si no comienza la ejecución.
6. Cambia `INTERVALO_MS` de **500** a **250**, compila y carga de nuevo.

## Resultado esperado

| Intervalo configurado | Tiempo encendido | Tiempo apagado | Periodo completo |
| --- | --- | --- | --- |
| 500 ms | 0.5 s | 0.5 s | Aproximadamente 1 s |
| 250 ms | 0.25 s | 0.25 s | Aproximadamente 0.5 s |

El periodo completo es la suma de los dos tiempos. El segundo programa
debe parpadear aproximadamente al doble de frecuencia que el primero.

![Parpadeo del LED en el montaje de referencia](/py32f003/blink.gif)

## Comprobación

Registra cinco periodos consecutivos y compara ambos programas. La
observación visual sirve para distinguirlos; para medir con precisión usa
un osciloscopio o un analizador lógico en PB5 con tierra común.

Reinicia la placa y comprueba que conserva el programa cargado. Restaura
**500 ms** y vuelve a cargarlo como referencia para las siguientes prácticas.

## Si no funciona

Comprueba que observas el LED de usuario, que LED Enable está cerrado y
que la configuración corresponde a PY32F003x4. Si la carga falla, consulta
[Solución de problemas](../py32f003-getting-started/report.md).

**Continúa con:** [Compilación y memoria](../guide/compilacion.md) o
[Lab 2: Entrada digital](./lab02-gpio.md).
