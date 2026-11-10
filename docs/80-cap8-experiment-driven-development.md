# Capítulo VIII: Experiment-Driven Development

Este capítulo organiza el aprendizaje que el equipo debe obtener de SafeSpace y sus dos segmentos objetivo: empleados de una organización y profesionales de Recursos Humanos. El punto de partida son las hipótesis Lean UX, las funcionalidades y criterios de aceptación de los Capítulos I y III, y las interfaces descritas en los Capítulos IV y V.

La ronda de validación incluyó a tres empleados (06/11/2026) y tres profesionales de Recursos Humanos (05/11/2026). Las transcripciones recibidas y las capturas muestran entrevistas remotas con demostración de SafeSpace; se trata de las mismas seis personas descritas en el resumen de tareas, no de una segunda muestra. El equipo había comunicado que completaron los flujos sin ayuda y que todos calificaron la facilidad con 5/5, pero las transcripciones contienen indicaciones del entrevistador y puntuaciones individuales distintas o no desglosadas. Por ello, el Capítulo VI conserva por separado el resumen del equipo y la evidencia trazable por entrevista. Se utilizó la última versión disponible; no se mostraron otros prototipos ni se compararon variantes. La evidencia no permite confirmar hipótesis, medir adopción ni atribuir efectos de negocio. Las propuestas y umbrales de comparación de las secciones siguientes corresponden a trabajo futuro. Las pruebas de software del Capítulo VI verifican comportamiento técnico y no reemplazan la validación con participantes ni evidencia de resultados de negocio.

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

Las preguntas se clasifican en dos tipos: **impulsadas por creencias** (belief-led), que ponen a prueba una premisa o hipótesis ya formulada, y **exploratorias**, que recopilan conocimiento donde el equipo no tiene una creencia previa (corresponden a las brechas de conocimiento de 8.1.2).

| # | Pregunta | Tipo | Origen |
| :--- | :--- | :--- | :--- |
| 1 | ¿Puede un empleado completar un reporte ficticio y explicar correctamente qué significa la opción anónima en SafeSpace? | Impulsada por creencias | H1 |
| 2 | ¿Qué señales de la interfaz aumentan o reducen la confianza declarada del empleado al participar? | Exploratoria | Brecha de conocimiento sobre anonimato y confianza |
| 3 | ¿Puede un profesional de Recursos Humanos interpretar el resumen de estado de ánimo sin confundir el número de respuestas con la población total? | Impulsada por creencias | H2 |
| 4 | ¿Qué información adicional necesita Recursos Humanos para decidir un siguiente paso a partir del resumen? | Exploratoria | Brecha de conocimiento sobre indicadores del resumen |
| 5 | ¿Puede Recursos Humanos crear/publicar una encuesta de prueba y actualizar el estado de un reporte ficticio sin ayuda? | Impulsada por creencias | H4 |
| 6 | ¿Qué diferencias observables aparecen entre completar las tareas en web y en Android? | Exploratoria | Brecha de conocimiento sobre dispositivos y momentos de uso |
| 7 | ¿Un punto de entrada guiado ayuda a un empleado a iniciar una conversación de orientación y a comprender el alcance de esa ayuda? | Impulsada por creencias | H3 |

### 8.1.4. Question Backlog

El Question Backlog combina las preguntas del plan experimental con los hallazgos agregados de las seis sesiones y del Shareback del 06/11/2026. Las puntuaciones son una **propuesta de priorización del equipo**, no respuestas atribuidas a cada participante. Escala de 1 a 5: **Confianza** mide cuánta evidencia respalda la hipótesis (1 = muy poca, 5 = sólida); **Riesgo**, **Impacto** e **Interés** usan 1 = bajo y 5 = alto. El puntaje de prioridad es `(6 − Confianza) + Riesgo + Impacto + Interés`, con rango de 4 a 20; un valor mayor indica mayor prioridad para aprender. En caso de empate se prioriza Riesgo y luego Impacto. Los códigos QB-01 a QB-08 identifican cada pregunta y siguen el orden de prioridad.

El backlog es *broad*: contiene preguntas de los dos segmentos y de operación del producto. Las transcripciones aportan indicios sobre comprensión de privacidad y contexto de los indicadores, pero no una medición comparable entre las seis personas. Las valoraciones y la finalización sin ayuda no se generalizan a dimensiones que no se midieron, a comparación entre plataformas ni a demanda de publicación móvil.

| ID | Pregunta del backlog | Segmento | Por qué / evidencia relacionada | Confianza | Riesgo | Impacto | Interés | Prioridad | Evidencia para responder |
| :--- | :--- | :--- | :--- | ---: | ---: | ---: | ---: | ---: | :--- |
| QB-01 | ¿Qué entienden los empleados por la opción anónima y qué datos creen que verá RR. HH.? | Empleados | E-01 y E-03 pidieron aclarar qué datos quedan asociados a la cuenta y quién puede acceder; E-02 expresó temor a filtraciones. La revisión técnica (SEC-01, 6.2.1.2) encontró además que el documento de Firestore conserva la referencia al usuario en los reportes anónimos; esto se aborda en TB-06. La comprensión no se midió con una rúbrica común. | 2 | 5 | 5 | 4 | 18 | Explicación en palabras propias con un caso ficticio y dudas registradas. |
| QB-02 | ¿Qué parte del tiempo de despliegue corresponde al plan gratuito y cómo afecta la disponibilidad para los usuarios? | Empleados / RR. HH. / equipo técnico | El equipo atribuyó la lentitud de despliegues a servicios gratuitos; falta medir cada etapa y componente por separado. | 2 | 4 | 5 | 4 | 17 | Duración de despliegue, arranque en frío y respuesta inicial, separados por proveedor y servicio. |
| QB-03 | ¿La publicación desde Play Store responde a una necesidad recurrente y facilitaría instalar y actualizar SafeSpace en Android? | Empleados / equipo | En el Shareback se informó una solicitud de publicación en Play Store; no se registró cuántas personas la formularon. | 2 | 3 | 5 | 5 | 17 | Prueba de interés, revisión del recorrido de instalación y validación de requisitos de publicación. |
| QB-04 | ¿Puede RR. HH. interpretar correctamente el periodo, la tasa de respuesta y la distribución del estado de ánimo? | Recursos Humanos | RH-02 identificó que faltaban el periodo y el total de personas para interpretar el resumen; calificó su utilidad final con 3/5 por falta de contexto. | 3 | 4 | 4 | 4 | 15 | Tarea con datos sintéticos, respuestas correctas, errores de lectura y contexto solicitado. |
| QB-05 | ¿Los empleados encuentran y completan el reporte con la información que necesitan? | Empleados | E-03 pidió aclarar «Puesto de trabajo», el anonimato y el seguimiento; E-01 preguntó qué datos quedan vinculados a su cuenta. Las demostraciones no permiten medir autonomía por persona. | 3 | 3 | 4 | 4 | 14 | Observación por tarea de inicio, envío y confirmación; dudas y retrocesos. |
| QB-06 | ¿La interfaz móvil permite completar los mismos flujos con claridad que la web? | Empleados / RR. HH. | RR. HH. probó en móvil (2) y PC (1); los empleados probaron en PC. La muestra no permite comparación equivalente. | 2 | 3 | 4 | 3 | 14 | Mismas tareas en cada plataforma, observadas por separado con participantes de ambos segmentos. |
| QB-07 | ¿Los empleados comprenden el alcance del chat de orientación y cuándo usar otro canal de ayuda? | Empleados | E-03 lo consideró útil para ordenar ideas; E-01 pidió garantías de privacidad. No se comprobó comprensión de límites o rutas de derivación. | 2 | 3 | 4 | 3 | 14 | Explicación del alcance en palabras propias y elección de una vía de apoyo en escenarios ficticios. |
| QB-08 | ¿La administración de encuestas y actividades semanales coincide con el flujo que RR. HH. necesita? | Recursos Humanos | RH-02 pudo crear y publicar, aunque confundió guardar con publicar hasta recibir una indicación adicional; las entrevistas también describen diferencias entre prácticas actuales y necesidades de seguimiento. | 3 | 2 | 3 | 3 | 11 | Crear y publicar un caso de prueba, describir pasos actuales y señalar datos requeridos. |

### 8.1.5. Experiment Cards

Las tarjetas siguientes describen comparaciones candidatas de bajo riesgo con cuentas de prueba y datos sintéticos; no son las sesiones ya realizadas. En las sesiones del 5 y 6 de noviembre se probó la aplicación disponible y no se reportó una comparación de condiciones. Antes de ejecutar estas propuestas, el equipo debe confirmar hipótesis, versión del producto, criterios de éxito, tamaño de muestra, fechas y responsables. Los campos entre corchetes presentan parámetros que se definen en la planificación de cada comparación.

Cada tarjeta reúne en su frente la pregunta, el por qué, la hipótesis y el qué (la *Simplest Useful Thing*, la cosa más simple y útil para obtener la respuesta); en su reverso, las medidas, las condiciones y la escala. Las medidas solo pueden referirse a las métricas definidas en 8.2.2.

#### Tarjeta A — Comprensión del reporte anónimo

| Elemento | Diseño preliminar |
| :--- | :--- |
| Pregunta | ¿Puede un empleado completar el flujo y explicar correctamente el alcance del anonimato? |
| Por qué | Pregunta 1 del Question Backlog: riesgo de pérdida de confianza o de expectativas incorrectas de privacidad. |
| Hipótesis | Una explicación visible de privacidad, junto a la opción anónima, facilita una comprensión correcta y aumenta la confianza declarada. |
| Qué (*Simplest Useful Thing*) | Comparar el flujo actual con un prototipo del mismo formulario que añade una explicación de privacidad verificada, sin cambiar backend ni almacenar datos nuevos. |
| Segmento | Empleados de una organización. |
| Método | Comparación formativa dentro de la sesión entre el flujo actual y un prototipo de texto; alternar el orden y usar dos escenarios ficticios equivalentes. Entrevista breve posterior; no se solicitan experiencias laborales reales. |
| Medidas | Finalización sin ayuda; errores/retrocesos; tiempo; interpretación correcta de qué se muestra y qué se conserva; valoración de confianza de 1 a 5 y su explicación. Métricas de 8.2.2: M2 y M5. |
| Condiciones | Control: formulario actual. Experimental: prototipo con el texto verificado. Cuenta sintética, dispositivo y guion iguales; orden alternado. No ejecutar el envío contra producción. |
| Criterio de decisión | Para una futura comparación: umbral formativo propuesto de al menos 4 de 5 participantes que completen sin ayuda y describan correctamente qué implica la opción anónima. Cualquier interpretación crítica incorrecta requiere revisar el texto. No es un resultado observado ni una prueba de significancia. |
| Escala (tamaño y fechas) | Cinco empleados como objetivo de una futura comparación, sujeto a disponibilidad y confirmación del equipo. Registrar fecha, versión, plataforma y orden de condición. Sin inferencia estadística poblacional. |

#### Tarjeta B — Interpretación del resumen de Recursos Humanos

| Elemento | Diseño preliminar |
| :--- | :--- |
| Pregunta | ¿Puede RR. HH. interpretar el resumen y distinguir lo que los datos permiten concluir de lo que no? |
| Por qué | Pregunta 4 del Question Backlog: riesgo de tomar decisiones a partir de una lectura incorrecta o incompleta del resumen. |
| Hipótesis | Presentar periodo, cantidad de respuestas, población de referencia y distribución con etiquetas claras facilita interpretar los datos y decidir qué información falta. |
| Qué (*Simplest Useful Thing*) | Comparar la vista actual con un prototipo que añade contexto a los indicadores, usando datos sintéticos y sin desarrollo de backend. |
| Segmento | Profesionales de Recursos Humanos. |
| Método | Comparación formativa dentro de la sesión entre la vista actual y un prototipo; alternar el orden y usar dos conjuntos equivalentes de datos sintéticos y preguntas. Entrevista posterior; no se usan datos de una organización real. |
| Medidas | Respuestas correctas a preguntas preparadas; tiempo y ayudas; métricas o etiquetas malinterpretadas; valoración de utilidad de 1 a 5 y explicación. Métricas de 8.2.2: M3 y M5. |
| Condiciones | Control: resumen actual. Experimental: prototipo con periodo, cantidad de respuestas, población de referencia y definición de la tasa. Mantener dificultad equivalente de datos y preguntas, y alternar el orden. |
| Criterio de decisión | Para una futura comparación: umbral formativo propuesto de al menos 4 de 5 participantes que respondan correctamente las preguntas esenciales definidas antes de la sesión. Registrar toda interpretación errónea del denominador o del periodo para corregir etiquetas. No es un resultado observado ni una prueba de significancia. |
| Escala (tamaño y fechas) | Cinco profesionales de RR. HH. como objetivo de una futura comparación, sujeto a disponibilidad y confirmación del equipo. Registrar fecha, versión, plataforma y orden de condición. Sin inferencia estadística poblacional. |

#### Tarjeta C — Flujo de participación y seguimiento

| Elemento | Diseño preliminar |
| :--- | :--- |
| Pregunta | ¿Pueden empleados y RR. HH. completar las tareas representativas de participación y seguimiento con el producto disponible? |
| Por qué | Preguntas 5 y 8 del Question Backlog: riesgo de fricción en reportes y desajuste entre la administración de encuestas y actividades y el trabajo de Recursos Humanos. |
| Hipótesis | Los flujos actuales permiten completar tareas básicas sin asistencia frecuente y con comprensión suficiente de sus confirmaciones y estados. |
| Qué (*Simplest Useful Thing*) | Tareas representativas sobre los flujos existentes con cuentas y datos sintéticos, sin desarrollo adicional. |
| Segmento | Empleados y profesionales de Recursos Humanos, analizados por separado. |
| Método | Pruebas formativas: el empleado responde una encuesta o participa en una actividad; RR. HH. reconstruye con un caso ficticio los pasos de su proceso habitual y luego realiza una tarea equivalente en SafeSpace. No se abre ni registra información interna de la organización. |
| Medidas | Éxito por tarea, ayuda requerida, errores, retrocesos, tiempo, comprensión de confirmaciones/estados y facilidad percibida de 1 a 5. Métricas de 8.2.2: M5, y M4 en las tareas de Recursos Humanos. La comprensión de confirmaciones y estados se registra como observación cualitativa, porque no tiene una métrica definida en 8.2.2. |
| Condiciones | Empleados: observar el flujo actual, sin comparación causal. RR. HH.: contrastar descriptivamente el proceso habitual reconstruido con la tarea equivalente en el entorno de prueba. Usar cuentas de prueba y datos sintéticos; no realizar acciones en producción. |
| Criterio de decisión | Para futuras sesiones: umbral formativo propuesto de al menos 4 de 5 participantes por segmento que completen sus tareas sin ayuda. En RR. HH., reportar diferencias de pasos/tiempo solo como observación de sesión, no como ahorro real demostrado. No se aplica retrospectivamente a la muestra ya realizada. |
| Escala (tamaño y fechas) | Las sesiones iniciales ya realizadas incluyeron 3 empleados y 3 profesionales de RR. HH. Para una futura comparación se propone reclutar cinco por segmento, sujeto a disponibilidad y confirmación. Resultados descriptivos, sin inferencia estadística poblacional. |

#### Tarjeta D — Inicio guiado de orientación digital (H3)

| Elemento | Diseño preliminar |
| :--- | :--- |
| Pregunta | ¿Un punto de entrada guiado ayuda a un empleado a iniciar una conversación y comprender el alcance de la orientación digital? |
| Por qué | Pregunta 7 del Question Backlog: riesgo de abandono al iniciar o de esperar atención profesional de una herramienta de orientación general. |
| Hipótesis | Una explicación breve del alcance, acompañada de opciones neutrales para comenzar, facilita iniciar una conversación sin generar expectativas de diagnóstico o atención profesional. |
| Qué (*Simplest Useful Thing*) | Un prototipo navegable de una pantalla previa al chat con el alcance del asistente y tres ejemplos neutrales de inicio. No requiere cambiar el modelo, el backend ni guardar datos nuevos. |
| Segmento | Empleados de una organización. |
| Método | Prueba moderada comparativa, dentro de la misma sesión: flujo actual de chat y prototipo guiado. Se alternará el orden entre participantes. Se usará la misma intención de consulta neutral y una conversación de prueba nueva por condición. No se evaluará la calidad de respuestas generadas. |
| Medidas | Métrica M5: inicio de la conversación sin ayuda, solicitud de ayuda, errores/retrocesos, tiempo y facilidad de 1 a 5. Como observación cualitativa separada, pedir que expliquen qué tipo de ayuda ofrece el asistente y qué no ofrece. No se solicitará información emocional, laboral sensible ni experiencias personales. |
| Condiciones | Control: pantalla de chat actual. Experimental: prototipo con una explicación de alcance revisada contra la política publicada y sugerencias neutrales (por ejemplo, organizar pausas o preparar una conversación laboral general). Igual dispositivo, tarea, cuenta de prueba e instrucciones; orden alternado. |
| Criterio de decisión | Para una futura comparación: umbral formativo propuesto de al menos 4 de 5 participantes que inicien sin ayuda en la condición guiada y describan correctamente el alcance general. Cualquier expectativa de diagnóstico o sustitución de atención profesional obliga a revisar el texto antes de continuar. No es un resultado observado ni una prueba de significancia. |
| Escala (tamaño y fechas) | Las sesiones iniciales incluyeron 3 empleados, quienes probaron el chat actual sin una variante guiada. Para la comparación propuesta se plantea reclutar cinco empleados, sujeto a disponibilidad y confirmación del equipo. Registrar fecha, plataforma y orden de condición. Sin inferencia estadística poblacional. |

## 8.2. Experiment Design

### 8.2.1. Hypotheses

Se retoman las cinco hipótesis Lean UX del Capítulo I; la columna de verificación las convierte en afirmaciones observables para esta ronda, sin cambiar su condición de hipótesis. Cada hipótesis de trabajo se empareja con una hipótesis nula (H0), que afirma que no ocurrirá nada como resultado del cambio o que cualquier diferencia se debe al azar. Las hipótesis se ponen a prueba frente a su H0; no se pretende demostrarlas como «verdaderas».

La primera ronda descrita en este capítulo es formativa y usa una muestra de conveniencia. Sus resultados se resumirán de forma descriptiva y cualitativa; no permitirán rechazar H0, estimar adopción poblacional ni atribuir causalidad. Las hipótesis nulas y la fórmula de potencia se conservan como marco para un piloto cuantitativo posterior, si se consiguen población, línea base y muestra suficientes.

| Código de trabajo | Hipótesis Lean UX | Hipótesis nula (H0) | Evidencia observable en el experimento |
| :--- | :--- | :--- | :--- |
| H1 | Un canal de reportes anónimos y con seguimiento aumentará la disposición de empleados a comunicar inquietudes. | Un canal de reportes anónimos y con seguimiento no modifica la disposición de empleados a comunicar inquietudes; cualquier diferencia observada se debe al azar. | Comprensión de anonimato, confianza declarada y finalización de un reporte ficticio. La disposición declarada no equivale a uso real. |
| H2 | Un dashboard consolidado ayudará a RR. HH. a identificar patrones y priorizar acciones. | Un dashboard consolidado no ayuda a RR. HH. a identificar patrones ni a priorizar acciones; cualquier diferencia observada se debe al azar. | Interpretación correcta de datos sintéticos, límites reconocidos y siguiente información/acción solicitada. |
| H3 | La asistencia digital y los flujos guiados reducirán la fricción para iniciar una solicitud de apoyo. | La asistencia digital y los flujos guiados no reducen la fricción para iniciar una solicitud de apoyo; cualquier diferencia observada se debe al azar. | Finalización, ayudas, dudas y facilidad percibida en un ejemplo neutral. No se solicita información emocional real. |
| H4 | Centralizar reportes y estados mejorará la eficiencia del seguimiento de RR. HH. | Centralizar reportes y estados no mejora la eficiencia del seguimiento de RR. HH.; cualquier diferencia observada se debe al azar. | Pasos observados y percepción de ajuste del flujo. La eficiencia real requiere comparar con una línea base del proceso, aún no disponible. |
| H5 | Una experiencia simple, anónima y orientada al usuario aumentará la participación. | Una experiencia simple, anónima y orientada al usuario no aumenta la participación; cualquier diferencia observada se debe al azar. | Finalización y comprensión en tareas de prueba. La adopción organizacional requiere un piloto y métricas longitudinales posteriores. |

### 8.2.2. Domain Business Metrics

Cada métrica se describe con su fórmula de cálculo, su técnica de recolección y su meta deseada. Las Experiment Cards (8.1.5) solo se refieren a las métricas definidas en esta sección, mediante su código. Las fórmulas de tareas coinciden con las reglas de cálculo de 8.2.5.

| Código | Resultado de negocio que se desea observar | Métrica | Fórmula / unidad | Técnica de recolección | Meta deseada | Disponibilidad actual |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| M1 | Participación de empleados | Proporción de empleados elegibles que completan una actividad en un periodo | Respuestas válidas / empleados elegibles; requiere definir población y ventana | [Definir; requiere un piloto en una organización] | [Definir después de establecer línea base y periodo del piloto] | No hay línea base organizacional documentada |
| M2 | Claridad y confianza en reportes | Comprensión de privacidad y confianza declarada | Comprensión de anonimato (%) = participantes que identifican correctamente los datos visibles y la relación con la cuenta / participantes que respondieron × 100; confianza: distribución de la escala 1–5, mediana y explicación | Entrevista con tarea y sondeo de comprensión; escala 1–5 con explicación (6.3.1) | Para futuras sesiones: umbral formativo propuesto de 4 de 5; la confianza se reporta descriptivamente, sin meta de aumento | E-01 y E-03 preguntaron qué datos de cuenta se conservan y quién puede acceder; E-02 expresó preocupación por filtraciones. E-03 indicó privacidad 4/5; E-02 respondió 5 a una pregunta conjunta que no separa facilidad y privacidad. No se usó una rúbrica común de comprensión. |
| M3 | Interpretación de señales por RR. HH. | Exactitud en preguntas de lectura del resumen | Interpretaciones correctas / preguntas definidas antes de la sesión; utilidad percibida: distribución de la escala 1–5, mediana y explicación | Tarea de interpretación sobre datos sintéticos con preguntas preparadas | Para futuras sesiones: umbral formativo propuesto de 4 de 5; utilidad se reporta descriptivamente | RH-02 indicó que necesitaba el periodo y el total de personas para interpretar el resumen; su valoración final de utilidad fue 3/5. No se definieron preguntas de comprensión ni rúbrica para calcular exactitud. |
| M4 | Organización del seguimiento | Tiempo y pasos por tarea administrativa | Duración (mediana y rango) y número de pasos observados; comparación con el proceso actual solo si se documenta la línea base | Observación de la tarea con cronometraje y registro de pasos | Sin meta de ahorro en esta ronda; documentar ambos flujos y no afirmar eficiencia sin línea base verificable | No se registró una línea base del proceso actual |
| M5 | Facilidad de los flujos | Finalización sin ayuda, tasa de ayuda, errores y tiempo por tarea | Finalización sin ayuda (%) = tareas completadas sin ayuda / tareas intentadas × 100; tasa de ayuda (%); recuento de errores por tarea; tiempo por tarea (mediana y rango) | Observación de tareas en sesiones moderadas | Para futuras sesiones: umbral formativo propuesto de 4 de 5 por segmento; escalas y tiempos se describen, sin afirmar causalidad | El resumen previo del equipo reportó finalización sin ayuda, 5/5 y sesiones de 10–15 min; las transcripciones incluyen demostraciones e instrucciones, y no permiten calcular tasas individuales de ayuda, errores ni tiempo por tarea. Las puntuaciones explícitas se detallan en 6.3.2. |

Estas métricas son candidatas para vincular resultados de producto con historias To-Be. El umbral de 4 de 5 es una propuesta para futuras sesiones, no se aplicó retrospectivamente a las seis personas ya participantes ni constituye una meta de negocio. La participación organizacional (M1) y cualquier meta de eficiencia requieren un piloto, contexto y periodo de observación apropiados.

### 8.2.3. Measures

Para cada sesión se registrará el código anónimo, segmento, dispositivo, versión del producto, tarea, resultado (sin ayuda / con ayuda / no completada), tiempo aproximado, errores, retrocesos, valoración y comentario anonimizado. Los sondeos de 1 a 5 se acompañarán de una pregunta abierta; al analizar respuestas ordinales se mostrarán su distribución y mediana junto con los comentarios, evitando atribuir significado causal a cambios pequeños. Solo se registran las medidas necesarias para responder cada pregunta, durante el tiempo estrictamente necesario, y todas se vinculan con las métricas de 8.2.2.

### 8.2.4. Conditions

No se reportó que las sesiones realizadas compararan intervenciones: se probó la aplicación disponible con tres participantes por segmento. Por ello, los datos disponibles no responden por sí solos las preguntas que requieren comprobar comprensión de privacidad, exactitud de interpretación o diferencias entre condiciones. La tabla conserva comparaciones futuras para las preguntas impulsadas por creencias; cualquier diferencia de una futura ronda formativa orientará cambios, pero no se presentará como efecto estadísticamente probado.

| Pregunta / hipótesis | Condición de control | Condición experimental | Comparación y límites |
| :--- | :--- | :--- | :--- |
| 1 / H1 — Reporte anónimo | Flujo actual de reporte, con la opción de anonimato tal como aparece en la versión evaluada. | Prototipo del mismo flujo con explicación breve de privacidad, cuya redacción debe verificarse previamente contra el comportamiento real del backend y la política publicada. | Misma tarea ficticia y datos. Medir comprensión, inicio/finalización y confianza declarada; no inferir disposición real a reportar en una organización. |
| 3 / H2 — Resumen de RR. HH. | Vista actual del resumen con datos sintéticos. | Prototipo de la misma vista con periodo, número de respuestas, población de referencia y definición de la tasa claramente identificados. | Mantener idénticos datos y preguntas de interpretación. Medir comprensión de los indicadores; no inferir mejores decisiones organizacionales. |
| 5 / H4 — Seguimiento de reportes | Reconstrucción del proceso habitual de la persona participante con un caso ficticio, registrando solo pasos que pueda describir sin revelar información interna. | La misma tarea equivalente en el entorno SafeSpace de prueba, con datos ficticios y permisos de RR. HH. | Comparación descriptiva de pasos, dudas y tiempo. Si el flujo habitual solo se recuerda y no se observa, no afirmar ahorro real de tiempo ni mejora causal de eficiencia. |
| 7 / H3 — Inicio de orientación digital | Pantalla actual de entrada al chat. | Prototipo previo al chat con explicación de alcance y opciones neutrales para iniciar. | Misma intención de consulta neutral; alternar el orden y usar una conversación nueva por condición. Medir inicio y facilidad, no calidad clínica ni eficacia del asistente. |

En todas las condiciones se mantendrán iguales el segmento, el dispositivo dentro de cada comparación, la tarea, los permisos, el conjunto de datos sintéticos y la instrucción del moderador. Antes de probar el texto de privacidad o el de orientación, verificar que corresponda a las políticas y al comportamiento implementado. Las tareas no se ejecutarán en producción. El moderador no completará la tarea; toda intervención quedará registrada como ayuda.

### 8.2.5. Scale Calculations and Decisions

Las métricas de tareas se calcularán con reglas fijadas antes de analizar los datos:

- **Finalización sin ayuda (%)** = tareas completadas sin ayuda / tareas intentadas × 100.
- **Tasa de ayuda (%)** = tareas en que el moderador intervino / tareas intentadas × 100.
- **Comprensión de anonimato (%)** = participantes que identifican correctamente los datos visibles y la relación con la cuenta / participantes que respondieron × 100.
- **Tiempo por tarea** = tiempo entre la instrucción y la finalización; reportar mediana y rango, además de las incidencias observadas.
- **Valoración de facilidad/confianza** = distribución de respuestas de 1 a 5, mediana y explicación textual anonimizada.

La ronda formativa incluyó **tres empleados y tres profesionales de RR. HH.**, reclutados por conveniencia. El resumen previo del equipo reportó flujos completados sin ayuda, ausencia de errores y sesiones de 10–15 minutos, sin detalle por tarea. Las transcripciones muestran demostraciones e instrucciones de navegación, por lo que no permiten verificar esa autonomía ni calcular tasas de ayuda. La transcripción de RH-02 registra facilidad 4/5 y utilidad final del resumen 3/5; E-03 registra facilidad 5/5 y confianza en privacidad 4/5; E-02 da un 5 en una pregunta conjunta que no separa las dimensiones. Para E-01, RH-01 y RH-03 no queda una calificación numérica individual en la transcripción. Esta evidencia no respalda presentar 5/5 como resultado individual de las seis personas. Para una futura ronda comparativa se propone como referencia operativa reclutar cinco personas por segmento y observar si al menos cuatro completan cada tarea sin ayuda. Esta propuesta no se aplica a la ronda ya realizada. La muestra sirve para localizar problemas y orientar cambios, no para representar a toda la población.

Por ese alcance, no se fijan alfa, potencia ni MDE para las entrevistas y pruebas formativas, ni se calcularán valores p. La escala formal para una prueba de dos proporciones se determina a partir de la **certeza** (probabilidad de error aceptable) y la **precisión** (tamaño del cambio que se desea detectar):

| Parámetro para un futuro piloto cuantitativo | Qué controla | Decisión actual |
| :--- | :--- | :--- |
| Nivel de significancia (α) | Error Tipo I: concluir que hay un efecto cuando se debe al azar. | 5 % como supuesto de planificación; no se aplica a esta ronda formativa. |
| Potencia estadística (1 − β) | Error Tipo II: no detectar un efecto real. | 80 % como supuesto de planificación para el piloto; no se aplica a esta ronda formativa. |
| Efecto mínimo detectable (MDE) | Magnitud mínima de diferencia que vale la pena detectar. | Se definirá con una línea base y una decisión de producto antes de un piloto cuantitativo; no aplica a la ronda formativa. |
| Representatividad de los datos | Aplicabilidad de los hallazgos al grupo de interés. | La ronda formativa usa conveniencia y no representa estadísticamente a los segmentos. |

Para comparar dos proporciones independientes (condición experimental frente a condición de control), el tamaño por grupo es `n = (Z₁₋α/₂ · √(2·p̄·(1 − p̄)) + Z₁₋β · √(p₁(1 − p₁) + p₂(1 − p₂)))² / (p₂ − p₁)²`, con `p̄ = (p₁ + p₂) / 2` y `p₂ − p₁` igual al MDE. Esta fórmula no se usa para el diseño formativo pareado actual: requiere una línea base `p₁`, el MDE y una definición de población/resultado. Al contar con esos valores y decidir un piloto cuantitativo, se calculará el tamaño correspondiente antes de reclutar; no se sustituirá por el objetivo formativo de cinco personas por segmento.

Si el objetivo fuera estimar una proporción poblacional, una referencia de tamaño muestral para población grande sería `n₀ = Z² p(1 − p) / e²`, con corrección por población finita `n = n₀ / (1 + (n₀ − 1) / N)`. No se calcula ese tamaño para esta ronda porque no busca estimar una proporción poblacional y no se han definido `N`, precisión `e` ni una proporción base `p`. El objetivo formativo de cinco participantes por segmento se reportará como muestra de conveniencia, nunca como representativa.

### 8.2.6. Methods Selection

Se propone una combinación de métodos cualitativos y cuantitativos ligeros:

| Método | Uso | Por qué corresponde | Límite |
| :--- | :--- | :--- | :--- |
| Entrevista semiestructurada con tareas | Comprender dudas, expectativas y lenguaje de cada segmento. | Explica por qué una pantalla o estado resulta claro, confuso o poco confiable. | No estima adopción poblacional ni prueba causalidad. |
| Observación de tareas | Registrar finalización, ayudas, errores y tiempo. | Mide el desempeño de tareas concretas en la versión evaluada. | El resultado depende del escenario y entorno de prueba. |
| Escala breve 1–5 | Recoger facilidad/confianza percibidas junto con explicación. | Permite comparar descripciones dentro de las sesiones sin reemplazar comentarios. | Es autorreporte ordinal y no una medida de conducta real. |
| Revisión heurística | Inspeccionar sistemáticamente visibilidad, lenguaje, control, errores y privacidad. | Identifica problemas de interfaz que pueden pasar inadvertidos en una tarea breve. | No sustituye la evaluación con usuarios. |

El método elegido para cada pregunta debe ser la cosa más simple y útil (*Simplest Useful Thing*) para reunir las condiciones y la evidencia necesarias; la pregunta o hipótesis es el objeto de la investigación y el método es la técnica empleada para responderla. No se ejecutarán simultáneamente dos o más experimentos sobre el mismo tema que expongan a una misma persona a ambos, y ningún método debe causar daño a los participantes: por eso se emplean cuentas y datos sintéticos y no se solicita información laboral ni emocional real.

### 8.2.7. Data Analytics: Goals, KPIs and Metrics Selection

Los objetivos analíticos de esta ronda son: (1) detectar confusiones de privacidad en el flujo anónimo; (2) determinar si RR. HH. entiende el periodo y denominador de los indicadores; y (3) identificar tareas con ayuda, error o abandono. Los indicadores de sesión son exploratorios; no son KPI operativos ni compromisos de servicio.

| Objetivo analítico | Indicador | Desagregación | Decisión que informaría |
| :--- | :--- | :--- | :--- |
| Comprensión del anonimato | Comprensión correcta y dudas sobre datos asociados | Segmento empleado; versión de interfaz | Revisar texto y señales de privacidad antes de un piloto |
| Lectura del dashboard | Respuestas correctas y conceptos malinterpretados | Segmento RR. HH.; tarea/pantalla | Ajustar etiquetas, periodo o contexto mostrado |
| Facilidad del flujo | Finalización sin ayuda, ayudas y errores | Segmento, tarea y plataforma | Priorizar cambios de experiencia y volver a observarlos |
| Seguimiento administrativo | Pasos y duración observada, más comentarios sobre estados | Segmento RR. HH.; tarea | Validar con el proceso actual antes de afirmar ahorro de tiempo |

No se establece un objetivo numérico de mejora hasta revisar una primera ronda y acordar criterios de decisión con el equipo. Después de la ronda, se deberá actualizar la Question Backlog y justificar cambios de prioridad con evidencia registrada.

### 8.2.8. Web and Mobile Tracking Plan

Para las pruebas moderadas se propone una hoja de observación local y un código aleatorio de sesión. Si el equipo decide añadir instrumentación de producto, deberá aprobar primero eventos mínimos, consentimiento, retención y acceso. No se registrarán nombres, correos, texto libre de reportes, estados de ánimo individuales, mensajes de orientación, tokens ni identificadores que permitan reconstruir la identidad.

| Evento propuesto | Propiedades mínimas | Plataformas | Propósito |
| :--- | :--- | :--- | :--- |
| `validation_task_started` | código de sesión efímero, tarea, plataforma, versión | Web/Android | Marcar el inicio de una tarea de prueba |
| `validation_task_completed` | código efímero, tarea, resultado sin/con ayuda/no completada, duración por intervalo | Web/Android | Calcular desempeño de la sesión |
| `validation_help_requested` | código efímero, tarea, tipo general de duda (sin texto sensible) | Web/Android | Identificar puntos de fricción |
| `validation_rating_submitted` | código efímero, tarea, escala y valor | Web/Android | Resumir facilidad/confianza declaradas |

Estos nombres y eventos son una propuesta, no telemetría que se afirme instalada. La alternativa de menor intervención es registrar lo mismo en la ficha de observación sin instrumentar la aplicación. Cualquier captura o registro de prueba deberá utilizar datos sintéticos y permanecer con acceso limitado.

## 8.3. Experimentation

#### Resultados de las sesiones de validación formativa

| Segmento | Participantes y fecha | Flujos incluidos | Evidencia resumida |
| :--- | :--- | :--- | :--- |
| Empleados | 3 (E-01–E-03); 06/11/2026, remota | Encuestas, orientación, comentarios, actividades y reportes | Las transcripciones documentan demostraciones y respuestas individuales; E-03 calificó facilidad 5/5 y privacidad 4/5; E-02 dio 5/5 a una pregunta conjunta sin separar dimensiones; E-01 no dio una cifra explícita. |
| Recursos Humanos | 3 (RH-01–RH-03); 05/11/2026, remota | Resumen de ánimo, encuestas, actividades y reportes | RH-02 calificó facilidad 4/5 y utilidad final del resumen 3/5. RH-01 y RH-03 no dieron cifra numérica explícita. RH-02 identificó falta de periodo/población y una confirmación de publicación poco clara. |

**Dispositivo y versión.** Según la información agregada del equipo, los empleados probaron en PC (3/3); RR. HH. usó móvil (2/3) y PC (1/3). Todos utilizaron la última versión disponible. Cada persona recibió una cuenta creada con su consentimiento. Las transcripciones no registran el dispositivo individual de cada entrevista. Este resumen usa códigos de participante; las capturas autorizadas se presentan en 6.3.2.

La recepción general fue positiva. Un empleado describió la aplicación como creativa y como algo esperado en las empresas; se registra como paráfrasis, no como cita. Las entrevistas revelaron dudas sobre anonimato, acceso y seguimiento de reportes; también sobre el periodo y la población usados en el resumen de ánimo y el paso de confirmación de publicación. Aunque el equipo había recordado que la duda sobre cómo reportar se resolvió sin ayuda, las transcripciones incluyen indicaciones del entrevistador y no permiten atribuir autonomía de forma consistente. No se midió el tiempo por tarea. Los resultados describen esta muestra y no representan adopción, exactitud de análisis ni eficacia de la orientación digital.

### 8.3.1. To-Be User Stories

Estas historias traducen hallazgos de las seis sesiones, del Shareback del 06/11/2026 y de la revisión técnica de seguridad (SEC-01, 6.2.1.2) en mejoras futuras propuestas. No reemplazan las 22 historias del Capítulo III ni afirman que estén implementadas.

#### TB-01 — Claridad y confianza en los reportes

**Como empleado que desea comunicar una situación, quiero comprender qué opción de identidad elijo y recibir una confirmación clara, para decidir con información suficiente y saber si el reporte se registró.**

Criterios propuestos: explicar anonimato e identificación conforme al comportamiento real; permitir revisar la elección; confirmar solo lo que el sistema guardó; comprobar comprensión mediante escenarios ficticios.

#### TB-02 — Disponibilidad después de un despliegue

**Como empleado o profesional de RR. HH., quiero que SafeSpace esté disponible sin una espera prolongada después de un periodo de inactividad, para completar mis tareas cuando las necesito.**

Criterios propuestos: medir compilación, publicación y primer arranque por servicio; registrar cinco despliegues consecutivos; separar arranque en frío de respuestas posteriores; documentar costo y beneficio antes de cambiar de plan.

#### TB-03 — Publicación móvil oficial

**Como empleado que utiliza Android, quiero instalar y actualizar SafeSpace desde Google Play, para acceder a una versión oficial mediante un proceso conocido.**

Criterios propuestos: paquete de publicación firmado; ficha, política de privacidad y declaraciones requeridas completas; instalación y actualización comprobadas en versiones compatibles; autenticación y flujos esenciales verificados en un canal de prueba.

#### TB-04 — Lectura del análisis de ánimo

**Como profesional de RR. HH., quiero ver el periodo, número de respuestas y población de referencia junto a los indicadores, para interpretar el resumen en su contexto.**

Criterios propuestos: mostrar periodo y denominador; distinguir respuestas de población habilitada; explicar valores insuficientes; comprobar lectura con datos sintéticos.

#### TB-05 — Uso coherente en móvil y web

**Como empleado o profesional de RR. HH., quiero completar los flujos disponibles desde el dispositivo que utilizo, para acceder a SafeSpace con una experiencia legible y consistente.**

Criterios propuestos: probar encuestas, reportes y tareas administrativas en dispositivos compatibles; mantener etiquetas y confirmaciones coherentes; validar controles y contenido en los tamaños de pantalla definidos.

#### TB-06 — Anonimato verificable en el almacenamiento

**Como empleado que envía un reporte anónimo, quiero que el sistema no conserve una referencia identificable de mi cuenta en el reporte almacenado, para que la opción anónima corresponda con lo que se me explica.**

Origen: hallazgo SEC-01 de 6.2.1.2, según el cual el documento de Firestore conserva la referencia al usuario aunque la respuesta de la API oculte el nombre.

Criterios propuestos: el modelo del reporte no incluye una referencia identificable del usuario cuando el reporte es anónimo; una prueba automatizada verifica el documento persistido y no solo la respuesta de la API; el equipo decide cómo tratar los reportes anónimos ya almacenados; y la explicación de TB-01 coincide con el comportamiento implementado. Mientras no se corrija, TB-01 debe describir el comportamiento real.

### 8.3.2. To-Be Product Backlog

Los puntajes remiten al Question Backlog. Las estimaciones son una propuesta inicial en puntos Fibonacci y los responsables se indican por rol para la planificación. TB-06 se ubica en primera prioridad porque aclarar el anonimato (TB-01) sin corregir el almacenamiento describiría una protección que el sistema todavía no ofrece.

| Prioridad | ID | Historia | Pregunta o hallazgo | Estimación | Responsable propuesto |
| ---: | :--- | :--- | :--- | ---: | :--- |
| 1 | TB-06 | Anonimato verificable en el almacenamiento | QB-01 y SEC-01 | 5 puntos | Backend |
| 2 | TB-01 | Claridad y confianza en los reportes | QB-01 y QB-05 | 5 puntos | Web/móvil con revisión backend |
| 3 | TB-02 | Disponibilidad después del despliegue | QB-02 | 5 puntos | DevOps / backend |
| 4 | TB-03 | Publicación móvil oficial | QB-03 | 13 puntos | Android / publicación |
| 5 | TB-04 | Lectura del análisis de ánimo | QB-04 | 5 puntos | Consola administrativa |
| 6 | TB-05 | Uso coherente en móvil y web | QB-06 | 8 puntos | Equipos web y móvil |

### 8.3.3. To-Be Sprint Backlog

Plan candidato para iteraciones posteriores a los cuatro sprints organizados en Jira. Es una propuesta de trabajo y no modifica el estado de los sprints existentes.

**Sprint To-Be 5 — Distribución y disponibilidad**

| ID | Trabajo | Estimación | Rol propuesto | Resultado verificable |
| :--- | :--- | ---: | :--- | :--- |
| TB-02 | Medir duración de despliegue y primer arranque por servicio | 5 puntos | DevOps / backend | Cinco despliegues medidos por componente y comparación documentada del plan actual. |
| TB-03 | Preparar la distribución oficial de Android en Google Play | 13 puntos | Android / publicación | Paquete firmado, ficha y declaraciones completas; instalación y actualización verificadas en canal de prueba. |
| **Total candidato** |  | **18 puntos** |  |  |

**Sprint To-Be 6 — Privacidad, claridad y lectura de información**

| ID | Trabajo | Estimación | Rol propuesto | Resultado verificable |
| :--- | :--- | ---: | :--- | :--- |
| TB-06 | Eliminar la referencia identificable del usuario en los reportes anónimos almacenados | 5 puntos | Backend | Modelo corregido y prueba automatizada sobre el documento persistido. |
| TB-01 | Aclarar identidad, privacidad y confirmación en reportes | 5 puntos | Web/móvil y backend | Comprensión revisada con escenarios ficticios. |
| TB-04 | Añadir contexto a indicadores de ánimo | 5 puntos | Consola administrativa | Periodo, respuestas y población visibles y comprensibles con datos sintéticos. |
| TB-05 | Verificar consistencia de flujos en móvil y web | 8 puntos | Web y Android | Matriz de tareas y dispositivos ejecutada y documentada. |
| **Total candidato** |  | **23 puntos** |  |  |

Los totales ayudan a discutir alcance y capacidad; no representan la velocidad histórica del equipo. Los puntos y roles pueden ajustarse durante la planificación.

### 8.3.4. Shareback and Continuous Learning

**Fecha:** 06/11/2026.

**Participantes:** integrantes actuales del equipo SafeSpace.
**Propósito:** compartir los resultados de las sesiones con empleados y RR. HH. y traducirlos en oportunidades de mejora.

| Hallazgo compartido | Fuente | Aprendizaje para el equipo |
| :--- | :--- | :--- |
| La recepción general fue positiva, pero las entrevistas registraron dudas de privacidad y contexto; las puntuaciones explícitas varían o no se desglosan. | Seis entrevistas: E-01–E-03 y RH-01–RH-03. | Mantener la recepción favorable como señal inicial y priorizar claridad de anonimato, contexto del resumen y confirmación de publicación. |
| Un empleado destacó la creatividad de la propuesta y que era esperada en las empresas. | Comentario recordado y parafraseado por el equipo. | Comunicar con claridad el propósito de SafeSpace. |
| Se observó lentitud en los despliegues; el equipo la relacionó con los servicios gratuitos utilizados. | Conversación interna de Shareback. | Medir compilación, publicación y primer arranque por componente antes de decidir cambios de proveedor o plan. |
| Se solicitó publicar SafeSpace en Google Play. | Hallazgo compartido durante el ciclo de validación y Shareback. | Incorporar la distribución oficial Android al To-Be Product Backlog. |

**Aprendizajes incorporados.** Las entrevistas apoyan una recepción inicial positiva y señalan problemas concretos de interpretación y confianza. Las oportunidades priorizadas son aclarar anonimato y seguimiento de reportes, añadir contexto al resumen, mejorar la confirmación de publicación, explorar Google Play y medir la demora atribuida a los planes gratuitos. TB-01 a TB-05 traducen esos hallazgos en trabajo verificable; TB-06 traduce el hallazgo técnico SEC-01 de 6.2.1.2 (la referencia al usuario que persiste en los reportes anónimos). Las estimaciones y los sprints To-Be son una propuesta inicial, no una asignación nominal acordada.

**Ciclo de aprendizaje:** observar tareas y operación → compartir resultados → priorizar preguntas y mejoras → ejecutar el Sprint To-Be → volver a medir y actualizar el backlog. Cada iteración conservará versión, fecha, segmento y evidencia agregada, sin datos que identifiquen a participantes.


\newpage
