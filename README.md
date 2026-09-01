# Informe de Trabajo Final - 1ASI0732 Diseño de Experimentos de Ingeniería de Software

**Ciclo Académico:** 2026-20  
**NRC:** [PENDIENTE - Completar]  
**Profesor:** Julio Manuel Noriega Melendez  
**Startup:** TheSuccesfulOnesCorp  
**Producto:** SafeSpace

## Integrantes del Equipo

| # | Nombre Completo | Código | Rol |
|---|-----------------|--------|-----|
| 1 | Mauricio Luis Pajés León | u202410093 | [PENDIENTE - Definir rol] |
| 2 | Milenko Ruben Cayanchi Avila | U202312566 | [PENDIENTE - Definir rol] |
| 3 | Diego Andrés Ávalos Cordova | U202313922 | [PENDIENTE - Definir rol] |
| 4 | Jose Gustavo Asto Jacome | U20241C630 | [PENDIENTE - Definir rol] |
| 5 | [Integrante 5 - Pendiente] | [Código - Pendiente] | [PENDIENTE] |
| 6 | [Integrante 6 - Pendiente] | [Código - Pendiente] | [PENDIENTE] |

## Estructura del Repositorio

```
.
├── assets/
│   └── images/
│       ├── shared/           # Logo UPC, recursos compartidos
│       ├── cap1/             # Capítulo I: Introducción (Startup Profile, Lean UX, Segmentos)
│       ├── cap2/             # Capítulo II: Requirements Elicitation & Analysis
│       ├── cap3/             # Capítulo III: Requirements Specification
│       ├── cap4/             # Capítulo IV: Product Design
│       └── cap5/             # Capítulo V: Product Implementation
├── docs/
│   ├── 00-caratula.md
│   ├── 01-registro-versiones.md
│   ├── 02-collaboration-insights.md
│   ├── 03-contenido.md
│   ├── 04-student-outcome.md
│   ├── 10-cap1-introduccion.md
│   ├── 20-cap2-requirements-elicitation.md
│   ├── 30-cap3-requirements-specification.md
│   ├── 40-cap4-product-design.md
│   ├── 50-cap5-product-implementation.md
│   ├── 90-conclusiones.md
│   ├── bibliografia.md
│   └── anexos.md
└── config/                   # Configuración de build (Pandoc, LaTeX, etc.)
```

## Entregas del Curso

| Hito | Fecha | Entregables |
|------|-------|-------------|
| **Avance 1** | Semana 4 | Informe Parcial, Keynote, Performance Report, .zip artefactos, Video exposición |
| **Trabajo Parcial** | Semana 7 | Versión actualizada + Cap. III, V, VI, VII |
| **Avance 2** | Semana 12 | Versión actualizada + Cap. VI, VII, VIII (parcial) |
| **Trabajo Final (TB2)** | Semana 15 | Informe completo + todos los capítulos |

## Repositorio del Informe (GitHub)

**Organización:** [PENDIENTE - Crear org en GitHub: `the-succesful-ones-corp`]  
**Repositorio:** [PENDIENTE - Crear repo público: `docs`]  
**Workflow:** GitFlow + Conventional Commits + Semantic Versioning

## Build del PDF

```bash
# Desde la raíz del proyecto
make pdf
# o
pandoc --from markdown --to pdf --template=config/template.tex --output=report.pdf docs/*.md
```

---

> **Nota:** Este README se actualiza en cada entrega. La versión final se exporta a PDF para la entrega oficial.