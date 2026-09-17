# Comunicación SPI

## Concepto

SPI transmite datos mediante un reloj y señales separadas de envío y
recepción. El controlador activa la selección **CS** del dispositivo con el
que quiere comunicarse.

| Señal | Función | Referencia en la placa |
| --- | --- | --- |
| SCK | Reloj del controlador | PA1 |
| MOSI | Datos del controlador al periférico | PB5 |
| MISO | Datos del periférico al controlador | PA0 |
| CS | Selección del periférico | PA2 |
| VCC y GND | Alimentación y referencia | Según la tensión del montaje |

## Recursos compartidos

- **PB5** también controla el LED integrado.
- **PA0 y PA1** se utilizan para `Serial` en las prácticas UART.
- **PA2** se utiliza como entrada digital o ADC en otros ejercicios.

Para preparar un ejemplo SPI hay que liberar esas funciones y configurar
los pines adecuados. Los pines SPI genéricos del paquete Arduino 0.1.7
(PA4, PA5, PA6 y PA7) no coinciden con este encapsulado.

## Antes de conectar un dispositivo

Consulta su tensión de alimentación, niveles lógicos, modo SPI, frecuencia
máxima, orden de bits y protocolo. Verifica la correspondencia del conector
de seis pines en el [pinout](./03_pinout.md) y el
[esquemático](/py32f003/esquematico.pdf).

Las pantallas y memorias pueden requerir búferes considerables para los
**2 KB de RAM** de esta variante. Revisa el uso de memoria al compilar
antes de añadir una biblioteca. Esta sección es una referencia para ampliar
el taller; las primeras prácticas se encuentran en [Laboratorios](../examples/index.md).
