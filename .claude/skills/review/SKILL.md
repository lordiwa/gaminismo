---
name: review
description: Revisar código, sugerir refactors y verificar calidad (TDD REFACTOR phase)
context: fork
agent: reviewer
allowed-tools: Read, Grep, Glob, Bash
---

Revisa el código actual del proyecto (fase REFACTOR del TDD):

**Scope**: $ARGUMENTS

## Instrucciones

1. Lee los tests para entender qué se espera
2. Lee la implementación y evalúa calidad
3. Ejecuta los tests para confirmar que están en GREEN
4. Evalúa correctitud, calidad, performance, seguridad y accesibilidad
5. Sugiere refactors que mantengan los tests verdes
6. **NO edites código** — solo reporta hallazgos y sugerencias

## Entrega

Genera un reporte de review siguiendo el formato del agente reviewer.
