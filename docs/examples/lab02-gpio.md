<script setup>
import { withBase } from 'vitepress'
</script>

# Lab 2: Entrada digital con pulsador

## Objetivo

Leer una entrada digital y controlar el LED PB5 según el estado de un
pulsador externo.

## Material y conexiones

Además de la estación básica, necesitas un pulsador, cables y protoboard.
Conecta el pulsador entre **PA2 y GND**. Al presionarlo debe unir esos dos
puntos. En pulsadores de cuatro terminales, identifica los pares internamente
conectados antes de insertarlo en la protoboard.

```text
PA2 ───── pulsador ───── GND
```

El programa activa `INPUT_PULLUP`, una resistencia interna que mantiene PA2
en HIGH cuando el pulsador está abierto. Retira sensores o potenciómetros
de PA2 antes de esta prueba.

::: info Botón de la placa
El botón RESET integrado reinicia la ejecución. En este ejercicio usamos
un pulsador externo para conservar esa función de recuperación.
:::

## Código

<a :href="withBase('/examples/py32f003/02_entrada_digital/02_entrada_digital.ino')" download>Descargar 02_entrada_digital.ino</a>

<<< @/public/examples/py32f003/02_entrada_digital/02_entrada_digital.ino{cpp}

## Procedimiento

1. Con la estación apagada, conecta el pulsador a PA2 y GND.
2. Compila y carga el sketch por SWD.
3. Presiona y suelta el pulsador varias veces.
4. Reinicia la placa y repite la comprobación.

## Resultado esperado

| Estado del pulsador | Lectura de PA2 | LED PB5 |
| --- | --- | --- |
| Suelto | HIGH | Apagado |
| Presionado | LOW | Encendido |

## Comprobación

Realiza diez ciclos de presionar y soltar. Anota si el LED sigue ambos
estados. Si permanece encendido, revisa que PA2 no esté unido permanentemente
a GND y que elegiste los terminales correctos del pulsador.

El ejemplo muestra el estado actual. La espera de 10 ms no constituye un
antirrebote completo para contar pulsaciones: si amplías el programa con
un contador, añade una comprobación de estabilidad antes de contar un evento.

**Continúa con:** [Lab 3: UART](./lab03-uart.md).
