# Taller: compilación, programación y validación de firmware

## Propósito

Completar un ciclo de desarrollo sobre **DevLab PY32F003L24D6TR**, desde
modificar el código en Arduino IDE hasta comprobar el resultado físico.
La plataforma utiliza un núcleo **ARM Cortex-M0+**.

```text
Código → Compilación → Firmware → Programación SWD → Ejecución
                                                       ↓
                              Validación ← Corrección ← Falla
```

## Duración y organización

Propuesta de **dos horas**, basada en el material local de preparación del
taller CMIC 2026. El horario definitivo depende de la organización del evento.
Las herramientas y los programadores deben quedar preparados antes de la sesión.

| Tiempo | Actividad | Evidencia de avance |
| --- | --- | --- |
| 0–15 min | Reconocer placa, alimentación, LED y SWD | Identificar las cuatro conexiones de programación |
| 15–30 min | [Arquitectura, memoria y periféricos](./cortex-m.md) | Explicar qué contiene Flash y qué contiene RAM |
| 30–45 min | Recorrer Arduino IDE, compilación y carga | Verificar placa x4 y reloj interno a 24 MHz |
| 45–65 min | [Lab 1: Blink](../examples/lab01-blink.md) | Cargar el programa y cambiar el intervalo |
| 65–80 min | [Análisis de compilación](./compilacion.md) | Identificar tamaños y archivos .elf, .hex y .bin |
| 80–100 min | [Lab 5: Falla controlada](../examples/lab05-validacion.md) | Reproducir y explicar el LED apagado |
| 100–115 min | Corrección y validación | Registrar pruebas positiva, negativa y de recuperación |
| 115–120 min | Cierre | Guardar resultados y recuperar la estación |

Las prácticas de [entrada digital](../examples/lab02-gpio.md),
[UART](../examples/lab03-uart.md) y [ADC](../examples/lab04-adc.md) son
ampliaciones. Se pueden realizar en una sesión adicional o sustituir una
demostración cuando el instructor disponga de sus accesorios.

## Preparación del instructor

1. Comprueba cada placa y programador con [Blink](../examples/lab01-blink.md).
2. Instala Arduino IDE, el paquete UNIT Electronics PY32 0.1.7 y pyOCD.
3. Configura PY32F003x4, HSI a 24 MHz y VCC a 3.3 V.
4. Verifica los puentes de VCC y LED Enable.
5. Guarda fuentes, firmware de recuperación y resultados de esa estación.
6. Descarga los [recursos de la placa](../py32f003-getting-started/recursos.md) y los ejemplos para disponer de ellos localmente.

La documentación se puede servir localmente sin conexión después de instalar
sus dependencias. La instalación inicial del paquete Arduino y de pyOCD
requiere conexión o herramientas previamente descargadas por el instructor.

## Resultado del participante

- Un ejemplo modificado, compilado y cargado en su placa.
- Un registro del consumo de memoria y la configuración empleada.
- Una falla reproducida y corregida.
- Evidencia del comportamiento esperado y de la recuperación tras reset.
