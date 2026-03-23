# Gaminismo — Agentic OS

## Proyecto

Gaminismo es un proyecto experimental que utiliza la infraestructura agéntica de Claude Code como sistema operativo de desarrollo. App web Vue altamente interactiva, visual y artística.

## Idioma

- **Comunicación**: español
- **Código**: inglés

## Sistema Agéntico

Este proyecto usa `.claude/` como base para orquestar agentes, skills y reglas:

### Agentes (`.claude/agents/`)

- `@investigator` — exploración, research y reportes
- `@planner` — descomposición de features en tareas priorizadas por valor (TDD planning)
- `@designer` — diseño UI/UX visual y artístico con Vue
- `@tester` — escribe tests primero, fase RED del TDD
- `@coder` — implementa código mínimo para pasar tests, fase GREEN del TDD
- `@reviewer` — code review y refactoring, fase REFACTOR del TDD

### Skills (`.claude/skills/`)

- `/research <tema>` — investigación profunda sobre un tema
- `/plan <feature>` — planificar feature con user stories y tareas TDD
- `/design <componente>` — diseñar componente Vue con enfoque visual/artístico
- `/test <componente o feature>` — escribir tests que fallen (TDD RED)
- `/implement <componente o feature>` — implementar código para pasar tests (TDD GREEN)
- `/review [scope]` — revisar código y sugerir refactors (TDD REFACTOR)

### Reglas (`.claude/rules/`)

- `project-conventions.md` — convenciones generales del proyecto
- `tdd-workflow.md` — flujo de trabajo TDD (RED → GREEN → REFACTOR)

## Flujo TDD

```
/plan [feature]        → @planner descompone en tareas
/design [componente]   → @designer crea el diseño visual
/test [componente]     → @tester escribe tests (RED)
/implement [componente]→ @coder implementa (GREEN)
/review                → @reviewer sugiere mejoras (REFACTOR)
```

## Convenciones

- Preferir soluciones simples sobre over-engineering
- Documentar decisiones arquitectónicas importantes
- Usar la estructura agéntica para todas las tareas complejas
- Tests antes del código, sin excepciones (TDD)
