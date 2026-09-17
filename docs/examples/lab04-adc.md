<script setup>
import { withBase } from 'vitepress'
</script>

# Lab 4: Lectura analógica con ADC

## Objetivo

Leer un potenciómetro en PA2 con resolución de 12 bits, mostrar el resultado
por UART y encender el LED al superar la mitad de la escala.

## Material y conexiones

- Estación con **VCC del microcontrolador a 3.3 V**.
- Potenciómetro de **10 kΩ**, protoboard y cables.
- Adaptador USB-UART de 3.3 V para observar los valores.
- Multímetro para comparar tensiones, si está disponible.

| Terminal del potenciómetro | Conexión |
| --- | --- |
| Extremo 1 | 3V3 |
| Terminal central | PA2 |
| Extremo 2 | GND |

Retira el pulsador de PA2 y conserva las [conexiones UART](./lab03-uart.md#material-y-conexiones).
Desconecta la alimentación antes de cambiar el cableado.

## Código

<a :href="withBase('/examples/py32f003/04_adc/04_adc.ino')" download>Descargar 04_adc.ino</a>

<<< @/public/examples/py32f003/04_adc/04_adc.ino{cpp}

## Procedimiento

1. Comprueba que el potenciómetro está entre 3V3 y GND, con su centro en PA2.
2. Compila y carga el sketch por SWD.
3. Abre el monitor serie a **115200 baudios**.
4. Gira lentamente el potenciómetro y observa el valor ADC y el LED.
5. Si tienes multímetro, mide VCC y ajusta `VREF_MV` para usar esa referencia.

## Resultado esperado

La lectura se acerca a **0** en un extremo y a **4095** en el otro. El LED
enciende a partir de **2048**. El monitor actualiza los valores aproximadamente
cada 200 ms.

La conversión a milivoltios es una estimación proporcional a VCC. El LED puede
alternar cerca del umbral si la señal tiene ruido; el programa inicial no
incluye histéresis.

## Comprobación

| Posición | Tensión medida | Lectura ADC | LED observado |
| --- | --- | --- | --- |
| Mínimo | Completar | Completar | Completar |
| Centro | Completar | Completar | Completar |
| Máximo | Completar | Completar | Completar |

Compara la tendencia con la [relación entre tensión y lectura](../py32f003-getting-started/22_adc.md#estimacion-de-tension).
Repite la medida sin mover el potenciómetro para observar la variación entre
muestras. No confundas resolución de 12 bits con exactitud de 12 bits.

**Continúa con:** [Lab 5: Falla y validación](./lab05-validacion.md).
