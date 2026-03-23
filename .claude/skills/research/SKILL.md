---
name: research
description: Investigación profunda sobre un tema, tecnología o área del código
context: fork
agent: investigator
allowed-tools: Read, Grep, Glob, Bash, WebSearch, WebFetch
---

Realiza una investigación profunda sobre el siguiente tema:

**Tema**: $ARGUMENTS

## Instrucciones

1. Analiza el tema solicitado en el contexto del proyecto actual
2. Explora el codebase buscando código, patrones y dependencias relacionadas
3. Investiga online si necesitas información externa (documentación, best practices, comparativas)
4. Produce un reporte estructurado con tus hallazgos
5. Incluye recomendaciones concretas y próximos pasos

## Entrega

Genera un reporte completo siguiendo el formato del agente investigador.
