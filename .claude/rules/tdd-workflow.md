---
description: Flujo de trabajo TDD (Test Driven Development) para el proyecto
globs: *
---

## Flujo TDD

- Toda feature nueva sigue el ciclo: RED → GREEN → REFACTOR
- RED: @tester escribe tests que fallen (via /test)
- GREEN: @coder implementa el mínimo para pasar tests (via /implement)
- REFACTOR: @reviewer sugiere mejoras manteniendo tests verdes (via /review)

## Reglas

- Los tests se escriben ANTES del código, sin excepciones
- El tester NO debe ver la implementación al escribir tests
- El coder NO debe modificar tests existentes
- Priorizar valor entregado al usuario sobre cobertura técnica

## Stack de testing

- **Vitest** — Unit/integration tests (rápido, nativo de Vite)
- **Vue Test Utils** — Montaje y testing de componentes Vue
- **Playwright** — E2E tests y visual regression
- **@testing-library/vue** — Testing centrado en el usuario (opcional)
