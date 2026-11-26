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
| 1 | ¿Qué porcentaje de empleados identifica correctamente qué datos se muestran y cuáles quedan asociados al reporte anónimo? | Impulsada por creencias | H1; SEC-01 |
| 2 | ¿Cuál es la mediana y el rango del tiempo desde el inicio de un despliegue hasta que el servicio queda disponible y responde por primera vez? | Exploratoria | Demora observada en Shareback; QB-02 |
| 3 | ¿Qué porcentaje de empleados completa correctamente la instalación y actualización del APK desde un canal de prueba, y qué porcentaje califica la necesidad de Play Store con 4 o 5 de 5? | Exploratoria | Solicitud de publicación móvil en Shareback |
| 4 | ¿Qué porcentaje de profesionales de RR. HH. responde correctamente tres preguntas sobre periodo, denominador y distribución del panel de ánimo? | Impulsada por creencias | H2; RH-02 |
| 5 | ¿Qué porcentaje de empleados completa un reporte ficticio sin ayuda y cuál es la mediana del tiempo por tarea? | Impulsada por creencias | H1; QB-05 |
| 6 | En las mismas personas y tareas, ¿cuál es la diferencia en puntos porcentuales de éxito y en mediana de tiempo entre web y Android? | Exploratoria | Diferencia de plataforma y dispositivo aún no medida |
| 7 | ¿Qué porcentaje de empleados identifica los límites de la orientación digital y elige una vía adecuada en tres situaciones ficticias? | Impulsada por creencias | H3 |
| 8 | ¿Qué porcentaje de profesionales de RR. HH. crea/publica una encuesta y actualiza el estado de un reporte sin ayuda, y cuál es la mediana del tiempo? | Impulsada por creencias | H4; RH-02 |

### 8.1.4. Question Backlog

El Question Backlog contiene ocho preguntas que tienen una variable, una unidad y una regla de cálculo observables. Las preguntas integran hallazgos de las seis sesiones y del Shareback del 06/11/2026; los puntajes son una **propuesta de priorización del equipo**, no respuestas atribuidas a participantes. Escala de 1 a 5: **Confianza** mide cuánta evidencia respalda la hipótesis (1 = muy poca, 5 = sólida); **Riesgo**, **Impacto** e **Interés** usan 1 = bajo y 5 = alto. El puntaje de prioridad es `(6 − Confianza) + Riesgo + Impacto + Interés`, con rango de 4 a 20; un valor mayor indica mayor prioridad para aprender. En empate se prioriza Riesgo y luego Impacto. Los códigos QB-01 a QB-08 siguen el orden de prioridad. Las métricas y umbrales son un plan para futuras pruebas; no representan resultados medidos.

La evidencia de noviembre de 2026 es cualitativa y no proporciona datos homogéneos para responder numéricamente estas preguntas. Las tasas actuales, diferencias entre plataformas, rangos de despliegue y porcentajes de éxito permanecen **sin medir**. Las valoraciones individuales de entrevistas no se reinterpretan como estas métricas ni se convierten en línea base.

| ID | Pregunta cuantitativa | Segmento | Métrica primaria y cálculo | Evidencia disponible / brecha | Confianza | Riesgo | Impacto | Interés | Prioridad |
| :--- | :--- | :--- | :--- | :--- | ---: | ---: | ---: | ---: | ---: |
| QB-01 | ¿Qué porcentaje de empleados identifica correctamente qué datos se muestran y cuáles quedan asociados a un reporte anónimo? | Empleados | Comprensión correcta = participantes que responden todos los ítems de la rúbrica / participantes que completan la tarea × 100. | E-01 y E-03 preguntaron por identidad/acceso; E-02 expresó temor a filtraciones. SEC-01 encontró una referencia de cuenta en Firestore. No hubo rúbrica común. | 2 | 5 | 5 | 4 | 18 |
| QB-02 | ¿Cuál es la mediana y el rango del tiempo desde el inicio del despliegue hasta que el servicio queda disponible y responde por primera vez? | Equipo técnico / usuarios de web y API | Medir por servicio en al menos 5 despliegues: `t_ready − t_inicio` y `t_primera_respuesta − t_ready`; reportar mediana y rango en minutos. | El Shareback atribuyó demora a planes gratuitos; no se registraron marcas de tiempo por etapa. No hay umbral de SLO acordado. | 2 | 4 | 5 | 4 | 17 |
| QB-03 | ¿Qué porcentaje completa instalación y actualización del APK, y qué porcentaje califica la necesidad de Play Store con 4 o 5 de 5? | Empleados Android | Éxito de instalación/actualización = personas que completan ambos pasos / personas que los intentan × 100; interés alto = respuestas 4–5 / respuestas válidas × 100. | El Shareback informó una solicitud de Play Store, sin recuento. No se midió instalación ni interés con escala común. | 2 | 3 | 5 | 5 | 17 |
| QB-04 | ¿Qué porcentaje de profesionales de RR. HH. responde correctamente tres preguntas de lectura del resumen de ánimo? | Recursos Humanos | Éxito por participante = personas que contestan correctamente periodo, denominador y distribución / personas que completan la tarea × 100; conservar también aciertos por pregunta. | RH-02 pidió periodo y número de personas y valoró utilidad en 3/5; no se administró una prueba de comprensión. | 3 | 4 | 4 | 4 | 15 |
| QB-05 | ¿Qué porcentaje de empleados completa un reporte ficticio sin ayuda y cuál es la mediana del tiempo de tarea? | Empleados | Éxito autónomo = reportes de prueba completados sin intervención / intentos válidos × 100; duración desde la instrucción hasta la confirmación, mediana y rango. | E-03 pidió aclarar «Puesto de trabajo», anonimato y seguimiento. Las demostraciones no permiten contar autonomía ni tiempo individual. | 3 | 3 | 4 | 4 | 14 |
| QB-06 | En participantes que prueban ambas plataformas, ¿cuál es la diferencia en éxito de tarea (puntos porcentuales) y mediana de tiempo entre web y Android? | Empleados y RR. HH., analizados por segmento | Mismas personas y tareas: `éxito_web − éxito_Android` en pp; `mediana_tiempo_web − mediana_tiempo_Android`; documentar n pareado y datos faltantes. | Las tres entrevistas de RR. HH. incluyen dos usos móviles y uno PC; empleados informaron PC. No son tareas equivalentes ni una muestra pareada. | 2 | 3 | 4 | 3 | 14 |
| QB-07 | ¿Qué porcentaje identifica los límites del chat de orientación y selecciona una vía adecuada en tres situaciones ficticias? | Empleados | Comprensión = participantes que clasifican correctamente alcance y ruta en los tres escenarios / participantes que completan los escenarios × 100. | E-03 valoró utilidad para ordenar ideas; no se comprobó entendimiento de límites o rutas de apoyo. | 2 | 3 | 4 | 3 | 14 |
| QB-08 | ¿Qué porcentaje de profesionales de RR. HH. crea/publica una encuesta y actualiza el estado de un reporte sin ayuda, y cuál es la mediana del tiempo? | Recursos Humanos | Éxito autónomo = personas que completan ambas tareas sin intervención / participantes que intentan ambas × 100; tiempos por tarea, mediana y rango. | RH-02 confundió guardar con publicar y necesitó una indicación para confirmar. Una entrevista no permite estimar una tasa. | 3 | 2 | 3 | 3 | 11 |

**Umbrales formativos propuestos, no resultados:** para QB-01, QB-04, QB-05, QB-07 y QB-08, observar al menos 4 de 5 participantes por segmento que cumplan la rúbrica/tarea sin ayuda; revisar cualquier error de privacidad o de alcance aunque el umbral global se alcance. Para QB-03, reportar éxito e interés por separado y no decidir publicación solo por una muestra de cinco. Para QB-02 y QB-06, reportar distribuciones y diferencias; no declarar una mejora o equivalencia sin una línea base y un diseño muestral adecuado. Propuesta inicial: cinco participantes por segmento para detección formativa y cinco despliegues medidos por servicio; no son tamaños con potencia estadística ni representan a la población.

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
| Medidas | Finalización sin ayuda; errores/retrocesos; tiempo; interpretación correcta de qué se muestra y qué se conserva; valoración de confianza de 1 a 5 y su explicación. Métricas de 8.2.2: M1 y M5. |
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
| Medidas | Respuestas correctas a tres preguntas fijadas antes de la prueba; tiempo y ayudas; métricas o etiquetas malinterpretadas; valoración de utilidad de 1 a 5 y explicación. Métricas de 8.2.2: M4. |
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
| Medidas | Éxito por tarea, ayuda requerida, errores, retrocesos, tiempo, comprensión de confirmaciones/estados y facilidad percibida de 1 a 5. Métricas de 8.2.2: M5 para reportes y M8 para tareas de RR. HH. |
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
| Medidas | Métrica M7: proporción que clasifica correctamente tres situaciones ficticias, más inicio sin ayuda, tiempo y facilidad de 1 a 5. No se solicitará información emocional, laboral sensible ni experiencias personales. |
| Condiciones | Control: pantalla de chat actual. Experimental: prototipo con una explicación de alcance revisada contra la política publicada y sugerencias neutrales (por ejemplo, organizar pausas o preparar una conversación laboral general). Igual dispositivo, tarea, cuenta de prueba e instrucciones; orden alternado. |
| Criterio de decisión | Para una futura comparación: umbral formativo propuesto de al menos 4 de 5 participantes que inicien sin ayuda en la condición guiada y describan correctamente el alcance general. Cualquier expectativa de diagnóstico o sustitución de atención profesional obliga a revisar el texto antes de continuar. No es un resultado observado ni una prueba de significancia. |
| Escala (tamaño y fechas) | Las sesiones iniciales incluyeron 3 empleados, quienes probaron el chat actual sin una variante guiada. Para la comparación propuesta se plantea reclutar cinco empleados, sujeto a disponibilidad y confirmación del equipo. Registrar fecha, plataforma y orden de condición. Sin inferencia estadística poblacional. |

#### Diseños cuantitativos complementarios para QB-02, QB-03 y QB-06

| Pregunta | Diseño y métrica principal | Condición / control | Tamaño formativo y límite |
| :--- | :--- | :--- | :--- |
| QB-02 — duración del despliegue | Estudio observacional de al menos cinco despliegues por componente. Registrar inicio, estado disponible y primera respuesta; reportar mediana y rango en minutos. | Misma definición de cada hito y servicio; separar cold start de solicitudes posteriores. Registrar cualquier cambio de plan. | Cinco despliegues por servicio como mínimo descriptivo, no inferencial. Si faltan marcas de tiempo históricas, comenzar una bitácora prospectiva. |
| QB-03 — instalación y actualización Android | Tarea de instalación y actualización en un canal interno de prueba; calcular tasa de finalización y recoger por separado interés en Play Store (escala 1–5). | Mismo APK firmado, versión Android compatible e instrucciones; registrar dispositivo y errores sin guardar información personal. | Cinco empleados como objetivo inicial; muestra de conveniencia. El interés declarado no equivale a adopción. |
| QB-06 — web frente a Android | Diseño pareado con las mismas tareas y personas; comparar tasa de éxito en puntos porcentuales y mediana de duración. Alternar el orden de plataforma. | Misma cuenta sintética, tareas, contenido e instrucciones; documentar funciones que no sean equivalentes entre plataformas. | Cinco participantes por segmento como exploración; no permite afirmar equivalencia o superioridad. |

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

Las métricas operativizan las ocho preguntas del backlog. Son medidas para una futura ronda; la columna de situación distingue lo que las entrevistas ya permiten describir de aquello que sigue sin cuantificar.

| Código / QB | Resultado que se desea observar | Métrica y fórmula / unidad | Recolección | Umbral o decisión | Evidencia disponible |
| :--- | :--- | :--- | :--- | :--- | :--- |
| M1 / QB-01 | Comprensión de privacidad | Participantes que responden correctamente todos los ítems de la rúbrica / participantes evaluados × 100; confianza declarada como distribución y mediana de 1–5. | Caso ficticio, rúbrica previa y pregunta abierta; no incluir información real. | Umbral formativo 4/5; cualquier confusión sobre la asociación a identidad se revisa. | Hubo dudas, no una rúbrica comparable ni porcentaje medido. SEC-01 identifica la brecha técnica. |
| M2 / QB-02 | Disponibilidad tras despliegue | Minutos a estado disponible y minutos a primera respuesta; mediana y rango por componente, con al menos cinco despliegues registrados. | Marcas de tiempo del proveedor, logs y solicitud funcional de prueba. | Sin umbral hasta definir SLO y línea base; comparar servicios y etapas. | Shareback relató demora percibida, no tiempos instrumentados. |
| M3 / QB-03 | Instalación y actualización móvil | Éxito completo = participantes que instalan y actualizan / quienes intentan ambos pasos × 100; interés alto = respuestas 4–5 / respuestas válidas × 100. | Prueba del canal interno Android, con versión y dispositivo registrados; escala de necesidad separada. | Reportar ambas medidas por separado; no inferir demanda de tienda a partir del éxito de instalación. | Una solicitud de Play Store reportada; sin encuesta ni prueba de instalación. |
| M4 / QB-04 | Lectura del resumen de RR. HH. | Aciertos por pregunta = respuestas correctas / respuestas válidas × 100; dominio completo = personas con 3/3 aciertos / evaluados × 100. | Tres preguntas fijadas antes de la sesión sobre periodo, denominador y distribución. | Umbral formativo 4/5 en dominio completo; registrar cualquier lectura errónea. | RH-02 pidió contexto; no hubo preguntas ni rúbrica común. |
| M5 / QB-05 | Finalización del reporte | Tasa de éxito autónomo = tareas completadas sin ayuda / intentos válidos × 100; tiempo por tarea en segundos, mediana y rango. | Observación moderada con datos sintéticos y definición de inicio/fin previa. | Umbral formativo 4/5; documentar ayuda, error y retroceso. | Las transcripciones muestran guía del moderador; no permiten tasa ni tiempo por participante. |
| M6 / QB-06 | Diferencia de plataforma | Diferencia de éxito en puntos porcentuales y diferencia de medianas de tiempo entre web y Android para las mismas personas y tareas. | Diseño pareado, mismo guion y casos equivalentes; informar n y datos faltantes. | Describir diferencias; no declarar equivalencia sin diseño y potencia adecuados. | Las entrevistas existentes no son pareadas ni usan tareas equivalentes. |
| M7 / QB-07 | Comprensión del alcance de orientación | Personas que resuelven correctamente los 3 escenarios / evaluados × 100; respuestas correctas por escenario. | Tres viñetas ficticias con opciones de ayuda acordadas antes de la prueba. | Umbral formativo 4/5; cualquier confusión crítica sobre el alcance requiere revisar el aviso. | El chat se valoró como ayuda para ordenar ideas; no se probó la comprensión de límites. |
| M8 / QB-08 | Gestión administrativa | RR. HH. que completa sin ayuda ambas tareas / participantes que intentan ambas × 100; segundos por tarea, mediana y rango. | Observación de crear/publicar encuesta y cambiar estado de un reporte ficticio. | Umbral formativo 4/5; reportar cada tarea además del resultado combinado. | RH-02 confundió guardar con publicar y recibió una indicación; n=1 con detalle observado. |

Los umbrales de 4/5 son criterios formativos propuestos, no metas de negocio ni resultados obtenidos. La muestra prevista de cinco personas por segmento ayuda a detectar problemas de uso; no tiene potencia para inferir tasas poblacionales. La demora de despliegue y la comparación web/Android requieren instrumentación y diseño antes de fijar una meta numérica.

### 8.2.3. Measures

Para cada prueba de participante se registrará código anónimo, segmento, dispositivo, versión, tarea, resultado (sin ayuda / con ayuda / no completada), inicio y fin, tiempo, errores, retrocesos, aciertos por ítem, valoración y comentario anonimizado. Para QB-02 se conservarán marcas de tiempo por servicio y despliegue, asociadas a commit y etapa, sin secretos. Las escalas ordinales se mostrarán como distribución y mediana; los resultados se desglosarán por segmento y plataforma cuando el diseño lo permita. Se registrarán solo medidas necesarias y durante el tiempo definido por el equipo.

### 8.2.4. Conditions

No se reportó que las sesiones realizadas compararan intervenciones: se probó la aplicación disponible con tres participantes por segmento. Por ello, los datos disponibles no responden por sí solos las preguntas que requieren comprobar comprensión de privacidad, exactitud de interpretación o diferencias entre condiciones. La tabla conserva comparaciones futuras para las preguntas impulsadas por creencias; cualquier diferencia de una futura ronda formativa orientará cambios, pero no se presentará como efecto estadísticamente probado.

| QB / hipótesis | Condición de control | Condición experimental / tarea | Medición cuantitativa y límites |
| :--- | :--- | :--- | :--- |
| QB-01 / H1 — Reporte anónimo | Formulario actual con la opción de identidad tal como aparece en la versión revisada. | Prototipo con explicación de privacidad contrastada con el comportamiento real del backend y la política. | Proporción que identifica correctamente datos mostrados y conservados; misma tarea ficticia. No inferir disposición real a reportar. |
| QB-02 — Despliegues | No aplica intervención; registrar tiempos de cada despliegue del mismo servicio. | Comparación descriptiva entre etapas y servicios, sin cambiar plan a mitad de la muestra o dejando anotado el cambio. | Cinco o más despliegues por componente; mediana y rango hasta disponibilidad y primera respuesta. |
| QB-03 — Canal Android | APK del canal interno actual e instrucciones acordadas. | No hay variante de producto; tarea controlada de instalar y actualizar el APK más pregunta de interés en Play Store. | Tasa que completa ambos pasos e interés 4–5/5 por separado. No equiparar interés declarado con adopción. |
| QB-04 / H2 — Resumen de RR. HH. | Vista actual con datos sintéticos. | Prototipo con periodo, población, número de respuestas y definición de tasa claramente identificados. | Tres preguntas iguales sobre periodo, denominador y distribución; reportar aciertos totales y por pregunta. No inferir mejores decisiones organizacionales. |
| QB-05 / H1 — Reporte | No aplica variante; flujo actual para reportar un caso ficticio. | Tarea observada con cuenta de prueba; registrar sin ayuda/con ayuda/no completada y tiempo. | Éxito autónomo (%) y mediana/rango de tiempo. No ejecutar en producción ni recoger una incidencia real. |
| QB-06 — Web y Android | Primera plataforma asignada al azar o alternada. | Segunda plataforma para la misma persona y tarea equivalente. | Diferencia pareada de éxito en pp y mediana de tiempo; n pequeño solo descriptivo, sin afirmar equivalencia. |
| QB-07 / H3 — Orientación | Pantalla actual del chat. | Prototipo previo con explicación de alcance y opciones neutrales para iniciar. | Proporción que clasifica correctamente tres casos ficticios y tiempo de inicio; no evaluar eficacia clínica. |
| QB-08 / H4 — Administración | Flujo actual de RR. HH. | Tareas ficticias de crear/publicar encuesta y cambiar el estado de un reporte, con permisos de prueba. | Tasa que completa cada tarea y ambas sin ayuda; duración mediana/rango. El proceso habitual solo se compara si se observa/documenta. |

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

Los indicadores se vinculan uno a uno con las ocho preguntas del backlog. Son métricas de investigación formativa, no KPI operativos ni resultados ya observados.

| Question Backlog | Indicador principal | Corte / unidad | Decisión que informaría |
| :--- | :--- | :--- | :--- |
| QB-01 | Porcentaje de respuestas correctas sobre datos mostrados y asociados a identidad. | Empleados; versión; 0–100 %. | Corregir almacenamiento y mensaje antes de promover anonimato. |
| QB-02 | Mediana y rango hasta servicio listo y primera respuesta. | Servicio/proveedor; minutos; n despliegues. | Aislar etapa lenta y comparar con SLO/costo acordado. |
| QB-03 | Éxito de instalación/actualización e interés alto, reportados por separado. | Android/dispositivo; porcentajes y distribución 1–5. | Decidir el siguiente experimento de distribución; no inferir adopción. |
| QB-04 | Porcentaje de acierto por pregunta y de dominio completo. | Profesionales RR. HH.; tres ítems; 0–100 %. | Añadir periodo, denominador o contexto donde haya errores. |
| QB-05 | Éxito autónomo y tiempo por reporte. | Empleados; porcentaje, mediana y rango. | Simplificar los pasos con más ayuda o retrocesos. |
| QB-06 | Diferencia pareada de éxito y tiempo web–Android. | Segmento/tarea; puntos porcentuales y segundos. | Detectar tareas que requieren ajuste por plataforma. |
| QB-07 | Porcentaje que clasifica correctamente alcance y ruta en tres escenarios. | Empleados; por ítem y total. | Ajustar aviso y derivación si hay confusión. |
| QB-08 | Éxito autónomo de crear/publicar y actualizar estado; tiempo por tarea. | Profesionales RR. HH.; porcentaje, mediana y rango. | Mejorar estados, confirmación y organización de Gestión. |

Los criterios 4/5 son umbrales formativos propuestos para la próxima ronda; no se atribuyen a las sesiones previas. Cinco participantes por segmento sirven para descubrir fricciones y describir resultados, no para afirmar causalidad o generalización estadística.

### 8.2.8. Web and Mobile Tracking Plan

Para las pruebas moderadas se propone una hoja de observación local y un código aleatorio de sesión. Si el equipo decide añadir instrumentación de producto, deberá aprobar primero eventos mínimos, consentimiento, retención y acceso. No se registrarán nombres, correos, texto libre de reportes, estados de ánimo individuales, mensajes de orientación, tokens ni identificadores que permitan reconstruir la identidad.

| Evento propuesto | Propiedades mínimas | Plataformas | Propósito |
| :--- | :--- | :--- | :--- |
| `validation_task_started` | código de sesión efímero, tarea, plataforma, versión | Web/Android | Marcar el inicio de una tarea de prueba |
| `validation_task_completed` | código efímero, tarea, resultado sin/con ayuda/no completada, duración por intervalo | Web/Android | Calcular desempeño de la sesión |
| `validation_help_requested` | código efímero, tarea, tipo general de duda (sin texto sensible) | Web/Android | Identificar puntos de fricción |
| `validation_rating_submitted` | código efímero, tarea, escala y valor | Web/Android | Resumir facilidad/confianza declaradas |
| `deployment_stage_recorded` (bitácora operativa) | commit, componente, etapa, timestamp y resultado | API/web | Calcular duración y primer arranque para QB-02; sin secretos ni datos de usuarios |

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

## 8.4. Experiment Aftermath & Analysis

### 8.4.1. Analysis and Interpretation of Results

El análisis disponible corresponde a las seis entrevistas formativas (tres empleados y tres profesionales de RR. HH.; 5 y 6 de noviembre de 2026), al Shareback y a la inspección heurística de 6.3.3 realizada sobre el frontend local con datos sintéticos. **No se ejecutó la ronda cuantitativa comparativa de las tarjetas**; las métricas de abajo se reportan como no medidas cuando no existe una observación homogénea. Las dos pruebas Playwright de capturas heurísticas verifican que se puedan recorrer y capturar las vistas; no cuentan como participantes ni validan hipótesis de producto.

| Pregunta | Resultado cuantitativo disponible | Interpretación de la evidencia | Estado |
| :--- | :--- | :--- | :--- |
| QB-01 | Porcentaje de comprensión: no medido. | Empleados preguntaron qué datos se guardan y quién los puede ver. SEC-01 confirma que una referencia de cuenta permanece en Firestore para reportes anónimos. Hace falta corregir el almacenamiento y aplicar una rúbrica de comprensión. | Hallazgo técnico confirmado; comprensión de usuario pendiente. |
| QB-02 | Mediana y rango de despliegue: no medidos. | El equipo describió lentitud asociada a planes gratuitos, pero no hay marcas de tiempo por etapa o componente. | Requiere bitácora de al menos cinco despliegues por componente. |
| QB-03 | Éxito de instalación/actualización e interés 4–5/5: no medidos. | El Shareback registró una solicitud de publicación en Play Store, no su frecuencia ni demanda en la población. | Requiere prueba de canal interno y sondeo separado. |
| QB-04 | Porcentaje de aciertos sobre tres preguntas: no medido. | RH-02 pidió periodo y total de personas y valoró la utilidad final en 3/5. Esto identifica una necesidad de contexto; no es una medición de exactitud. | Requiere rúbrica común y datos sintéticos. |
| QB-05 | Éxito autónomo y mediana de tiempo: no medidos. | E-01/E-03 expresaron dudas de privacidad y seguimiento; las transcripciones contienen guía del moderador y no permiten calcular una tasa individual. | Requiere prueba de tarea cronometrada sin guía. |
| QB-06 | Diferencia pareada web–Android: no medida. | Las entrevistas no asignaron las mismas tareas a las mismas personas en ambas plataformas. | Requiere diseño pareado y tareas equivalentes. |
| QB-07 | Porcentaje de comprensión del alcance: no medido. | Se registró una percepción de utilidad del chat para ordenar ideas, no comprensión de sus límites ni selección de rutas en escenarios. | Requiere tres viñetas neutrales y rúbrica previa. |
| QB-08 | Porcentaje de administración autónoma y mediana de tiempo: no medidos. | RH-02 confundió guardar con publicar y recibió una indicación adicional. El caso muestra un punto de fricción, pero `n=1` no estima una tasa. | Requiere repetir las tareas con varios profesionales de RR. HH. |

La evaluación heurística agregó tres problemas accionables: desajuste entre la promesa de confidencialidad y la persistencia de identidad; falta de límites temporales y denominador visibles en el resumen; y baja encontrabilidad potencial del canal de reportes al agruparlo bajo Encuestas. La primera es un riesgo de privacidad que debe atenderse antes de presentar el flujo como anónimo. La segunda y tercera se deben revisar en la interfaz y volver a probar con usuarios. Las capturas sintéticas sirven para localizar esos elementos visuales, no para afirmar que los participantes los encontraron o abandonaron tareas.

### 8.4.2. Re-scored and Re-prioritized Question Backlog

La revisión vuelve a puntuar las preguntas **con la misma fórmula** de 8.1.4: `(6 − Confianza) + Riesgo + Impacto + Interés`. La revaloración incorpora las seis entrevistas, SEC-01 y los tres hallazgos heurísticos; no incorpora resultados de las métricas que siguen pendientes. Los valores son juicio de priorización del equipo y deben validarse en la próxima planificación, no estimaciones estadísticas.

| Prioridad revisada | ID | Confianza | Riesgo | Impacto | Interés | Puntaje revisado | Puntaje anterior | Motivo del cambio |
| ---: | :--- | ---: | ---: | ---: | ---: | ---: | ---: | :--- |
| 1 | QB-01 | 3 | 5 | 5 | 5 | 18 | 18 | Entrevistas más SEC-01 y promesa UI revelan un riesgo concreto; la comprensión individual aún no se ha cuantificado. |
| 2 | QB-02 | 2 | 4 | 5 | 4 | 17 | 17 | Sin timestamps sigue incierta la causa y magnitud de la demora. |
| 3 | QB-03 | 2 | 3 | 5 | 5 | 17 | 17 | La solicitud en Shareback motiva medir interés, pero no hay recuento ni prueba de distribución. |
| 4 | QB-04 | 3 | 4 | 4 | 4 | 15 | 15 | RH-02 y la inspección del tablero coinciden en falta de periodo/contexto. |
| 5 | QB-05 | 3 | 4 | 4 | 4 | 15 | 14 | La inspección añade riesgo de encontrabilidad al flujo de reportes, además de dudas de privacidad. |
| 6 | QB-06 | 1 | 3 | 4 | 3 | 15 | 14 | La ausencia de una comparación pareada reduce la confianza; el tamaño del problema sigue sin medirse. |
| 7 | QB-07 | 2 | 3 | 4 | 3 | 14 | 14 | Se mantiene pendiente comprobar comprensión del alcance de la orientación. |
| 8 | QB-08 | 3 | 3 | 3 | 3 | 12 | 11 | La confusión observada al publicar eleva el riesgo de flujo; una sesión no permite estimar frecuencia. |

En empate se ordena por Riesgo y después Impacto, conservando el orden previo si ambos también empatan. QB-01 ocupa el primer lugar por la evidencia de privacidad, aunque la medición de comprensión siga pendiente. La siguiente iteración debe tratar TB-06/TB-01 antes de ensayar textos que presenten el reporte como anónimo, y después medir QB-04, QB-05 y QB-08 con tareas y rúbricas fijadas por adelantado.

## 8.5. Continuous Learning

### 8.5.1. Shareback Session Artifacts: Learning Workflow

El Shareback registrado se realizó el **06/11/2026** con integrantes del equipo SafeSpace. El resumen de hallazgos y decisiones está en 8.3.4; no se adjuntó una grabación ni un acta independiente de la reunión. Por eso se referencia el resumen incorporado al informe como artefacto de aprendizaje y no se afirma que exista un video de la sesión.

| Insumo compartido | Aprendizaje | Decisión de producto o experimento | Evidencia / responsable de continuidad |
| :--- | :--- | :--- | :--- |
| Seis entrevistas formativas | Recepción favorable junto con dudas de anonimato, contexto de métricas y confirmación de publicación. | Priorizar TB-06/TB-01, QB-01, QB-04 y QB-08. | Registros 6.3.2 y síntesis 8.3.4; equipo SafeSpace. |
| Demora de despliegues comentada por el equipo | La explicación de “plan gratuito” es una atribución no cuantificada. | Medir al menos cinco despliegues por servicio y calcular mediana y rango (QB-02). | Bitácora por commit y etapa; rol DevOps. |
| Solicitud de Google Play | Hay una señal de interés, sin conocer su frecuencia ni el éxito de instalación. | Probar instalación/actualización en canal interno y preguntar interés por separado (QB-03). | Registro de tarea con dispositivo/versión; rol Android. |
| Inspección heurística y SEC-01 | La promesa del reporte debe corresponder a la identidad almacenada; resumen y canal también requieren contexto y mejor encontrabilidad. | Corregir persistencia, actualizar lenguaje y volver a probar tareas (TB-06, TB-01, TB-04). | Capítulo VI, tres hallazgos con captura; backend, web y RR. HH. |

**Flujo de aprendizaje:** registrar sesión/versión → anonimizar y consolidar hallazgos → compartir con el equipo → convertir evidencias en QB/TB priorizadas → definir métrica, umbral y responsable → ejecutar la siguiente ronda → analizar numeradores/denominadores y comentarios → volver a puntuar y comunicar decisiones. Cada iteración debe conservar fecha, versión y fuente; no debe convertir opiniones de seis sesiones en tasas poblacionales.

## 8.6. To-Be Software Platform Pre-launch

### 8.6.1. About-the-Product Intro Video

El video **About the Product-SafeSpace** dura 02:06 y presenta el problema, la propuesta de valor, los planes y un recorrido por la Landing Page y las aplicaciones.

| Evidencia | Registro |
| :--- | :--- |
| Microsoft 365 / Stream | [Ver About the Product-SafeSpace](https://upcedupe-my.sharepoint.com/:v:/g/personal/u202412316_upc_edu_pe/IQCGpIJb9aonTLG1yEctvKw2ASu2vkNiDx2fEkP3M_4wXiA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=g11Gr9) |
| YouTube | [Ver About the Product-SafeSpace](https://youtu.be/LQMtdRskbRs) |
| Retroalimentación registrada | Paráfrasis autorizada por el equipo: un empleado describió SafeSpace como una aplicación creativa y esperada en una empresa; no es una cita textual. |

El informe aún no contiene un fotograma extraído del reproductor ni confirma que el video AV1 incluya los cambios de la versión final. Antes de entregar, revisar que el video describa con precisión la privacidad: SEC-01 encontró que un reporte marcado anónimo conserva la referencia de cuenta en Firestore. La captura de interfaz de [5.3](50-cap5-product-implementation.md#53-video-about-the-product) no se presenta como fotograma del video.

### 8.6.2. Resumen usando GEES Framework — Matriz de Evaluación Ética y de Impacto

La matriz aplica el formato del Anexo F del enunciado: identifica impactos positivos y negativos, grupos afectados y acciones de mitigación. La valoración es cualitativa porque no hay mediciones de impacto de largo plazo, de mercado ni de consumo energético. La matriz complementa el análisis ABET y no constituye una certificación de cumplimiento.

| Dimensión | Riesgos e impactos positivos/negativos identificados | A quién afecta / magnitud cualitativa | Mitigación y acción de diseño |
| :--- | :--- | :--- | :--- |
| Salud pública y seguridad | **Positivo:** ofrece un canal informativo de orientación general y una vía para expresar inquietudes. **Negativo:** el usuario podría interpretar el chat como atención profesional o sustituir un canal urgente; una demora o falta de seguimiento en reportes sensibles puede aumentar malestar. | Empleados que requieren apoyo; potencial impacto alto en una situación urgente. No se midió incidencia ni resultado clínico. | Explicar límites de la IA, no diagnosticar, mostrar opciones de apoyo humano y recursos de emergencia apropiados; definir seguimiento y estados de reportes antes del piloto. |
| Inclusión y accesibilidad | **Positivo:** acceso web y Android permite usar el servicio desde distintos dispositivos. **Negativo:** dependencia de conectividad/dispositivo excluye a parte del personal; lector de pantalla, contraste, teclado y ampliación no fueron auditados en esta revisión. | Empleados con dispositivos o conectividad limitada y personas con discapacidad; cobertura actual desconocida. | Hacer auditoría WCAG/Android con tecnologías asistivas, probar tamaños de texto y conectividad limitada y ofrecer canal alternativo sin penalizar al trabajador. |
| Impacto social y cultural | **Positivo:** encuestas y actividades pueden facilitar participación y conversación. **Negativo:** paneles de ánimo pueden habilitar vigilancia, estigmatización o reidentificación de grupos pequeños; comentarios sensibles podrían exponerse a una audiencia mayor de la esperada. | Empleados y equipos; impacto alto si se revela una identidad o se usa la información para sancionar. Riesgo coherente con SEC-01 y dudas de entrevistas. | Minimizar datos, limitar roles, agregar solo grupos con umbral mínimo, definir retención y auditoría de accesos; eliminar la referencia de identidad de reportes anónimos almacenados antes de prometer anonimato. |
| Impacto económico | **Positivo:** centralizar información puede reducir trabajo manual y dar seguimiento; son beneficios esperados, no medidos. **Negativo:** planes gratuitos pueden introducir demora o indisponibilidad; costos de suscripción, operación y soporte pueden recaer en la organización. | Organización, RR. HH. y empleados; magnitud no cuantificada, sin datos de costo total ni ahorro. | Medir costo/tiempo por proveedor y despliegue (QB-02), comunicar límites del servicio, evitar trasladar el costo al empleado y comparar el costo total con una línea base. |
| Impacto global y ambiental (complementario) | **Positivo potencial:** un servicio digital puede evitar parte de los desplazamientos y materiales de procesos presenciales. **Negativo potencial:** alojamiento, transferencia de datos y recambio de dispositivos consumen energía y recursos; no hay inventario de emisiones o consumo. | Usuarios en regiones con distintas condiciones de conectividad y recursos; efecto ambiental aún desconocido. | Diseñar páginas ligeras, soportar dispositivos de gama baja, evitar telemetría innecesaria y medir consumo/costo de infraestructura antes de formular afirmaciones ambientales. |

**Juicio del equipo:** el valor de bienestar y comunicación depende de privacidad real, acceso equitativo y límites claros de la asistencia. En la versión inspeccionada, la discrepancia de anonimato es una condición prioritaria de diseño y operación. La evidencia actual permite describir riesgos y mitigaciones; no permite afirmar que SafeSpace haya reducido costos, mejorado salud laboral o reducido impacto ambiental.


\newpage
