# Capítulo VIII: Experiment-Driven Development

Este capítulo organiza el aprendizaje que el equipo debe obtener de SafeSpace y sus dos segmentos objetivo: empleados de una organización y profesionales de Recursos Humanos. El punto de partida son las hipótesis Lean UX, las funcionalidades y criterios de aceptación de los Capítulos I y III, y las interfaces descritas en los Capítulos IV y V.

El capítulo se presenta como planificación y diseño preliminar. No se han incorporado resultados de entrevistas de validación ni mediciones de adopción; por ello, las hipótesis, prioridades, criterios de éxito y propuestas To-Be se deben confirmar antes de tratarlos como decisiones aprobadas. Las pruebas de software del Capítulo VI verifican comportamiento técnico y no reemplazan experimentos con participantes ni evidencia de resultados de negocio.

## 8.1. Experiment Planning

### 8.1.1. As-Is Summary

La versión documentada de SafeSpace incluye funciones para que los empleados registren su estado de ánimo, respondan encuestas, participen en actividades, envíen reportes anónimos o identificados y accedan a orientación digital. El perfil de Recursos Humanos puede consultar resúmenes y gestionar encuestas, actividades y estados de reportes, sujeto a permisos. Estas capacidades se describen en los Capítulos III–V; su presencia en el producto no demuestra por sí sola que los usuarios las comprendan, confíen en ellas o las utilicen en un contexto organizacional real.

| Segmento | Trabajo que intenta realizar | Funciones del producto relacionadas | Incertidumbre a resolver |
| :--- | :--- | :--- | :--- |
| Empleados | Expresar una inquietud, participar y buscar orientación con confianza y poco esfuerzo. | Estado de ánimo, encuestas, actividades, reportes, orientación digital. | Comprensión y confianza en el anonimato; claridad del seguimiento; facilidad y barreras de uso. |
| Recursos Humanos | Interpretar señales de clima laboral y organizar el seguimiento de temas reportados. | Resumen administrativo, gestión de encuestas/actividades y estados de reportes. | Interpretación de métricas, utilidad para decidir, claridad de estados y ajuste al proceso de trabajo. |

No se dispone en este apartado de una línea base de uso real, tasas de respuesta organizacionales, tiempo de atención ni resultados de negocio. Estos datos no se infieren de capturas, pruebas automatizadas o cuentas de prueba.

### 8.1.2. Raw Material

#### Assumptions

Las siguientes suposiciones proceden del Lean UX del Capítulo I y deben tratarse como hipótesis por validar:

- Los empleados necesitan un canal claro y confiable para expresar inquietudes laborales.
- La percepción de privacidad y anonimato influye en la disposición a enviar un reporte.
- Algunos empleados valorarán disponer de orientación inicial y un flujo guiado.
- Recursos Humanos necesita información consolidada para identificar patrones y priorizar acciones.
- La centralización del registro y estado de los reportes puede reducir pasos manuales.
- Una experiencia fácil de usar puede favorecer la participación.

#### Knowledge gaps

- ¿Qué entienden los empleados por «anónimo» y qué información creen que se almacena o visualiza?
- ¿Qué confirmación y seguimiento esperan después de enviar una inquietud?
- ¿Qué indicador del resumen de ánimo puede interpretar Recursos Humanos y qué contexto necesita?
- ¿Qué pasos actuales del seguimiento son manuales y cuáles no pueden simplificarse con el flujo propuesto?
- ¿En qué dispositivos y momentos sería accesible SafeSpace para cada segmento?
- ¿Qué límites, lenguaje y vías de derivación deben acompañar la orientación digital para no crear expectativas inadecuadas?

#### Ideas

- Observar a empleados completando el envío de un reporte ficticio con la opción anónima y pedirles que expliquen qué ocurrirá con su identidad.
- Pedir a profesionales de Recursos Humanos que interpreten un resumen de prueba y expliquen qué decisión tomarían y qué información adicional requieren.
- Evaluar si mensajes de confirmación y definiciones de estados reducen dudas durante tareas representativas.
- Comparar observaciones de uso entre la interfaz web y la aplicación móvil, si ambas versiones y dispositivos de prueba están disponibles.

#### Claims por validar

| Claim preliminar | Segmento | Evidencia que lo apoyaría | Evidencia que lo debilitaría |
| :--- | :--- | :--- | :--- |
| Explicar con claridad la privacidad puede aumentar la confianza en el envío anónimo. | Empleados | La persona explica correctamente qué se muestra y califica la confianza con razones concretas. | Confunde anonimato con confidencialidad absoluta o no confía pese a leer el aviso. |
| Un resumen consolidado puede ayudar a Recursos Humanos a reconocer señales que requieren seguimiento. | Recursos Humanos | Interpreta correctamente los datos ficticios y describe un siguiente paso compatible con su contexto. | No entiende la tasa o distribución, o necesita información que la vista no proporciona. |
| Un flujo simple y guiado puede reducir fricción en tareas de bienestar. | Empleados | Completa tareas sin ayuda y explica los pasos con poca ambigüedad. | Requiere ayuda recurrente, abandona o percibe que el flujo solicita información innecesaria. |
| Centralizar estados puede facilitar la organización del seguimiento administrativo. | Recursos Humanos | Completa la tarea de revisión y cambio de estado y distingue los estados disponibles. | El estado no coincide con el proceso esperado o se necesitan pasos externos no soportados. |

Estas observaciones permitirían evaluar claridad y utilidad percibida en una sesión. No bastan para demostrar aumento de adopción, reducción del tiempo organizacional ni mejora del clima laboral.

### 8.1.3. Experiment-Ready Questions

1. ¿Puede un empleado completar un reporte ficticio y explicar correctamente qué significa la opción anónima en SafeSpace?
2. ¿Qué señales de la interfaz aumentan o reducen la confianza declarada del empleado al participar?
3. ¿Puede un profesional de Recursos Humanos interpretar el resumen de estado de ánimo sin confundir el número de respuestas con la población total?
4. ¿Qué información adicional necesita Recursos Humanos para decidir un siguiente paso a partir del resumen?
5. ¿Puede Recursos Humanos crear/publicar una encuesta de prueba y actualizar el estado de un reporte ficticio sin ayuda?
6. ¿Qué diferencias observables aparecen entre completar las tareas en web y en Android?

### 8.1.4. Question Backlog

La prioridad de esta tabla es un orden inicial propuesto según el riesgo de confianza, interpretación y operación. No es una priorización obtenida de participantes. Tras el análisis de las sesiones, el equipo debe volver a puntuar alcance, impacto, incertidumbre y esfuerzo, y registrar el backlog actualizado.

| Orden inicial | Pregunta | Segmento | Riesgo asociado | Evidencia esperada | Estado |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | ¿Se comprende qué datos se asocian a un reporte anónimo? | Empleados | Pérdida de confianza o expectativas incorrectas de privacidad. | Explicación en palabras propias, dudas observadas y valoración razonada. | Por validar |
| 2 | ¿Se interpretan correctamente la distribución y la participación del resumen? | Recursos Humanos | Decisiones basadas en una lectura incorrecta o incompleta. | Interpretación de datos sintéticos y datos adicionales solicitados. | Por validar |
| 3 | ¿Se completan sin ayuda las tareas principales de participación y reporte? | Empleados | Abandono por fricción o falta de claridad. | Éxito por tarea, necesidad de ayuda, errores y tiempo observado. | Por validar |
| 4 | ¿El flujo de seguimiento coincide con el trabajo esperado por Recursos Humanos? | Recursos Humanos | Duplicación de pasos o estados poco útiles. | Tarea completada, comentarios sobre estados y pasos externos. | Por validar |
| 5 | ¿Qué diferencias de comprensión y facilidad hay entre web y Android? | Ambos | Experiencia desigual según dispositivo. | Resultados segmentados por plataforma, cuando la muestra permita describirlos. | Por validar |

### 8.1.5. Experiment Cards

Las tarjetas siguientes describen experimentos candidatos de bajo riesgo con cuentas de prueba y datos sintéticos. Antes de reclutar, el equipo debe confirmar hipótesis, versión del producto, criterios de éxito, tamaño de muestra, fechas y responsables. Los campos entre corchetes quedan pendientes de esa decisión.

#### Tarjeta A — Comprensión del reporte anónimo

| Elemento | Diseño preliminar |
| :--- | :--- |
| Pregunta | ¿Puede un empleado completar el flujo y explicar correctamente el alcance del anonimato? |
| Hipótesis | Una explicación visible de privacidad, junto a la opción anónima, facilita una comprensión correcta y aumenta la confianza declarada. |
| Segmento | Empleados de una organización. |
| Método | Prueba moderada de tarea con escenario ficticio; entrevista breve posterior. No se solicita narrar experiencias laborales reales. |
| Medidas | Finalización sin ayuda; errores/retrocesos; tiempo; interpretación correcta de qué se muestra y qué se conserva; valoración de confianza de 1 a 5 y su explicación. |
| Condiciones | Entorno de prueba, cuenta sintética, reporte neutral; dispositivo/plataforma y versión registrados; guion y aviso de consentimiento iguales para cada sesión. |
| Criterio de decisión | Definir antes de las sesiones el mínimo aceptable de comprensión y finalización: [acordar]. Revisar cualquier interpretación incorrecta de privacidad como hallazgo prioritario. |
| Tamaño y fechas | [Definir con el equipo según disponibilidad y propósito formativo]. |

#### Tarjeta B — Interpretación del resumen de Recursos Humanos

| Elemento | Diseño preliminar |
| :--- | :--- |
| Pregunta | ¿Puede RR. HH. interpretar el resumen y distinguir lo que los datos permiten concluir de lo que no? |
| Hipótesis | Presentar periodo, cantidad de respuestas, población de referencia y distribución con etiquetas claras facilita interpretar los datos y decidir qué información falta. |
| Segmento | Profesionales de Recursos Humanos. |
| Método | Prueba moderada con datos sintéticos, tarea de interpretación y entrevista posterior. No se usan datos de una organización real. |
| Medidas | Respuestas correctas a preguntas preparadas; tiempo y ayudas; métricas o etiquetas malinterpretadas; valoración de utilidad de 1 a 5 y explicación. |
| Condiciones | Mismo conjunto de datos ficticios y mismas preguntas para cada participante; registrar versión y plataforma. |
| Criterio de decisión | Definir antes de las sesiones qué preguntas se consideran esenciales y cuántas deben interpretarse correctamente: [acordar]. Documentar conclusiones que no pueden extraerse de la vista actual. |
| Tamaño y fechas | [Definir con el equipo]. |

#### Tarjeta C — Flujo de participación y seguimiento

| Elemento | Diseño preliminar |
| :--- | :--- |
| Pregunta | ¿Pueden empleados y RR. HH. completar las tareas representativas de participación y seguimiento con el producto disponible? |
| Hipótesis | Los flujos actuales permiten completar tareas básicas sin asistencia frecuente y con comprensión suficiente de sus confirmaciones y estados. |
| Segmento | Empleados y profesionales de Recursos Humanos, analizados por separado. |
| Método | Prueba moderada de tareas: empleado responde una encuesta o participa en una actividad; RR. HH. crea/publica una encuesta de prueba o actualiza el estado de un reporte ficticio. |
| Medidas | Éxito por tarea, ayuda requerida, errores, retrocesos, tiempo, comprensión de confirmaciones/estados y facilidad percibida de 1 a 5. |
| Condiciones | Cuentas de prueba, tareas neutrales, datos sintéticos, sin acciones sobre producción ni información laboral real. |
| Criterio de decisión | Acordar antes de la prueba umbrales de finalización y facilidad para cada tarea: [definir]. Separar resultados por segmento y plataforma. |
| Tamaño y fechas | [Definir con el equipo]. |

## 8.2. Experiment Design

### 8.2.1. Hypotheses

Se retoman las cinco hipótesis Lean UX del Capítulo I; la columna de verificación las convierte en afirmaciones observables para esta ronda, sin cambiar su condición de hipótesis.

| Código de trabajo | Hipótesis Lean UX | Evidencia observable en el experimento |
| :--- | :--- | :--- |
| H1 | Un canal de reportes anónimos y con seguimiento aumentará la disposición de empleados a comunicar inquietudes. | Comprensión de anonimato, confianza declarada y finalización de un reporte ficticio. La disposición declarada no equivale a uso real. |
| H2 | Un dashboard consolidado ayudará a RR. HH. a identificar patrones y priorizar acciones. | Interpretación correcta de datos sintéticos, límites reconocidos y siguiente información/acción solicitada. |
| H3 | La asistencia digital y los flujos guiados reducirán la fricción para iniciar una solicitud de apoyo. | Finalización, ayudas, dudas y facilidad percibida en un ejemplo neutral. No se solicita información emocional real. |
| H4 | Centralizar reportes y estados mejorará la eficiencia del seguimiento de RR. HH. | Pasos observados y percepción de ajuste del flujo. La eficiencia real requiere comparar con una línea base del proceso, aún no disponible. |
| H5 | Una experiencia simple, anónima y orientada al usuario aumentará la participación. | Finalización y comprensión en tareas de prueba. La adopción organizacional requiere un piloto y métricas longitudinales posteriores. |

### 8.2.2. Domain Business Metrics

| Resultado de negocio que se desea observar | Métrica potencial | Unidad/interpretación | Disponibilidad actual |
| :--- | :--- | :--- | :--- |
| Participación de empleados | Proporción de empleados elegibles que completan una actividad en un periodo | Respuestas válidas / empleados elegibles; requiere definir población y ventana | No hay línea base organizacional documentada |
| Claridad y confianza en reportes | Comprensión de privacidad y confianza declarada | Respuestas correctas a sondeo de comprensión; escala 1–5 acompañada de explicación | Se medirá en las entrevistas propuestas |
| Interpretación de señales por RR. HH. | Exactitud en preguntas de lectura del resumen | Interpretaciones correctas / preguntas definidas antes de la sesión | Se medirá con datos sintéticos |
| Organización del seguimiento | Tiempo y pasos por tarea administrativa | Duración y pasos observados; comparación con proceso actual solo si se documenta la línea base | Línea base pendiente |
| Facilidad de los flujos | Finalización sin ayuda y errores | Tareas completadas sin asistencia / tareas intentadas; recuento por tarea | Se medirá en sesiones moderadas |

Estas métricas son candidatas para vincular resultados de producto con historias To-Be. No deben confundirse con resultados organizacionales (por ejemplo, reducción de problemas laborales), que requieren un piloto, contexto y periodo de observación apropiados.

### 8.2.3. Measures and Conditions

Para cada sesión se registrará el código anónimo, segmento, dispositivo, versión del producto, tarea, resultado (sin ayuda / con ayuda / no completada), tiempo aproximado, errores, retrocesos, valoración y comentario anonimizado. Los sondeos de 1 a 5 se acompañarán de una pregunta abierta; al analizar respuestas ordinales se mostrarán su distribución y mediana junto con los comentarios, evitando atribuir significado causal a cambios pequeños.

Las condiciones deben mantenerse comparables: mismos datos ficticios, instrucciones, permisos y criterio de finalización por tarea. Si se comparan web y Android, registrar la plataforma y evitar atribuir diferencias al dispositivo cuando también haya cambiado la tarea, el contenido o la versión. El moderador no completará la tarea por el participante; si necesita intervenir, anotará cuándo y por qué.

### 8.2.4. Scale Calculations and Decisions

Las métricas de tareas se calcularán con reglas fijadas antes de analizar los datos:

- **Finalización sin ayuda (%)** = tareas completadas sin ayuda / tareas intentadas × 100.
- **Tasa de ayuda (%)** = tareas en que el moderador intervino / tareas intentadas × 100.
- **Comprensión de anonimato (%)** = participantes que identifican correctamente los datos visibles y la relación con la cuenta / participantes que respondieron × 100.
- **Tiempo por tarea** = tiempo entre la instrucción y la finalización; reportar mediana y rango, además de las incidencias observadas.
- **Valoración de facilidad/confianza** = distribución de respuestas de 1 a 5, mediana y explicación textual anonimizada.

Si el objetivo fuera estimar una proporción poblacional, una referencia de tamaño muestral para población grande sería `n₀ = Z² p(1 − p) / e²`, con corrección por población finita `n = n₀ / (1 + (n₀ − 1) / N)`. En este proyecto no se calcula un valor todavía porque no se ha definido población elegible `N`, precisión `e`, nivel de confianza `Z` ni proporción base `p`. Esta fórmula no se debe usar para afirmar representatividad en una prueba cualitativa de usabilidad. El tamaño de las sesiones formativas y el alcance de sus conclusiones se acordarán con el equipo y se reportarán explícitamente.

### 8.2.5. Method Selection

Se propone una combinación de métodos cualitativos y cuantitativos ligeros:

| Método | Uso | Por qué corresponde | Límite |
| :--- | :--- | :--- | :--- |
| Entrevista semiestructurada con tareas | Comprender dudas, expectativas y lenguaje de cada segmento. | Explica por qué una pantalla o estado resulta claro, confuso o poco confiable. | No estima adopción poblacional ni prueba causalidad. |
| Observación de tareas | Registrar finalización, ayudas, errores y tiempo. | Mide el desempeño de tareas concretas en la versión evaluada. | El resultado depende del escenario y entorno de prueba. |
| Escala breve 1–5 | Recoger facilidad/confianza percibidas junto con explicación. | Permite comparar descripciones dentro de las sesiones sin reemplazar comentarios. | Es autorreporte ordinal y no una medida de conducta real. |
| Revisión heurística | Inspeccionar sistemáticamente visibilidad, lenguaje, control, errores y privacidad. | Identifica problemas de interfaz que pueden pasar inadvertidos en una tarea breve. | No sustituye la evaluación con usuarios. |

### 8.2.6. Analytics Goals, KPIs and Metrics

Los objetivos analíticos de esta ronda son: (1) detectar confusiones de privacidad en el flujo anónimo; (2) determinar si RR. HH. entiende el periodo y denominador de los indicadores; y (3) identificar tareas con ayuda, error o abandono. Los indicadores de sesión son exploratorios; no son KPI operativos ni compromisos de servicio.

| Objetivo analítico | Indicador | Desagregación | Decisión que informaría |
| :--- | :--- | :--- | :--- |
| Comprensión del anonimato | Comprensión correcta y dudas sobre datos asociados | Segmento empleado; versión de interfaz | Revisar texto y señales de privacidad antes de un piloto |
| Lectura del dashboard | Respuestas correctas y conceptos malinterpretados | Segmento RR. HH.; tarea/pantalla | Ajustar etiquetas, periodo o contexto mostrado |
| Facilidad del flujo | Finalización sin ayuda, ayudas y errores | Segmento, tarea y plataforma | Priorizar cambios de experiencia y volver a observarlos |
| Seguimiento administrativo | Pasos y duración observada, más comentarios sobre estados | Segmento RR. HH.; tarea | Validar con el proceso actual antes de afirmar ahorro de tiempo |

No se establece un objetivo numérico de mejora hasta revisar una primera ronda y acordar criterios de decisión con el equipo. Después de la ronda, se deberá actualizar la Question Backlog y justificar cambios de prioridad con evidencia registrada.

### 8.2.7. Web and Mobile Tracking Plan

Para las pruebas moderadas se propone una hoja de observación local y un código aleatorio de sesión. Si el equipo decide añadir instrumentación de producto, deberá aprobar primero eventos mínimos, consentimiento, retención y acceso. No se registrarán nombres, correos, texto libre de reportes, estados de ánimo individuales, mensajes de orientación, tokens ni identificadores que permitan reconstruir la identidad.

| Evento propuesto | Propiedades mínimas | Plataformas | Propósito |
| :--- | :--- | :--- | :--- |
| `validation_task_started` | código de sesión efímero, tarea, plataforma, versión | Web/Android | Marcar el inicio de una tarea de prueba |
| `validation_task_completed` | código efímero, tarea, resultado sin/con ayuda/no completada, duración por intervalo | Web/Android | Calcular desempeño de la sesión |
| `validation_help_requested` | código efímero, tarea, tipo general de duda (sin texto sensible) | Web/Android | Identificar puntos de fricción |
| `validation_rating_submitted` | código efímero, tarea, escala y valor | Web/Android | Resumir facilidad/confianza declaradas |

Estos nombres y eventos son una propuesta, no telemetría que se afirme instalada. La alternativa de menor intervención es registrar lo mismo en la ficha de observación sin instrumentar la aplicación. Cualquier captura o registro de prueba deberá utilizar datos sintéticos y permanecer con acceso limitado.

## 8.3. Experimentation

La experimentación de esta entrega comienza con el diseño de historias y backlog candidatos. La ejecución con participantes, el análisis de resultados, la re-priorización final del Question Backlog, los To-Be Sprint Backlogs, el pipeline experimental y la sesión Shareback deben completarse y documentarse cuando se realicen. No se reporta aquí una ejecución que todavía no consta en el repositorio.

### 8.3.1. To-Be User Stories

Las siguientes historias son propuestas para validar con evidencia; no sustituyen ni modifican automáticamente las 22 historias del Capítulo III.

#### Claridad de privacidad en el reporte

**Como empleado que desea enviar un reporte, quiero ver antes de enviarlo una explicación breve de qué significa elegir anonimato y qué información verá Recursos Humanos, para decidir con una expectativa clara.**

**Criterios candidatos:** la explicación aparece antes de confirmar; diferencia el reporte anónimo del identificado sin prometer anonimato absoluto no verificado; el usuario puede revisar su elección; la decisión se valida primero en las pruebas de comprensión de H1.

#### Interpretación de indicadores para Recursos Humanos

**Como profesional de Recursos Humanos, quiero ver el periodo, el número de respuestas y la población de referencia junto con cada indicador, para interpretar el resumen sin confundir participación con el total de empleados.**

**Criterios candidatos:** el periodo y denominador se identifican en la vista; los datos vacíos o insuficientes se explican; la comprensión se evalúa con preguntas de interpretación antes de considerar la historia aceptada.

#### Confirmación de participación y estado

**Como empleado, quiero recibir una confirmación comprensible después de completar una tarea de participación, para saber si se registró correctamente.**

**Criterios candidatos:** el mensaje confirma únicamente la acción que realmente se guardó; no expone datos de otras personas; los estados observados se contrastan con las tareas de H5.

#### Seguimiento operativo para Recursos Humanos

**Como profesional de Recursos Humanos, quiero distinguir claramente los estados y filtros disponibles al revisar reportes, para organizar el seguimiento sin confundir casos nuevos con casos ya atendidos.**

**Criterios candidatos:** las etiquetas coinciden con el proceso que el equipo participante describa; los permisos se mantienen; no se agregan notas sensibles sin una decisión de privacidad y seguridad.

Todas estas historias están en estado **propuesta / por validar**. Sus criterios deberán refinarse con participantes y revisión del equipo, antes de incorporarlas al backlog comprometido.

### 8.3.2. To-Be Product Backlog

Backlog candidato derivado de las preguntas y tarjetas de experimento. El orden es provisional y deberá re-priorizarse después del análisis; no se declaran estimaciones, responsables, aceptación final ni estado de implementación.

| Orden inicial | Título de la historia candidata | Hipótesis/pregunta | Evidencia para decidir | Estado |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Claridad de privacidad en el reporte | H1: comprensión del anonimato | Resultado de tarea, sondeo de comprensión y dudas observadas | Propuesta / por validar |
| 2 | Interpretación de indicadores para Recursos Humanos | H2: utilidad del resumen | Respuestas a preguntas de lectura, límites identificados y datos solicitados | Propuesta / por validar |
| 3 | Confirmación de participación y estado | H5: claridad y facilidad de uso | Finalización sin ayuda, errores y comprensión de confirmaciones | Propuesta / por validar |
| 4 | Seguimiento operativo para Recursos Humanos | H4: organización del seguimiento | Tarea de cambio de estado y comparación documentada con el proceso actual | Propuesta / por validar |
| 5 | Ajustes al flujo de orientación digital | H3: fricción al iniciar apoyo | Observación con ejemplo neutral y revisión de límites de privacidad/seguridad | Pendiente de definir tras validar las primeras historias |

**Trabajo requerido para cerrar el objetivo de experimentación del Hito 3:** completar el plan y diseño con decisiones del equipo; ejecutar las sesiones y adjuntar fichas anonimizadas; comparar observaciones con los criterios acordados; analizar e interpretar resultados frente a cada hipótesis; re-puntuar la Question Backlog; decidir y justificar las historias To-Be; elaborar los To-Be Sprint Backlogs y el pipeline correspondiente; y registrar los artefactos de Shareback/Continuous Learning. Cada resultado se añadirá solo después de existir evidencia verificable.

\newpage
