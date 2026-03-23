---
description: Convenciones generales del proyecto Gaminismo
globs: *
---

## Idioma

- Código (variables, funciones, clases, comentarios técnicos): **inglés**
- Comunicación con el usuario, documentación, reportes: **español**

## Principios

- Preferir soluciones simples sobre over-engineering
- Documentar decisiones arquitectónicas importantes
- No agregar abstracciones prematuras — tres líneas similares es mejor que una abstracción innecesaria

## Estructura

- Usar `.claude/agents/` para definir agentes especializados
- Usar `.claude/skills/` para definir skills invocables
- Usar `.claude/rules/` para convenciones automáticas
