import { defineConfig } from 'vitepress'

export default defineConfig({
  markdown: {
    math: true,
  },
  base: process.env.BASE_PATH || '/',
  title: 'Cortex-M · DevLab PY32F003',
  description: 'Taller en español de compilación, programación SWD y validación de firmware con Arduino IDE y DevLab PY32F003.',
  lang: 'es-MX',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Taller', link: '/guide/taller' },
      { text: 'Primeros pasos con PY32F003', link: '/py32f003-getting-started/' },
      { text: 'Laboratorios', link: '/examples/' },
      { text: 'Recursos', link: '/py32f003-getting-started/recursos' }
    ],
    sidebar: [
      {
        text: 'Taller Cortex-M',
        items: [
          { text: 'Plan del taller', link: '/guide/taller' },
          { text: 'Arquitectura y firmware', link: '/guide/cortex-m' },
          { text: 'Compilación y memoria', link: '/guide/compilacion' }
        ]
      },
      {
        text: 'Primeros pasos con PY32F003',
        items: [
          { text: 'Índice', link: '/py32f003-getting-started/' },
          { text: 'Acerca de DevLab PY32F003', link: '/py32f003-getting-started/00_about' },
          { text: 'Preparar la estación', link: '/py32f003-getting-started/01_setup' },
          { text: 'Arduino IDE (C/C++)', link: '/py32f003-getting-started/02_0_duino' },
          { text: 'Pinout y esquemático', link: '/py32f003-getting-started/03_pinout' },
          { text: 'Programación SWD', link: '/py32f003-getting-started/04_swd' }
        ]
      },
      {
        text: 'Periféricos',
        items: [
          { text: 'GPIO y temporización', link: '/py32f003-getting-started/11_gpio' },
          { text: 'ADC', link: '/py32f003-getting-started/22_adc' },
          { text: 'I²C', link: '/py32f003-getting-started/33_i2c' },
          { text: 'SPI', link: '/py32f003-getting-started/44_spi' },
          { text: 'Comunicación UART', link: '/py32f003-getting-started/66_communication' }
        ]
      },
      {
        text: 'Prácticas de laboratorio',
        items: [
          { text: 'Índice y descargas', link: '/examples/' },
          { text: 'Lab 1: LED Blink', link: '/examples/lab01-blink' },
          { text: 'Lab 2: Entrada digital', link: '/examples/lab02-gpio' },
          { text: 'Lab 3: Comunicación UART', link: '/examples/lab03-uart' },
          { text: 'Lab 4: Lectura ADC', link: '/examples/lab04-adc' },
          { text: 'Lab 5: Falla y validación', link: '/examples/lab05-validacion' }
        ]
      },
      {
        text: 'Material de apoyo',
        items: [
          { text: 'Imágenes y documentos', link: '/py32f003-getting-started/recursos' },
          { text: 'Solución de problemas', link: '/py32f003-getting-started/report' }
        ]
      }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Buscar',
            buttonAriaLabel: 'Buscar'
          },
          modal: {
            displayDetails: 'Mostrar detalles',
            resetButtonTitle: 'Limpiar búsqueda',
            backButtonTitle: 'Cerrar búsqueda',
            noResultsText: 'Sin resultados',
            footer: {
              selectText: 'seleccionar',
              selectKeyAriaLabel: 'entrar',
              navigateText: 'navegar',
              navigateUpKeyAriaLabel: 'flecha arriba',
              navigateDownKeyAriaLabel: 'flecha abajo',
              closeText: 'cerrar',
              closeKeyAriaLabel: 'escape'
            }
          }
        }
      }
    },
    outline: {
      level: [2, 3]
    },
    outlineTitle: 'En esta página',
    darkModeSwitchLabel: 'Apariencia',
    lightModeSwitchTitle: 'Cambiar a tema claro',
    darkModeSwitchTitle: 'Cambiar a tema oscuro',
    sidebarMenuLabel: 'Menú',
    returnToTopLabel: 'Volver arriba',
    langMenuLabel: 'Cambiar idioma',
    skipToContentLabel: 'Saltar al contenido',
    docFooter: {
      prev: 'Página anterior',
      next: 'Página siguiente'
    },
    footer: {
      message: 'Taller de sistemas embebidos con ARM Cortex-M0+ y DevLab PY32F003.',
      copyright: 'MIT'
    }
  }
})
