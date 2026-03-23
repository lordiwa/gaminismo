export interface PosterData {
  title: string
  content: string
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
  { title: 'Sobre mí', content: 'Texto de ejemplo que luego será reemplazado.' },
  { title: 'Carrera', content: 'Información temporal de demostración.' },
  { title: 'Proyectos', content: 'Descripción breve de proyectos futuros.' },
  { title: 'Habilidades', content: 'HTML, CSS, JavaScript, Vue.' },
  { title: 'Experiencia', content: 'Contenido de demostración.' },
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
