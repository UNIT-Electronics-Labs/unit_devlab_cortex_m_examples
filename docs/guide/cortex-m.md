# Arquitectura Cortex-M y firmware

## Del código al comportamiento

**Cortex-M** es una familia de núcleos de procesamiento para microcontroladores.
El **PY32F003L24D6TR** integra un núcleo **Cortex-M0+**, memoria y periféricos
en el mismo circuito. La placa DevLab añade conexiones, regulación de tensión,
LED y botón de reinicio.

## Qué ocurre al ejecutar un programa

1. El compilador transforma C/C++ en instrucciones para el núcleo ARM.
2. El enlazador ubica código y datos en las regiones de memoria disponibles.
3. El programador carga el firmware en Flash mediante SWD.
4. Tras el reinicio, el código de arranque prepara la ejecución.
5. El entorno Arduino llama una vez a `setup()` y repite `loop()`.

El **firmware** es el programa que ejecuta el microcontrolador para controlar
su hardware. Una llamada como `digitalWrite(PB5, HIGH)` termina configurando
el periférico GPIO que gobierna el LED.

## Memoria del dispositivo del taller

| Recurso | Capacidad | Qué contiene |
| --- | --- | --- |
| Flash | 16 KB | Programa y datos que deben conservarse sin alimentación |
| SRAM | 2 KB | Variables de trabajo, búferes, pila y memoria dinámica |

La **pila** guarda, entre otros datos, variables locales y el contexto de las
llamadas. La **memoria dinámica** se reserva durante la ejecución. Ambas
comparten la RAM con las variables estáticas: el resumen de compilación
no predice todo el consumo durante el funcionamiento.

Estas capacidades corresponden a **PY32F003L24D6**, según la tabla 1-4 de la
[hoja de datos](/py32f003/PY32F003_Datasheet_Rev1.7.pdf).

## Reloj, temporizadores e interrupciones

El taller utiliza el oscilador interno **HSI a 24 MHz**. Los temporizadores
cuentan pulsos de reloj para medir intervalos o generar señales. Una
interrupción permite atender un evento y después volver al programa principal.

Arduino ofrece funciones como `delay()` y `millis()` para comenzar sin
configurar directamente todos los registros. Al estudiar sus resultados,
relaciona la configuración de reloj con los tiempos observados.

## Periféricos

| Periférico | Ejemplo de uso |
| --- | --- |
| GPIO | Leer un pulsador y encender el LED |
| ADC | Convertir la tensión de un potenciómetro en un número |
| UART | Enviar registros a la computadora |
| I²C | Comunicarse con un sensor mediante dirección |
| SPI | Intercambiar datos con un dispositivo seleccionado por CS |

El encapsulado de ocho terminales comparte varias funciones en una misma
conexión física. Consulta el [pinout](../py32f003-getting-started/03_pinout.md)
antes de intentar utilizar varios periféricos a la vez.

**Siguiente tema:** [Compilación y memoria](./compilacion.md).
