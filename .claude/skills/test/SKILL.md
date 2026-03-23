---
name: test
description: Escribir tests que fallen para un componente o feature (TDD RED phase)
context: fork
agent: tester
allowed-tools: Read, Write, Edit, Bash, Glob, Grep
---

Escribe tests para el siguiente componente o feature (fase RED del TDD):

**Componente/Feature**: $ARGUMENTS

## Instrucciones

1. Busca criterios de aceptación existentes (planes, issues, documentación)
2. Explora el proyecto para entender patrones de testing existentes
3. Escribe tests que fallen — deben fallar porque la implementación no existe o está incompleta
4. **NO mires la implementación** si ya existe — basa los tests en el contrato (props, eventos, API)
5. Verifica que los tests están en RED ejecutándolos

## Entrega

Genera los archivos de test y reporta el estado RED siguiendo el formato del agente tester.
