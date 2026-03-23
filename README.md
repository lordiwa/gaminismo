# Gaminismo

App web experimental construida con Vue 3, TypeScript y Vite. Altamente interactiva, visual y artística.

## Requisitos previos

### 1. Instalar Node.js

Node.js es el entorno que permite ejecutar JavaScript fuera del navegador. Lo necesitás para correr este proyecto.

1. Andá a [https://nodejs.org](https://nodejs.org)
2. Descargá la versión **LTS** (la recomendada)
3. Ejecutá el instalador y seguí los pasos (todo "Next, Next, Finish")
4. Verificá que se instaló bien abriendo una terminal y ejecutando:

```bash
node -v
npm -v
```

Si ves números de versión (por ejemplo `v20.11.0` y `10.2.0`), está todo bien.

> **¿Qué es una terminal?** En Windows, buscá "cmd" o "PowerShell" en el menú inicio. En Mac, buscá "Terminal". En Linux, ya sabés.

### 2. Instalar Git

Git es la herramienta para descargar y gestionar el código.

1. Andá a [https://git-scm.com](https://git-scm.com)
2. Descargá e instalá (en Windows, dejá todo por defecto)
3. Verificá:

```bash
git --version
```

## Clonar el repositorio

Abrí una terminal y ejecutá:

```bash
git clone https://github.com/lordiwa/gaminismo.git
```

Esto descarga todo el código del proyecto a tu computadora.

## Instalar dependencias

Entrá a la carpeta del proyecto e instalá las librerías necesarias:

```bash
cd gaminismo
npm install
```

> `npm install` lee el archivo `package.json` y descarga todo lo que el proyecto necesita para funcionar. Esto crea la carpeta `node_modules/` (que puede pesar bastante, pero no se sube al repositorio).

## Ejecutar la app

```bash
npm run dev
```

Esto levanta un servidor local. Abrí tu navegador y andá a la dirección que te muestra la terminal (generalmente `http://localhost:5173`).

## Ejecutar tests

```bash
npm test
```

Corre todos los tests del proyecto una vez.

Para dejar los tests corriendo mientras desarrollás (se re-ejecutan con cada cambio):

```bash
npm run test:watch
```

## Otros comandos

```bash
npm run build    # Genera la versión optimizada para producción en dist/
npm run preview  # Previsualiza el build de producción
```

## Equipo Agéntico

El proyecto opera con un equipo de agentes especializados que colaboran siguiendo un flujo TDD:

| Agente | Rol | Invocación |
|--------|-----|------------|
| `@investigator` | Exploración, research y reportes | `/research <tema>` |
| `@planner` | Descompone features en tareas priorizadas por valor | `/plan <feature>` |
| `@designer` | Diseño UI/UX visual y artístico con Vue | `/design <componente>` |
| `@tester` | Escribe tests primero — fase RED | `/test <componente>` |
| `@coder` | Implementa el mínimo para pasar tests — fase GREEN | `/implement <componente>` |
| `@reviewer` | Code review y refactoring — fase REFACTOR | `/review [scope]` |

## Flujo TDD

```
/plan [feature]         → @planner descompone en tareas
/design [componente]    → @designer crea el diseño visual
/test [componente]      → @tester escribe tests que fallen (RED)
/implement [componente] → @coder implementa el mínimo (GREEN)
/review                 → @reviewer sugiere mejoras (REFACTOR)
```

---

## Referencias escatológicas en la cultura

Porque la historia del humor es inseparable de las funciones corporales. Una selección curada de las mejores referencias escatológicas en la cultura humana:

### Antigüedad

- **Chiste sumerio (c. 1900 a.C.)** — El chiste más antiguo registrado en la historia de la humanidad es sobre un pedo: *"Algo que nunca ha ocurrido desde tiempos inmemoriales: una mujer joven que no se tiró un pedo en el regazo de su marido."* Sí, la humanidad empezó por ahí.

- **Aristófanes (423 a.C.)** — En *Las Nubes* y otras comedias griegas, los pedos son recurso cómico constante. Aristófanes los usaba como sátira política: los pedos del pueblo contra los poderosos.

### Medieval

- **Geoffrey Chaucer — *Cuentos de Canterbury* (c. 1390)** — En "El cuento del molinero", un personaje recibe un pedo en la cara cuando espera un beso. Literatura con mayúscula.

- **Roland the Farter (siglo XII)** — Bufón medieval inglés que tenía tierras otorgadas por el rey Enrique II a cambio de realizar *"unum saltum et siffletum et unum bumbulum"* (un salto, un silbido y un pedo) cada Navidad ante la corte.

- **He-Gassen (siglo XII-XIX)** — Pergamino japonés que ilustra batallas de pedos (*he-gassen* = "guerra de pedos"). Arte scrolls completos dedicados a gente tirándose pedos unos a otros como arma de combate.

### Renacimiento y Modernidad temprana

- **François Rabelais — *Gargantúa y Pantagruel* (1532)** — La obra magna del humor escatológico literario. Gargantúa se limpia el trasero con un ganso vivo y decide que es el método superior. Rabelais elevó lo escatológico a filosofía.

- **Wolfgang Amadeus Mozart — *"Leck mich im Arsch"* (1782)** — Canon a seis voces cuyo título se traduce como "Lameme el culo". Mozart también escribió cartas a su prima Maria Anna Thekla llenas de humor escatológico detallado. El genio musical era también un genio del humor de baño.

- **Jonathan Swift — *Los viajes de Gulliver* (1726)** — Gulliver apaga un incendio en el palacio real de Lilliput orinando sobre él. La reina queda horrorizada. Swift no tenía miedo.

### Cine y TV modernos

- **Blazing Saddles (1974)** — Mel Brooks filmó la primera escena de pedos en la historia del cine mainstream. Los cowboys comiendo frijoles alrededor del fuego. Cambió las reglas para siempre.

- **Dumb and Dumber (1994)** — La escena del baño de Lloyd Christmas. Posiblemente la escena escatológica más icónica del cine de los 90.

- **South Park (1997-)** — Mr. Hankey, la caca navideña (*Mr. Hankey, the Christmas Poo*). Un personaje que es literalmente una caca parlante con gorro de navidad. Trey Parker y Matt Stone llevaron lo escatológico a la crítica social.

- **Bridesmaids (2011)** — La escena de la tienda de vestidos de novia. Intoxicación alimentaria colectiva en el peor momento posible. Rompió la barrera del humor escatológico en comedias protagonizadas por mujeres.

### Bonus gastronómico

- **Pet-de-nonne** — Postre francés cuyo nombre significa literalmente *"pedo de monja"*. Son buñuelos inflados de masa choux. La gastronomía francesa, siempre elegante.
