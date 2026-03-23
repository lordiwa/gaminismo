# Gaminismo — Agentic OS

App web Vue altamente interactiva, visual y artística. Utiliza la infraestructura agéntica de Claude Code como sistema operativo de desarrollo.

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

Toda feature nueva sigue el ciclo **RED → GREEN → REFACTOR**:

```
/plan [feature]         → @planner descompone en tareas
/design [componente]    → @designer crea el diseño visual
/test [componente]      → @tester escribe tests que fallen (RED)
/implement [componente] → @coder implementa el mínimo (GREEN)
/review                 → @reviewer sugiere mejoras (REFACTOR)
```

**Reglas clave:**
- Los tests se escriben **antes** del código, sin excepciones
- El tester no ve la implementación al escribir tests (aislamiento de contexto)
- El coder no modifica tests existentes
- Se prioriza valor entregado al usuario sobre cobertura técnica

## Estructura

```
.claude/
├── agents/          # Agentes especializados (@nombre)
├── skills/          # Comandos invocables (/nombre)
└── rules/           # Convenciones automáticas
```

## Convenciones

- **Comunicación**: español
- **Código**: inglés
- Preferir soluciones simples sobre over-engineering
