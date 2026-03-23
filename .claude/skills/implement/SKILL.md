---
name: implement
description: Implementar código mínimo para pasar los tests existentes (TDD GREEN phase)
context: fork
agent: coder
allowed-tools: Read, Write, Edit, Bash, Glob, Grep
---

Implementa el código necesario para pasar los tests existentes (fase GREEN del TDD):

**Componente/Feature**: $ARGUMENTS

## Instrucciones

1. Lee los tests existentes para entender qué se espera
2. Analiza el codebase para identificar patrones y convenciones
3. Escribe la implementación **mínima** que haga pasar todos los tests
4. **NO modifiques los tests** — solo código de producción
5. Ejecuta los tests y verifica que están en GREEN

## Entrega

Implementa el código y reporta el estado GREEN siguiendo el formato del agente coder.
