export interface PosterData {
  title: string
  content: string
  expandedContent: string
}

export interface ContactData {
  email: string
  instagram: string
  github: string
}

export interface UrbanProp {
  emoji: string
  className: string
}

export const posters: PosterData[] = [
  {
    title: 'Sobre mí',
    content: 'Texto de ejemplo que luego será reemplazado.',
    expandedContent: 'Soy un desarrollador apasionado por la tecnología y el diseño. Desde muy joven me interesé por la programación y el arte digital, lo que me llevó a explorar el mundo del desarrollo web. Me considero una persona creativa, curiosa y siempre dispuesta a aprender algo nuevo. Mi enfoque se centra en crear experiencias digitales que no solo funcionen bien, sino que también transmitan emociones y cuenten una historia. Creo firmemente que la tecnología y el arte pueden coexistir para crear productos únicos que marquen la diferencia.',
  },
  {
    title: 'Carrera',
    content: 'Información temporal de demostración.',
    expandedContent: 'Mi trayectoria profesional comenzó como diseñador gráfico freelance, donde aprendí los fundamentos del diseño visual y la comunicación. Posteriormente, me adentré en el desarrollo frontend, especializándome en Vue.js y tecnologías modernas de JavaScript. He trabajado en múltiples proyectos que van desde landing pages hasta aplicaciones web complejas. Actualmente me encuentro expandiendo mis conocimientos hacia el desarrollo fullstack, explorando Node.js, bases de datos y arquitectura de software. Cada proyecto ha sido una oportunidad para crecer y perfeccionar mis habilidades.',
  },
  {
    title: 'Proyectos',
    content: 'Descripción breve de proyectos futuros.',
    expandedContent: 'A lo largo de mi carrera he desarrollado diversos proyectos que reflejan mi pasión por el diseño y la programación. Entre ellos se encuentran aplicaciones web interactivas, portafolios creativos, herramientas de productividad y experimentos artísticos con código. Cada proyecto representa un desafío único que me ha permitido explorar nuevas tecnologías y técnicas de desarrollo. Mi objetivo es seguir creando proyectos que combinen funcionalidad con estética, ofreciendo experiencias memorables a los usuarios. Próximamente estaré publicando nuevos trabajos que incorporan animaciones avanzadas e inteligencia artificial.',
  },
  {
    title: 'Habilidades',
    content: 'HTML, CSS, JavaScript, Vue.',
    expandedContent: 'Mi stack tecnológico incluye HTML5, CSS3, JavaScript (ES6+), TypeScript, Vue.js 3, Vite, Vitest, Git y Node.js. En el área de diseño domino Figma, Photoshop e Illustrator. Tengo experiencia con metodologías ágiles, TDD, y arquitectura de componentes. También manejo herramientas de CI/CD, testing automatizado con Playwright, y deployment en plataformas como Vercel y Netlify. Constantemente estoy aprendiendo nuevas tecnologías y manteniéndome actualizado con las tendencias del desarrollo web moderno. Mi filosofía es dominar las bases antes de saltar a los frameworks.',
  },
  {
    title: 'Experiencia',
    content: 'Contenido de demostración.',
    expandedContent: 'He acumulado experiencia trabajando tanto de forma independiente como en equipos multidisciplinarios. Como freelancer, he colaborado con clientes de diversas industrias, desde startups tecnológicas hasta agencias creativas. En cada rol he contribuido no solo con código, sino también con ideas de diseño y estrategia de producto. Mi experiencia incluye la optimización de rendimiento web, implementación de diseños responsivos, integración de APIs, y la creación de sistemas de diseño reutilizables. Valoro profundamente el trabajo en equipo y la comunicación clara como pilares fundamentales del desarrollo de software.',
  },
]

export const contact: ContactData = {
  email: 'ejemplo@email.com',
  instagram: '@portfolio',
  github: 'github.com/portfolio',
}

export const urbanProps: UrbanProp[] = [
  { emoji: '🎨', className: 'p1' },
  { emoji: '📄', className: 'p2' },
  { emoji: '🧃', className: 'p3' },
  { emoji: '🧱', className: 'p4' },
  { emoji: '🎧', className: 'p5' },
  { emoji: '📦', className: 'p6' },
]
