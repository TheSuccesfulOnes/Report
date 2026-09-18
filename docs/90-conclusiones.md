# Conclusiones

## Conclusiones y recomendaciones

### Conclusiones Generales

Durante el AV1, SafeSpace pasó de una propuesta centrada en el bienestar laboral a una solución documentada con requisitos, diseño y evidencia de implementación. La revisión de los repositorios y de las interfaces publicadas permitió comprobar que el producto cuenta con una landing page, una aplicación web para empleados, una interfaz web para Recursos Humanos, una API REST desplegada y persistencia en Firebase Firestore.

La solución atiende dos necesidades principales: ofrecer a los empleados canales seguros para expresar su estado y comunicar situaciones laborales, y brindar a Recursos Humanos información organizada para revisar encuestas, actividades y reportes. La efectividad de estas funciones con usuarios reales todavía requiere una validación formal en una entrega posterior.

#### Problem Statements vs. Realidad

| Problem Statement | Hipótesis Inicial | Resultado Validado | Conclusión |
| :---- | :---- | :---- | :---- |
| Los colaboradores no siempre cuentan con un canal seguro para expresar problemas laborales. | El anonimato y la confidencialidad facilitarán la comunicación de situaciones sensibles. | La aplicación web incluye reportes anónimos, encuestas con comentarios y un canal privado de orientación mediante IA. | El problema está atendido a nivel de producto; falta medir la disposición real de los usuarios a utilizarlo. |
| Recursos Humanos recibe información tardía o fragmentada sobre el clima laboral. | Un panel con encuestas, actividades y reportes facilitará el seguimiento. | La interfaz de RR. HH. muestra el resumen de bienestar, resultados de encuestas, actividades, comentarios y detalle de reportes. | La hipótesis está respaldada por la implementación visual; falta validar su utilidad mediante sesiones con usuarios de RR. HH. |

#### Assumptions Validados / Invalidados

| Assumption | Tipo | Validación | Resultado | Acción |
| :---- | :---- | :---- | :---- | :---- |
| Los empleados necesitan expresar situaciones sensibles sin exponer su identidad. | Usuario | Entrevistas, requisitos y formulario de reportes. | Parcialmente validado: el producto incorpora el anonimato, pero no se midió su adopción. | Mantener el modo anónimo y validarlo con usuarios. |
| Recursos Humanos necesita una vista consolidada del bienestar del equipo. | Usuario | Requisitos, diseño y pantalla de resumen de RR. HH. | Validado a nivel de solución documentada e implementada. | Evaluar facilidad de uso y priorizar filtros o métricas adicionales. |
| El modelo SaaS puede sostenerse mediante planes para organizaciones. | Negocio | Modelo de negocio del Capítulo I y endpoints de planes de pago. | Parcialmente validado: existen planes y registro de pagos, pero no hay pasarela ni renovación automática. | Presentar el pago como alcance inicial y definir el modelo comercial en siguientes entregas. |
| La arquitectura web, móvil y API puede desplegarse con persistencia no relacional. | Técnica | Repositorios, despliegues en Vercel/Render, configuración de Firestore y distribución Android. | Validado para el alcance técnico revisado en AV1. | Mantener actualizados los enlaces de distribución y las versiones documentadas. |

#### Hypothesis Statements - Resultados

| Hipótesis | Métrica | Target | Actual | Veredicto |
| :---- | :---- | :----: | :----: | :---- |
| El canal anónimo aumentará la disposición a comunicar situaciones laborales. | Porcentaje de usuarios que eligen el modo anónimo y completan un reporte. | Definir en validación | No medido | En proceso |
| El panel de RR. HH. facilitará la revisión del clima laboral. | Tiempo y facilidad percibida para encontrar encuestas, actividades y reportes. | Definir en validación | No medido | En proceso |
| La orientación inicial mediante IA ayudará a los usuarios a iniciar una acción de autocuidado. | Comprensión y utilidad percibida de la respuesta recibida. | Definir en validación | No medido | En proceso |

#### Lean UX - Criterios de Éxito

| Criterio | Target | Alcanzado | % | Comentario |
| :---- | :----: | :----: | :----: | :---- |
| Acceso a los flujos principales | Evidencia de login, registro y navegación por rol | Evidenciado | N/A | Se cuenta con capturas del trabajador y de RR. HH. |
| Comunicación segura de situaciones | Evidencia de reporte anónimo y consulta de reportes | Evidenciado | N/A | La interfaz permite seleccionar el modo anónimo y revisar el estado del reporte. |
| Seguimiento del bienestar laboral | Evidencia de encuestas, actividades, comentarios y resumen de RR. HH. | Evidenciado | N/A | Los flujos aparecen en las capturas del frontend web. |
| Validación con usuarios reales | Sesiones, métricas comparables y hallazgos | Pendiente de una siguiente entrega | N/A | AV1 documenta la solución y su implementación, no una medición concluyente. |

---

### Lecciones Aprendidas (Por Área)

#### Investigación y Descubrimiento

Las entrevistas y el análisis de necesidades mostraron que la confianza, el anonimato y la posibilidad de recibir orientación son elementos centrales para abordar situaciones sensibles en el trabajo. Esto se reflejó en la priorización de reportes, encuestas y asistencia inicial.

#### Diseño y UX

La separación de experiencias para empleados y Recursos Humanos ayudó a ordenar las tareas de cada perfil. Las capturas del frontend muestran una navegación diferenciada, formularios directos y estados visibles para encuestas, actividades y reportes.

#### Arquitectura y Desarrollo

La división entre frontend, frontend administrativo, aplicación móvil y API facilita la evolución independiente de cada producto. La persistencia en Firestore y la exposición de bounded contexts mediante rutas REST permiten mantener una organización clara de las funcionalidades.

#### DevOps y Despliegue

El uso de Vercel para las interfaces y Render para el backend permitió disponer de versiones publicadas para revisión. La configuración por variables de entorno mantiene separados los secretos y las URLs específicas de cada ambiente.

#### Experimentación (Para entregas posteriores)

El AV1 deja definidos los flujos y criterios que deberán medirse en las siguientes entregas. La validación experimental requiere sesiones planificadas, usuarios representativos y métricas comparables.

---

### Recomendaciones - Roadmap Futuro

Las siguientes recomendaciones corresponden a la evolución posterior del producto y no se presentan como funcionalidades completadas en AV1.

#### Corto Plazo
| # | Iniciativa | Justificación | Esfuerzo | Impacto |
| :---- | :---- | :---- | :----: | :----: |
| 1 | Completar la evidencia y distribución de la aplicación Android. | Permite cerrar la trazabilidad entre historias, aplicación móvil y despliegue. | M | Alto |
| 2 | Incorporar validación formal con empleados y RR. HH. | Permite medir confianza, facilidad de uso y utilidad del producto. | M | Alto |
| 3 | Mejorar la documentación de respuestas y seguridad de la API. | Facilita la revisión técnica y el consumo de los bounded contexts. | M | Medio |

#### Mediano Plazo (3-6 meses)
| # | Iniciativa | Justificación | Esfuerzo | Impacto |
| :---- | :---- | :---- | :----: | :----: |
| 1 | Añadir filtros y métricas comparables en el panel de RR. HH. | Ayuda a identificar tendencias por periodo y área. | M | Alto |
| 2 | Incorporar notificaciones para cambios en reportes y encuestas. | Reduce el tiempo de respuesta de los responsables. | M | Medio |
| 3 | Fortalecer el control de acceso, auditoría y gestión de sesiones. | Protege información sensible de bienestar laboral. | L | Alto |

#### Largo Plazo (6-12 meses)
| # | Iniciativa | Justificación | Esfuerzo | Impacto |
| :---- | :---- | :---- | :----: | :----: |
| 1 | Extender la solución a organizaciones de distintos países. | Permite adaptar la plataforma a nuevos contextos laborales. | L | Alto |
| 2 | Integrar herramientas corporativas de Recursos Humanos. | Evita duplicar información y mejora la continuidad operativa. | L | Alto |
| 3 | Consolidar un modelo comercial con suscripciones y facturación. | Convierte el modelo SaaS en una operación sostenible. | L | Alto |

---

### Deuda Técnica Identificada

| Área | Descripción | Riesgo | Plan de Mitigación |
| :---- | :---- | :---- | :---- |
| Aplicación móvil | El APK/AAB, el enlace de distribución y la evidencia visual ya están documentados. | Bajo | Mantener disponible el enlace compartido y actualizarlo si cambia la versión distribuida. |
| API y seguridad | Las operaciones protegidas requieren autenticación y la evidencia de Swagger debe mostrar flujos autenticados. | Alto | Documentar el esquema Bearer, usar un token de prueba seguro y registrar respuestas representativas. |
| Pagos | El alcance actual registra planes y comprobantes, pero no incluye una pasarela ni renovación automática. | Medio | Mantener la limitación explícita y evaluar una integración posterior. |
| Documentación | Los repositorios de productos tienen configuraciones y niveles de evidencia diferentes. | Medio | Unificar README, variables de entorno, comandos y versiones por repositorio. |

---

## Video App Validation

Para este corte AV1 se documentan los flujos y las interfaces disponibles, pero no se incorpora todavía un video de validación con usuarios. Esta evidencia se añadirá cuando se realicen las sesiones correspondientes.

---

## Video About-The-Team

El video About-The-Team no forma parte de los artefactos disponibles para este corte AV1. Cuando se produzca, deberá incluir la participación de los seis integrantes: Mauricio Luis Pajés León, Milenko Ruben Cayanchi Avila, Diego Andrés Ávalos Cordova, Jose Gustavo Asto Jacome, Diaz Martinez, Alexther Kamil y Arizabal Condori, Jean Niels.

### Pauta de Secuencias para una Entrega Posterior

| Sección | Contenido |
| :---- | :---- |
| Presentación del equipo | Nombre, código y rol de cada integrante. |
| Proceso de trabajo | Revisión de reuniones, planificación y coordinación del informe. |
| Testimonios | Actividades realizadas, aprendizaje y aporte al proyecto de cada integrante. |
| Cierre | Reflexión grupal sobre el resultado del AV1. |

---

> **Nota:** Este documento se mantiene enfocado en el alcance y la evidencia disponible del AV1.

\newpage
