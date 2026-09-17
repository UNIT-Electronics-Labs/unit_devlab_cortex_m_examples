# Comunicación UART

## Del microcontrolador a la computadora

UART permite intercambiar bytes por **TX** y **RX**, con una velocidad
acordada entre los extremos. En el paquete **UNIT Electronics PY32 0.1.7**,
la instancia genérica `Serial` utiliza **PA0 como TX** y **PA1 como RX**.

| Placa DevLab | Adaptador USB-UART de 3.3 V |
| --- | --- |
| PA0 / TX | RX |
| PA1 / RX | TX |
| GND | GND |

![Referencia de conexiones UART de Development Board](/py32f003/uart.png)

Mantén la alimentación de la estación por su fuente habitual. Conecta sólo
las señales y GND del adaptador USB-UART; su salida VCC no es necesaria.

## Configuración en Arduino IDE

1. Selecciona **U(S)ART support → Enabled (generic 'Serial')**.
2. Compila y carga la [práctica de eco](../examples/lab03-uart.md) por SWD.
3. Selecciona el puerto del adaptador USB-UART en el monitor serie.
4. Configura **115200 baudios**, 8 bits, sin paridad y un bit de parada (8N1).
5. Escribe un texto y comprueba que regresa.

::: info Dos interfaces distintas
El cable USB del programador CMSIS-DAP permite cargar firmware. Los mensajes
de `Serial` salen por PA0/PA1: necesitas un adaptador USB-UART o una función
UART explícitamente compatible y habilitada en tu programador.
:::

La velocidad de 115200 baudios es la elegida para el ejercicio; no representa
por sí sola el límite del periférico. El programa repite un mensaje de estado
para que también puedas observarlo al abrir el monitor después del arranque.

**Ejemplo completo:** [Lab 3: Comunicación UART](../examples/lab03-uart.md).
