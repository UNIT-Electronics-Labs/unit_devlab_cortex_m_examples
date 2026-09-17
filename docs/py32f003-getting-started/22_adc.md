# Conversión analógica a digital (ADC)

## Concepto

El ADC convierte una tensión en un número. El hardware del PY32F003 admite
**12 bits**, con valores de **0 a 4095**. En el paquete Arduino utilizado,
`analogReadResolution(12)` configura la lectura a 12 bits.

```cpp
void setup() {
  analogReadResolution(12);
}

void loop() {
  const uint32_t lectura = analogRead(PA2);
}
```

La configuración explícita evita depender de la resolución por defecto del
core. Multiplicar una lectura de 10 bits por cuatro sólo cambia su escala;
no recupera dos bits de información.

## Conexión de la práctica

Conecta los extremos de un potenciómetro de **10 kΩ** a **3V3** y **GND**, y
su terminal central a **PA2**. En esta sesión VCC del microcontrolador debe
estar a 3.3 V.

![Referencia de la entrada analógica PA2](/py32f003/adc-pa2.png)

::: warning Rango de entrada
Mantén PA2 entre GND y VCC; para esta práctica, entre 0 y 3.3 V. No conectes
la entrada al pin 5V. Retira el pulsador de la práctica anterior antes de
instalar el potenciómetro.
:::

## Estimación de tensión

Para VCC de aproximadamente 3.3 V:

$$
V_{entrada} \approx \frac{lectura}{4095}\times 3.3\ \text{V}
$$

La tensión calculada es una estimación. La alimentación real, el ruido, la
fuente de señal y el error del ADC afectan la medida. Usa el VCC medido con
un multímetro cuando compares los resultados.

## Validación

Prueba los dos extremos y un punto intermedio del potenciómetro. El valor
debe crecer de forma coherente al aumentar la tensión. Una entrada flotante
no sirve para comprobar exactitud.

**Ejemplo completo:** [Lab 4: Lectura ADC](../examples/lab04-adc.md).
