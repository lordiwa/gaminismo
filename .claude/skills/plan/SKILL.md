---
name: plan
description: Planificar un feature con user stories, tareas y criterios de aceptación para TDD
context: fork
agent: planner
allowed-tools: Read, Grep, Glob, WebSearch, WebFetch
---

Planifica el siguiente feature/objetivo para el proyecto:

**Feature**: $ARGUMENTS

## Instrucciones

1. Analiza el feature en el contexto del proyecto actual
2. Explora el codebase para entender qué existe y qué se necesita
3. Descompón en user stories con criterios de aceptación claros y testeables
4. Prioriza por valor entregado al usuario
5. Define qué tests se necesitan escribir primero (TDD RED)
6. Sugiere el orden de implementación y qué agentes usar

## Entrega

Genera un plan completo siguiendo el formato del agente planner.
