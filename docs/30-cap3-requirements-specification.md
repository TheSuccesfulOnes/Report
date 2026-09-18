# Capítulo III: Requirements Specification

En este capítulo se detallan los requisitos funcionales y no funcionales del sistema SafeSpace, así como las historias de usuario que guiarán el desarrollo de la aplicación móvil. Se presentan los escenarios To-Be que describen la experiencia ideal para los usuarios finales, segmentados por tipo de usuario (empleados y RRHH). Además, se organizan los requisitos en Epics y User Stories con criterios de aceptación claros para asegurar una implementación alineada con las necesidades del negocio y las expectativas de los usuarios.

## 3.1. To-Be Scenario Mapping

En esta sección se describen los escenarios To-Be para los principales segmentos de usuarios de SafeSpace, enfocándose en las acciones, pensamientos y emociones que experimentan a lo largo de su interacción con la aplicación. Estos escenarios ayudan a visualizar la experiencia ideal y a identificar oportunidades clave para mejorar el bienestar laboral mediante la tecnología.

### 1. Segmento: Empleados de la empresa

**Objetivo:** Brindar una experiencia proactiva, personalizada y continua que permita al empleado identificar, entender y mejorar su bienestar y desempeño laboral con apoyo tecnológico y acompañamiento estructurado.

| Fase                         | Acciones (Doing)                                                                                               | Pensamientos (Thinking)                                                                | Emociones (Feeling)     |
| :--------------------------- | :------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------- | :---------------------- |
| Descubrimiento               | Recibe alertas inteligentes o recomendaciones basadas en su comportamiento laboral (estrés, desempeño, clima). | "Esto refleja exactamente lo que estoy sintiendo, no lo había identificado tan claro." | Sorpresa, interés       |
| Acceso y diagnóstico         | Ingresa a la aplicación y completa un diagnóstico guiado e interactivo.                                        | "El proceso es claro y parece adaptado a mi situación."                                | Confianza, curiosidad   |
| Visualización de resultados  | Recibe un análisis personalizado con indicadores claros, riesgos y oportunidades de mejora.                    | "Ahora entiendo qué está pasando y por qué."                                           | Claridad, tranquilidad  |
| Plan de acción personalizado | Accede a recomendaciones específicas: micro-hábitos, recursos, sesiones o rutas de mejora.                     | "Tengo pasos concretos que puedo seguir para mejorar."                                 | Motivación, seguridad   |
| Acompañamiento continuo      | Recibe seguimiento automatizado, recordatorios y retroalimentación adaptativa.                                 | "No estoy solo en este proceso, hay un seguimiento real."                              | Apoyo, compromiso       |
| Evolución y mejora           | Observa su progreso mediante métricas y ajustes dinámicos en su plan.                                          | "Estoy mejorando y puedo ver resultados reales."                                       | Satisfacción, confianza |


### 2. Segmento: Área de Recursos Humanos (RRHH)

**Objetivo:** Optimizar la toma de decisiones mediante datos en tiempo real, automatización de procesos y herramientas de análisis que permitan intervenciones más efectivas y personalizadas.

| Fase                        | Acciones (Doing)                                                                                     | Pensamientos (Thinking)                                        | Emociones (Feeling)      |
| :-------------------------- | :--------------------------------------------------------------------------------------------------- | :------------------------------------------------------------- | :----------------------- |
| Monitoreo inteligente       | Accede a dashboards con indicadores en tiempo real sobre clima, desempeño y bienestar.               | "Ahora tengo visibilidad clara y actualizada de la situación." | Control, seguridad       |
| Detección predictiva        | El sistema identifica riesgos y patrones antes de que escalen (burnout, rotación, bajo rendimiento). | "Puedo anticiparme en lugar de reaccionar tarde."              | Confianza, proactividad  |
| Segmentación y priorización | Clasifica empleados según niveles de riesgo o necesidad de intervención.                             | "Sé exactamente dónde enfocar mis esfuerzos."                  | Claridad, eficiencia     |
| Diseño de intervenciones    | Genera planes de acción personalizados o grupales basados en datos reales.                           | "Las decisiones que tomo están respaldadas por evidencia."     | Seguridad, determinación |
| Implementación automatizada | Ejecuta programas, seguimiento y comunicación mediante la aplicación.                                | "Esto reduce mi carga operativa significativamente."           | Alivio, productividad    |
| Evaluación de impacto       | Mide resultados con métricas claras y ajusta estrategias en tiempo real.                             | "Puedo demostrar el impacto real de las acciones."             | Satisfacción, logro      |

---

### Diferenciales clave del escenario To-Be

- Enfoque proactivo y predictivo en lugar de reactivo.
- Personalización basada en datos individuales y patrones colectivos.
- Integración de tecnología para diagnóstico, seguimiento y análisis.
- Mejora continua con retroalimentación en tiempo real.
- Reducción de fricción en la comunicación entre empleados y RRHH.

---

### Insight estratégico

El sistema transforma la relación entre empleados y RRHH en un modelo basado en datos, prevención y acompañamiento continuo, donde:

- El empleado pasa de la incertidumbre a la autogestión guiada.
- RRHH pasa de la reacción a la toma de decisiones estratégica basada en evidencia.

## 3.2. User Stories

Requisitos definidos junto con el conjunto de User Stories y Epics para los requisitos identificados. Los User Stories incluyen Criterios de Aceptacion. En esta sección el equipo redacta una introducción y presenta los cuadros con la estructura especificada a continuación.

### Epics

En esta sección se presentan los Epics definidos para organizar y agrupar las funcionalidades principales del sistema. Cada Epic representa un conjunto de funcionalidades relacionadas que contribuyen a un objetivo común dentro de la aplicación SafeSpace.

| Epic / ID | Nombre | Objetivo | Historias relacionadas |
| :-------- | :----- | :------- | :--------------------- |
| EP01 | Acceso, identidad y administración de usuarios | Permitir el registro, autenticación, configuración de perfiles y administración de cuentas según el rol. | US01, US02, US04, US05 |
| EP02 | Bienestar y estado de ánimo | Registrar el estado de ánimo de los empleados y ofrecer a RR. HH. un resumen del bienestar del equipo. | US06, US07 |
| EP03 | Encuestas y participación | Publicar y responder encuestas, gestionar sus estados y facilitar comentarios, respuestas y reacciones. | US08, US09, US10, US11, US12, US13 |
| EP04 | Actividades y votaciones semanales | Proponer actividades grupales y permitir que los empleados voten y cambien su elección. | US14, US15, US16 |
| EP05 | Reportes laborales | Registrar situaciones identificadas o anónimas y permitir su consulta y seguimiento administrativo. | US17, US18, US19 |
| EP06 | Planes y pagos | Consultar planes y registrar comprobantes de pago asociados a la plataforma. | US20 |
| EP07 | Asistencia conversacional con IA | Crear conversaciones privadas y recibir orientación breve de bienestar mediante el asistente. | US21, US22 |

### User Stories

| User Story / ID | Título descriptivo | Descripción | Criterios de aceptación | Épica |
| :--------------- | :----------------- | :----------- | :---------------------- | :---- |
| US01 | Registro de empleados | Como empleado de una organización, quiero registrar una cuenta con username, email, nombre visible y contraseña, para acceder de forma segura a las funcionalidades de bienestar. | Escenario 1: con username y email disponibles, una contraseña de al menos 8 caracteres y confirmación correcta, se crea un usuario `EMPLOYEE`. Escenario 2: un registro válido devuelve un JWT y los datos básicos. Escenario 3: un username o email repetido se rechaza. | EP01 |
| US02 | Inicio de sesión con credenciales | Como usuario registrado, quiero iniciar sesión usando mi username o email y mi contraseña, para obtener acceso autenticado al backend. | Escenario 1: un usuario habilitado con credenciales correctas recibe un JWT con su identidad y rol. Escenario 2: un identificador o contraseña incorrectos rechazan el acceso. Escenario 3: un usuario deshabilitado no puede iniciar sesión. | EP01 |
| US04 | Actualización de perfil y preferencias | Como usuario autenticado, quiero actualizar mi username, email, nombre visible, idioma y tema, para mantener configurada mi cuenta según mis necesidades. | Escenario 1: un username disponible permite guardar los cambios y renovar el JWT si corresponde. Escenario 2: un email utilizado por otra cuenta se rechaza. Escenario 3: un empleado no puede eliminar su email. Escenario 4: un idioma y tema válidos se almacenan en preferencias. | EP01 |
| US05 | Administración de usuarios | Como administrador del sistema, quiero listar, crear, actualizar, habilitar, deshabilitar, eliminar usuarios y restablecer contraseñas, para controlar las cuentas y permisos de la plataforma. | Escenario 1: un administrador autenticado consulta datos básicos, rol, estado y propietario. Escenario 2: las contraseñas nuevas se codifican con BCrypt. Escenario 3: no se elimina ni deshabilita al último administrador. Escenario 4: la cuenta propietaria no puede ser modificada por otro administrador. Escenario 5: un usuario con encuestas o actividades se deshabilita en vez de eliminarse. | EP01 |
| US06 | Registro diario de estado de ánimo | Como usuario autenticado, quiero registrar mi estado de ánimo del día, para dejar constancia de mi percepción diaria de bienestar. | Escenario 1: si no existe una entrada para la fecha actual, se guarda un mood válido. Escenario 2: un segundo registro del mismo día se rechaza. Escenario 3: la consulta devuelve el valor y la fecha. Escenario 4: los valores permitidos son `VERY_BAD`, `BAD`, `GOOD` y `VERY_GOOD`. | EP02 |
| US07 | Resumen administrativo de estado de ánimo | Como miembro de RRHH o administrador del sistema, quiero consultar la distribución diaria de estados de ánimo y la tasa de respuesta, para conocer el pulso general de los empleados. | Escenario 1: para una fecha se devuelve el total de respuestas y la cantidad por mood. Escenario 2: se informa el número de empleados activos y la tasa de participación. Escenario 3: sin empleados activos, la tasa es 0 %. Escenario 4: los roles permitidos son `HR_MEMBER` y `SYSTEM_ADMIN`. | EP02 |
| US08 | Consulta de encuestas publicadas | Como usuario autenticado, quiero consultar las encuestas publicadas, para conocer las preguntas activas y saber si ya participé. | Escenario 1: una encuesta `PUBLISHED` aparece con título, pregunta, tipo, estado y cantidad de respuestas. Escenario 2: si el usuario ya respondió, `answered` es verdadero. Escenario 3: las encuestas `DRAFT` o `CLOSED` no aparecen en el listado público. | EP03 |
| US09 | Respuesta única a una encuesta | Como usuario autenticado, quiero responder una encuesta publicada una sola vez, para aportar mi opinión sin duplicar mi participación. | Escenario 1: una respuesta no vacía se almacena asociada al usuario y a la encuesta. Escenario 2: una encuesta cerrada o en borrador no puede responderse. Escenario 3: una segunda respuesta para la misma encuesta se rechaza. | EP03 |
| US10 | Gestión operativa de encuestas | Como miembro de RRHH o administrador del sistema, quiero crear, consultar, publicar y cerrar encuestas, para administrar las preguntas de bienestar. | Escenario 1: un título, pregunta y tipo válidos crean una encuesta en `DRAFT`. Escenario 2: una encuesta pasa a `PUBLISHED` o `CLOSED`. Escenario 3: el listado gestionado incluye todos los estados. Escenario 4: los roles permitidos son `HR_MEMBER` y `SYSTEM_ADMIN`. | EP03 |
| US11 | Administración avanzada de encuestas | Como administrador del sistema, quiero editar, reabrir, eliminar encuestas y consultar sus respuestas detalladas, para realizar la gestión administrativa completa. | Escenario 1: se actualizan título, pregunta, tipo y comentarios. Escenario 2: una encuesta puede reabrirse y volver a `DRAFT`. Escenario 3: al eliminarla, se eliminan sus respuestas y comentarios. Escenario 4: las respuestas incluyen usuario, email, nombre, texto y fecha. Escenario 5: el rol requerido es `SYSTEM_ADMIN`. | EP03 |
| US12 | Comentarios anidados en encuestas | Como usuario autenticado, quiero publicar comentarios y respuestas sobre una encuesta que permita comentarios, para participar en una conversación relacionada con la pregunta. | Escenario 1: un contenido no vacío crea un comentario asociado al usuario. Escenario 2: un `parentId` existente crea una respuesta anidada. Escenario 3: una encuesta con comentarios deshabilitados no acepta comentarios. Escenario 4: el listado devuelve comentarios raíz, respuestas, fecha y likes. | EP03 |
| US13 | Like de comentarios | Como usuario autenticado, quiero marcar un comentario con un like, para expresar que considero útil su contenido. | Escenario 1: al pulsar like sobre un comentario sin like propio, se crea una interacción única. Escenario 2: un comentario inexistente no acepta el like. | EP03 |
| US14 | Consulta de actividades abiertas | Como usuario autenticado, quiero consultar las actividades semanales abiertas y sus opciones, para elegir en cuál participar. | Escenario 1: una actividad `OPEN` devuelve título, descripción, estado, opciones y estadísticas. Escenario 2: las actividades cerradas no aparecen en el listado público. Escenario 3: una actividad sin votos devuelve porcentajes en 0. | EP04 |
| US15 | Votación y cambio de voto | Como usuario autenticado, quiero votar por una opción de una actividad abierta y poder cambiar mi voto, para participar en la decisión semanal. | Escenario 1: un voto sobre una opción de una actividad abierta se registra. Escenario 2: un nuevo voto reemplaza el anterior. Escenario 3: no se vota en actividades cerradas ni con opciones de otra actividad. | EP04 |
| US16 | Gestión de actividades semanales | Como miembro de RRHH o administrador del sistema, quiero crear, consultar, cerrar y reabrir actividades semanales, para administrar las dinámicas participativas. | Escenario 1: un título y opciones válidos crean una actividad abierta. Escenario 2: una actividad puede cerrarse y dejar de aceptar votos. Escenario 3: una actividad cerrada puede reabrirse. Escenario 4: si ya tiene votos, sus opciones no cambian. Escenario 5: las rutas `/admin` requieren `SYSTEM_ADMIN`. | EP04 |
| US17 | Creación de reportes anónimos o identificados | Como usuario autenticado, quiero enviar un reporte con categoría, título, descripción, prioridad y opción de anonimato, para comunicar una situación que requiere atención. | Escenario 1: un reporte identificado se guarda asociado al usuario. Escenario 2: un reporte anónimo no guarda la relación con el usuario ni expone su nombre. Escenario 3: todo reporte inicia con estado `NEW`. | EP05 |
| US18 | Consulta de reportes propios | Como usuario autenticado, quiero consultar mis reportes identificados, para revisar los casos que envié y su estado. | Escenario 1: los reportes asociados al usuario se devuelven ordenados por ID descendente. Escenario 2: los reportes anónimos no aparecen porque no conservan relación con la cuenta. | EP05 |
| US19 | Revisión y actualización de reportes | Como miembro de RRHH o administrador del sistema, quiero consultar todos los reportes y cambiar su estado, para realizar el seguimiento administrativo de los casos. | Escenario 1: un usuario autorizado recibe el listado completo. Escenario 2: un reporte existente puede cambiar de estado. Escenario 3: usuarios sin rol `HR_MEMBER` o `SYSTEM_ADMIN` reciben acceso denegado. | EP05 |
| US20 | Registro de planes y comprobantes de pago | Como administrador del sistema, quiero consultar los planes disponibles y registrar un pago con beneficiario, plan y comprobante PDF, para administrar los registros de pago de la plataforma. | Escenario 1: la consulta devuelve `MONTHLY` y `ANNUAL` con duración en meses. Escenario 2: un pago válido guarda nombre, plan y PDF en Firestore y calcula la siguiente fecha en `America/Lima`. Escenario 3: se validan extensión, MIME, firma `%PDF-` y tamaño. Escenario 4: el rol requerido es `SYSTEM_ADMIN`. Escenario 5: no incluye pasarela, tarjeta, renovación automática, historial ni descarga. | EP06 |
| US21 | Conversaciones con la IA | Como empleado, quiero crear, listar, renombrar y eliminar mis conversaciones con la IA, para organizar mis espacios privados de apoyo emocional. | Escenario 1: un empleado puede crear y listar sus conversaciones. Escenario 2: solo puede renombrar o eliminar conversaciones propias. Escenario 3: eliminar una conversación elimina también sus mensajes. Escenario 4: una conversación ajena se trata como inexistente. Escenario 5: el rol requerido es `EMPLOYEE`. | EP07 |
| US22 | Envío de mensajes al asistente | Como empleado, quiero enviar mensajes al asistente y recibir una respuesta considerando parte del historial, para obtener orientación breve de bienestar emocional. | Escenario 1: un mensaje no vacío dentro del límite guarda el mensaje y la respuesta. Escenario 2: si Gemini está configurado, se envían instrucciones de seguridad, idioma e historial reciente. Escenario 3: sin Gemini se devuelve una respuesta local en español o inglés. Escenario 4: los mensajes que superan el límite no se persisten. Escenario 5: los errores del proveedor se convierten en indisponibilidad controlada. Escenario 6: el rol requerido es `EMPLOYEE`. | EP07 |


### Historias Técnicas

En esta sección se detallan las historias técnicas necesarias para implementar las funcionalidades descritas en los User Stories. Estas historias técnicas se enfocan en la arquitectura, la infraestructura, la seguridad y otros aspectos técnicos que son fundamentales para el correcto funcionamiento de la aplicación.

| ID de Historia Técnica | Título                                     | Descripción                                                                                                                                                  | Relacionado con (US ID)                    |
| ---------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| TS01                   | Aplicación base con Spring Boot            | Como equipo de desarrollo, quiero implementar una API modular con Java 21 y Spring Boot, para exponer las funcionalidades de SafeSpace mediante una arquitectura organizada. | Todas                                      |
| TS02                   | Persistencia no relacional con Firestore  | Como equipo de desarrollo, quiero persistir la información de SafeSpace en Firestore, para almacenar y consultar los datos de la plataforma de forma centralizada. | Todas                                      |
| TS03                   | Modelo de identidad y roles                | Como equipo de desarrollo, quiero modelar usuarios con username, email, contraseña codificada, nombre visible, rol, estado habilitado y marca de propietario, para gestionar la identidad y los permisos de la plataforma. | US01, US02, US05                           |
| TS04                   | Autenticación JWT sin sesión de servidor   | Como usuario autenticado, quiero utilizar un JWT validado en cada petición protegida, para acceder a las funcionalidades autorizadas sin mantener una sesión en el servidor. | US02, US04, US05, US06, US22               |
| TS05                   | Hash seguro de contraseñas                 | Como equipo de desarrollo, quiero codificar las contraseñas con BCrypt, para proteger las credenciales de las cuentas registradas y administrativas. | US01, US02, US05                           |
| TS06                   | Autorización RBAC                          | Como equipo de desarrollo, quiero diferenciar las capacidades de EMPLOYEE, HR_MEMBER y SYSTEM_ADMIN mediante autorización por rutas y métodos, para controlar el acceso a cada operación. | US01-US22                                  |
| TS07                   | Protección de la cuenta propietaria        | Como administrador del sistema, quiero proteger la cuenta propietaria y el último administrador, para evitar la pérdida de control de la plataforma. | US05                                       |
| TS09                   | Configuración por propiedades y perfiles   | Como equipo de desarrollo, quiero externalizar secretos, límites, URLs y configuraciones por entorno, para configurar la plataforma sin exponer credenciales en el código. | US02, US20, US22                           |
| TS10                   | Gestión de perfil y preferencias           | Como usuario autenticado, quiero guardar mi idioma y tema en mis preferencias, para personalizar la experiencia de uso desde la API. | US04                                       |
| TS11                   | Registro diario de mood                   | Como usuario autenticado, quiero registrar un estado de ánimo por día, para mantener un registro diario consistente de mi bienestar. | US06                                       |
| TS12                   | Consulta agregada de mood                  | Como miembro de RRHH, quiero consultar un resumen agregado del estado de ánimo, para conocer la participación y el pulso general de los empleados. | US07                                       |
| TS13                   | Ciclo de vida de encuestas                 | Como miembro autorizado de RRHH o administrador del sistema, quiero gestionar el ciclo de vida de las encuestas, para publicar y mantener actualizadas las preguntas de bienestar. | US08, US09, US10, US11                     |
| TS14                   | Respuestas únicas de encuestas             | Como usuario autenticado, quiero registrar una sola respuesta por encuesta, para aportar mi opinión sin duplicar mi participación. | US09                                       |
| TS15                   | Comentarios jerárquicos                    | Como usuario autenticado, quiero publicar comentarios y respuestas anidadas en una encuesta, para aportar contexto y participar en la conversación. | US12                                       |
| TS16                   | Likes únicos por usuario                   | Como usuario autenticado, quiero registrar un like único en un comentario, para expresar que considero útil su contenido. | US13                                       |
| TS17                   | Actividades con opciones y votación       | Como usuario autenticado, quiero votar por una opción de una actividad y cambiar mi voto, para participar en las decisiones semanales del equipo. | US14, US15, US16                           |
| TS18                   | Protección de opciones después de votar    | Como miembro autorizado de RRHH o administrador del sistema, quiero proteger las opciones después de un voto, para preservar la integridad de la participación. | US16                                       |
| TS19                   | Reportes anónimos e identificados          | Como usuario autenticado, quiero enviar reportes anónimos o identificados con sus datos de seguimiento, para comunicar situaciones que requieren atención. | US17, US18                                 |
| TS20                   | Seguimiento administrativo de reportes     | Como miembro de RRHH o administrador del sistema, quiero consultar reportes y cambiar su estado, para realizar el seguimiento administrativo de los casos. | US19                                       |
| TS21                   | Auditoría de operaciones administrativas   | Como administrador del sistema, quiero registrar las operaciones administrativas relevantes, para mantener trazabilidad sobre los cambios realizados en la plataforma. | US05, US10, US11, US16, US20               |
| TS23                   | Cálculo de siguiente fecha de pago         | Como administrador del sistema, quiero calcular la siguiente fecha de pago según el plan seleccionado, para mantener actualizado el registro administrativo. | US20                                       |
| TS24                   | Conversaciones del empleado con la IA      | Como empleado, quiero asociar mis conversaciones y mensajes con la IA a mi cuenta, para conservar mis espacios privados de apoyo emocional. | US21, US22                                 |
| TS25                   | Integración con Gemini                    | Como empleado, quiero enviar mensajes a la IA integrada con Gemini, para recibir orientación breve de bienestar emocional. | US22                                       |
| TS26                   | Respuesta de contingencia para IA          | Como usuario empleado, quiero mantener disponible el chat cuando no haya una clave externa, para poder utilizar y probar el flujo de asistencia. | US22                                       |
| TS27                   | Manejo común de errores HTTP               | Como usuario de SafeSpace, quiero recibir errores HTTP claros y consistentes, para comprender qué ocurrió y saber cómo continuar. | US01-US22                                  |
| TS28                   | CORS y API stateless                       | Como usuario de SafeSpace, quiero que la API gestione orígenes autorizados y solicitudes sin estado, para acceder de forma segura a las funcionalidades. | US02, US04-US22                            |




## 3.3. Product Backlog

[Jira Board - SafeSpace](https://milenkorvu.atlassian.net/jira/software/c/projects/SSB/boards/4/backlog)


![Product Backlog](../assets/images/cap3/product-backlog.png)

| Jira   | ID   | Historia de usuario                           | Epic |
| ------ | ---- | --------------------------------------------- | ---- |
| SSB-1  | US01 | Registro de empleados                         | EP01 |
| SSB-2  | US02 | Inicio de sesión con credenciales             | EP01 |
| SSB-4  | US04 | Actualización de perfil y preferencias        | EP01 |
| SSB-5  | US05 | Administración de usuarios                    | EP01 |
| SSB-6  | US06 | Registro diario de estado de ánimo            | EP02 |
| SSB-7  | US07 | Resumen administrativo de estado de ánimo     | EP02 |
| SSB-8  | US08 | Consulta de encuestas publicadas              | EP03 |
| SSB-9  | US09 | Respuesta única a una encuesta                | EP03 |
| SSB-10 | US10 | Gestión operativa de encuestas                | EP03 |
| SSB-11 | US11 | Administración avanzada de encuestas          | EP03 |
| SSB-12 | US12 | Comentarios anidados en encuestas             | EP03 |
| SSB-13 | US13 | Like de comentarios                           | EP03 |
| SSB-14 | US14 | Consulta de actividades abiertas              | EP04 |
| SSB-15 | US15 | Votación y cambio de voto                     | EP04 |
| SSB-16 | US16 | Gestión de actividades semanales              | EP04 |
| SSB-17 | US17 | Creación de reportes anónimos o identificados | EP05 |
| SSB-18 | US18 | Consulta de reportes propios                  | EP05 |
| SSB-19 | US19 | Revisión y actualización de reportes          | EP05 |
| SSB-20 | US20 | Registro de planes y comprobantes de pago     | EP06 |
| SSB-21 | US21 | Conversaciones con la IA                      | EP07 |
| SSB-22 | US22 | Envío de mensajes al asistente                | EP07 |


## Tareas técnicas

| Jira   | ID   | Tarea técnica                              | Historias relacionadas                     |
| ------ | ---- | ------------------------------------------ | ------------------------------------------ |
| SSB-23 | TS01 | Aplicación base con Spring Boot            | Todas                                      |
| SSB-24 | TS02 | Persistencia no relacional con Firestore  | Todas                                      |
| SSB-25 | TS03 | Modelo de identidad y roles                | US01, US02, US05                           |
| SSB-26 | TS04 | Autenticación JWT sin sesión de servidor   | US02, US04, US05, US06, US22               |
| SSB-27 | TS05 | Hash seguro de contraseñas                 | US01, US02, US05                           |
| SSB-28 | TS06 | Autorización RBAC                          | US01–US22                                  |
| SSB-29 | TS07 | Protección de la cuenta propietaria        | US05                                       |
| SSB-31 | TS09 | Configuración por propiedades y perfiles   | US02, US20, US22                            |
| SSB-32 | TS10 | Gestión de perfil y preferencias           | US04                                       |
| SSB-33 | TS11 | Registro diario de mood con unicidad       | US06                                       |
| SSB-34 | TS12 | Consulta agregada de mood                  | US07                                       |
| SSB-35 | TS13 | Ciclo de vida de encuestas                 | US08, US09, US10, US11                     |
| SSB-36 | TS14 | Respuestas únicas de encuestas             | US09                                       |
| SSB-37 | TS15 | Comentarios jerárquicos                    | US12                                       |
| SSB-38 | TS16 | Likes únicos por usuario                   | US13                                       |
| SSB-39 | TS17 | Actividades con opciones y votación única  | US14, US15, US16                           |
| SSB-40 | TS18 | Protección de opciones después de votar    | US16                                       |
| SSB-41 | TS19 | Reportes anónimos e identificados          | US17, US18                                 |
| SSB-42 | TS20 | Seguimiento administrativo de reportes     | US19                                       |
| SSB-43 | TS21 | Auditoría de operaciones administrativas   | US05, US10, US11, US16, US20               |
| SSB-45 | TS23 | Cálculo de siguiente fecha de pago         | US20                                       |
| SSB-46 | TS24 | Conversaciones del empleado con la IA      | US21, US22                                 |
| SSB-47 | TS25 | Integración con Gemini                     | US22                                       |
| SSB-48 | TS26 | Respuesta de contingencia para IA          | US22                                       |
| SSB-49 | TS27 | Manejo común de errores HTTP               | US01–US22                                  |
| SSB-50 | TS28 | CORS y API stateless                       | US02, US04–US22                            |


## 3.4. Impact Mapping

![Impact Mapping Empleado](../assets/images/cap2/ImpactMapping_Empleado.jpg)

---

![Impact Mapping RRHH](../assets/images/cap2/ImpactMapping_RRHH.jpg)

\newpage

