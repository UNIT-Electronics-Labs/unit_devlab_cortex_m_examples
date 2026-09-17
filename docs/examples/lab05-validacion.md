<script setup>
import { withBase } from 'vitepress'
</script>

# Lab 5: Falla controlada y validación

## Objetivo

Relacionar un cambio de código con el comportamiento de la placa mediante
una prueba positiva, una prueba negativa y una prueba de recuperación.
La falla de esta práctica es lógica y sólo modifica el estado del LED.

## Requisito que vamos a comprobar

Con `INYECTAR_FALLA = false`, PB5 debe alternar entre encendido y apagado
cada **500 ms**, con un periodo completo aproximado de **1 s**. Después de
reiniciar, debe volver a ejecutar ese comportamiento.

## Material

La estación básica del [Lab 1](./lab01-blink.md), sin sensores adicionales.
Conserva el ejemplo `01_blink` como programa de recuperación.

## Código

<a :href="withBase('/examples/py32f003/05_validacion/05_validacion.ino')" download>Descargar 05_validacion.ino</a>

<<< @/public/examples/py32f003/05_validacion/05_validacion.ino{cpp}

## 1. Prueba positiva

1. Compila y carga el programa con **`INYECTAR_FALLA = false`**.
2. Observa al menos diez periodos del LED.
3. Registra el resultado y las opciones de compilación.

## 2. Prueba negativa

1. Cambia sólo **`INYECTAR_FALLA` a `true`**.
2. Compila y carga el programa nuevamente.
3. Observa el LED durante al menos cinco segundos.
4. Explica qué expresión de `digitalWrite()` mantiene la salida en LOW.

El LED debe permanecer **apagado**, aunque la compilación y la carga terminen
correctamente. La prueba demuestra que ambos pasos pueden completarse sin
que el programa cumpla su requisito de comportamiento.

## 3. Corrección y recuperación

1. Restaura **`INYECTAR_FALLA = false`**.
2. Compila y vuelve a cargar.
3. Comprueba otros diez periodos y pulsa RESET.
4. Confirma que vuelve el parpadeo después del reinicio.
5. Carga `01_blink` si necesitas recuperar una referencia conocida.

## Registro de evidencia

[Descargar plantilla de registro (CSV)](/examples/registro-validacion.csv)

| Prueba | Configuración | Resultado esperado | Resultado observado | Cumple |
| --- | --- | --- | --- | --- |
| Positiva | Falla = false | Alternancia cada 500 ms | Completar | Sí / No |
| Negativa | Falla = true | LED apagado | Completar | Sí / No |
| Recuperación | Falla = false; reinicio | Vuelve el parpadeo | Completar | Sí / No |

Anota también la estación, versión del paquete, reloj, variante, tamaño de
Flash/RAM reportado y nombre del firmware. Añade una fotografía, registro
temporal o captura del instrumento utilizado.

## Criterio de cierre

La actividad termina cuando puedes reproducir la falla, explicar su causa,
aplicar la corrección y demostrar la recuperación. Distingue en tu registro
entre observación visual y una medición de tiempos con instrumento.

**Repaso:** [Arquitectura y firmware](../guide/cortex-m.md) ·
[Compilación y memoria](../guide/compilacion.md).
