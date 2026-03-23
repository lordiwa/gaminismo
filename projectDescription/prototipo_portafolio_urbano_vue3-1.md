# Prototipo de Portafolio Web Urbano (Vue 3)

## Concepto General

Portafolio web interactivo con estética urbana.\
El elemento principal es **un poste de luz desgastado** desde el cual se
despliegan **carteles informativos**.\
Alrededor del escenario aparecen **props urbanos** y una **actividad
lúdica interactiva**.

La página simula una **escena de calle nocturna** donde el usuario
explora la información del portafolio.

------------------------------------------------------------------------

# Estructura de la Página

## 1. Escena Principal

-   Poste de luz ubicado **a la izquierda**
-   Iluminación ambiental desde el poste
-   Carteles informativos desplegados hacia la derecha del poste

### Carteles de información (contenido de ejemplo)

-   Sobre mí
-   Carrera
-   Proyectos
-   Habilidades
-   Experiencia

Estos carteles usan animaciones para aparecer desde la izquierda.

------------------------------------------------------------------------

## 2. Props Urbanos

Objetos decorativos distribuidos alrededor de la escena:

Ejemplos: - Grafitis - Latas - Papeles - Bloques - Audífonos - Cajas

Ubicación: Distribuidos de forma ordenada alrededor de la pantalla para
crear ambiente urbano.

------------------------------------------------------------------------

## 3. Actividad Lúdica

Ubicada **más abajo a la derecha** de la escena.

### Función

El usuario puede **crear un rostro** usando partes prediseñadas.

### Elementos disponibles

-   Ojos
-   Nariz
-   Boca

### Funcionamiento

1.  El usuario selecciona una parte del rostro.
2.  Vue añade la imagen al canvas.
3.  Las piezas aparecen en posiciones aleatorias.

------------------------------------------------------------------------

## 4. Música de Fondo

Botón para activar o pausar música urbana.

Funciones: - Reproducir música - Pausar música

Implementado con un elemento `<audio>` controlado desde Vue.

------------------------------------------------------------------------

## 5. Sección de Contacto

Ubicada al final de la página.

Elemento visual: 🗑 **Bolsa de basura**

Al hacer clic se despliega información de contacto:

-   Email
-   Instagram
-   GitHub

------------------------------------------------------------------------

# Tecnologías Utilizadas

## Framework

**Vue 3 (CDN)**

Se utiliza para: - Manejo del estado - Eventos - Renderizado dinámico

### Variables principales

-   musicPlaying
-   showContact
-   showInfo
-   faceParts

------------------------------------------------------------------------

# Interacciones Implementadas

### Música

Botón que alterna entre reproducir y pausar audio.

### Animación de carteles

Los carteles aparecen después de montar la app usando:

-   transición CSS
-   cambio de clase `visible`

### Actividad de rostro

Vue renderiza dinámicamente las partes usando:

`v-for`

y eventos `@click`.

------------------------------------------------------------------------

# Distribución Visual del Prototipo

POSTE DE LUZ (IZQUIERDA)

Carteles informativos: - Sobre mí - Carrera - Proyectos - Habilidades -
Experiencia

Props urbanos alrededor de la escena.

Actividad lúdica: Crear rostro (lado derecho inferior).

Contacto: Bolsa de basura al final de la página.

------------------------------------------------------------------------

# Posibles Mejoras Futuras

-   Animación realista de telas colgando
-   Scroll que simule caminar por la calle
-   Lluvia urbana
-   Parallax en el fondo
-   Drag & Drop real para el juego
-   Iluminación dinámica del poste
-   Más props urbanos animados

------------------------------------------------------------------------

# Resultado

Un **portafolio interactivo con temática urbana** donde:

-   el **poste de luz organiza la información**
-   los **carteles muestran el contenido**
-   el usuario interactúa con una **actividad creativa**
-   el entorno visual simula una **calle urbana estilizada**
