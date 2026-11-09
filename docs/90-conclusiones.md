# Conclusiones

## Conclusiones y recomendaciones

### Conclusiones generales

El Trabajo Parcial documenta SafeSpace como una solución web y móvil de bienestar laboral, respaldada por una Landing Page, aplicaciones web para empleados y Recursos Humanos, una aplicación Android y una API REST. Los capítulos de requisitos y diseño se conectan con las funciones implementadas y con las evidencias visuales incluidas en el informe.

La revisión del backend permitió precisar la configuración técnica: Java 21, Spring Boot 3.5.5 y Firebase Firestore como persistencia documental. El backend organiza sus datos en colecciones mediante adaptadores de repositorio; MySQL, JPA y Flyway no forman parte de la configuración de ejecución. Los repositorios y capturas muestran componentes publicados en Vercel y Render.

La corrida integral del backend ejecutada para esta revisión terminó con 967 pruebas aprobadas, sin fallas ni errores. El workflow Backend CI ejecuta Maven ante cambios dirigidos a `master`. En el frontend web, TypeScript y oxlint aprobaron; Prettier identificó 37 archivos con formato por ajustar. Vercel publica automáticamente las aplicaciones web desde la rama Git conectada; esta publicación funciona por separado del workflow de pruebas del backend. Render aloja la API y la captura revisada muestra una activación manual; Android se distribuye mediante APK.

En las seis sesiones presenciales de validación (tres empleados y tres profesionales de Recursos Humanos), el equipo reportó que los participantes completaron los flujos asignados sin ayuda y calificaron su facilidad con 5/5. El resultado describe esta ronda pequeña y no se generaliza a toda la población. El Shareback del 06/11/2026 convirtió la recepción positiva, la lentitud atribuida a los planes gratuitos y la solicitud de Google Play en preguntas de aprendizaje e historias To-Be propuestas.

La inspección estática y manual de seguridad confirmó uso de BCrypt, JWT stateless, restricciones por rol y orígenes CORS configurados por entorno. También identificó que los reportes marcados anónimos conservan la referencia de usuario en el documento de Firestore, aunque la respuesta de API omite el nombre del remitente, y que existe una clave JWT de respaldo conocida para desarrollo. Render genera una clave para producción. El repositorio no tiene configurado un escáner SAST ni análisis de dependencias contra una base de vulnerabilidades.

### Relación entre necesidades y solución

| Necesidad del usuario | Respuesta de SafeSpace | Evidencia documentada |
| :--- | :--- | :--- |
| Compartir experiencias laborales con control sobre la identidad mostrada. | Encuestas, comentarios y reportes con una opción de anonimato en la respuesta de la API. | Interfaces de empleado y hallazgo SEC-01: Firestore conserva una referencia al usuario en el reporte anónimo. |
| Dar seguimiento al bienestar individual y del equipo. | Registro de ánimo y vistas de resumen para Recursos Humanos. | Capturas web y móvil de bienestar y resumen administrativo. |
| Promover la participación del equipo. | Actividades semanales con opciones de votación y resultados. | Interfaces web y Android de actividades semanales. |
| Acceder a orientación general de manera privada. | Chat de asistencia con IA y aviso de alcance informativo. | Capturas de conversación web y Android. |

### Lecciones aprendidas

**Requisitos y diseño.** Vincular las historias de usuario, criterios de aceptación y pantallas permite mantener un hilo claro entre la necesidad, el comportamiento esperado y la solución presentada.

**Implementación.** Separar la Landing Page, las interfaces web, la aplicación Android y el backend facilita organizar los despliegues y documentar las responsabilidades de cada componente. El backend centraliza las reglas de negocio y conserva los datos en documentos y colecciones Firestore.

**Verificación.** Las pruebas unitarias de servicios permiten cubrir reglas de negocio con escenarios controlados. Los escenarios Given–When–Then y la matriz de aceptación complementan esta cobertura con el comportamiento que percibe el usuario.

**Entrega.** El backend cuenta con integración continua en GitHub Actions y la web con despliegue automático en Vercel. La publicación de la API en Render se registró como manual y Android se distribuye mediante APK. El equipo relacionó la lentitud de despliegues con los planes gratuitos; el Capítulo VIII propone medir cada etapa antes de tomar decisiones de costo o proveedor. La solicitud de publicar en Google Play quedó incorporada al backlog To-Be.

### Recomendaciones para la evolución del producto

1. Corregir el modelo de persistencia para que los reportes anónimos no guarden una referencia identificable del usuario y añadir una prueba del documento almacenado.
2. Exigir una clave JWT fuerte fuera del perfil local y mantener los secretos en la configuración protegida del proveedor.
3. Integrar typecheck, lint, formato y pruebas web en un flujo de CI asociado a las publicaciones automáticas de Vercel.
4. Medir la compilación, publicación y primera respuesta de cada servicio; usar esos datos para valorar el efecto de los planes gratuitos y el costo de alternativas.
5. Preparar y validar la distribución de Android en Google Play, según la historia TB-02 del Capítulo VIII.
6. Mantener sincronizados el inventario de endpoints, las historias soportadas y la documentación OpenAPI con cada actualización del backend.

Estas recomendaciones plantean una ruta de mejora continua para las siguientes versiones y complementan las capacidades y artefactos presentados en este hito.

---

## Conclusiones del Trabajo Parcial (TB1)

### Conclusiones generales

El Trabajo Parcial consolida SafeSpace como una solución de bienestar laboral con verificación documentada y prácticas de integración continua. Para esta revisión, la suite del backend terminó con 967 pruebas aprobadas; además, se documentan escenarios BDD, seis pruebas de sistema Playwright para la aplicación web y el workflow `Backend CI` que ejecuta Maven ante cambios dirigidos a `master`.

La organización de las pruebas por bounded context (autenticación, bienestar, encuestas, actividades, reportes e IA) permite relacionar los escenarios de verificación con las historias de usuario y con las reglas de negocio implementadas en el backend. Los escenarios BDD (`survey-answer.feature`, `mood-check-in.feature`, `activity-voting.feature`, `report-privacy.feature`) expresan en lenguaje Gherkin los comportamientos esperados del producto y constituyen criterios ejecutables alineados con los requisitos del Capítulo III.

El backend ejecuta integración continua en GitHub Actions, se empaqueta con Docker y se aloja en Render; la publicación observada de Render fue manual y usa `/v3/api-docs` como health check. El frontend web y la consola administrativa están en Vercel, con publicación automática desde la rama Git conectada, según la confirmación del equipo.

### Relación necesidades–evidencia de calidad

| Necesidad | Verificación documentada en TB1 |
| :--- | :--- |
| Que el producto funcione conforme a los requisitos. | Suite de 960+ pruebas de backend; 6 pruebas de sistema Playwright; 8 escenarios BDD aprobados. |
| Que la respuesta de reportes respete la opción de identidad. | `ReportServiceTest` y `report-privacy.feature` verifican la respuesta de API; la inspección de Firestore encontró que el documento aún conserva la referencia de usuario en reportes anónimos (SEC-01). |
| Que las encuestas no acumulen respuestas duplicadas. | `SurveyServiceTest` y `SurveyServiceValidationTest` rechazan respuestas repetidas con `IllegalArgumentException`. |
| Que el producto esté disponible de forma reproducible. | CI con GitHub Actions; despliegue backend en Render; aplicaciones web en Vercel; APK Android distribuido. |

### Lecciones aprendidas del TB1

**Verificación.** Clasificar las pruebas por tipo (unitaria, integración local, BDD, sistema) y por bounded context facilita la revisión de la cobertura y permite identificar vacíos concretos: pruebas de sistema para la aplicación móvil y un smoke test post-despliegue para el backend.

**BDD.** Expresar criterios en Gherkin como pruebas dinámicas de JUnit 5 conecta el lenguaje del dominio con la ejecución automatizada, sin necesidad de infraestructura adicional para la corrida local.

**CI/CD.** El workflow del backend valida cambios con pruebas; Vercel publica automáticamente el frontend desde Git; Render publicó la API manualmente en la captura revisada. La lentitud reportada en los despliegues se atribuyó a servicios gratuitos y se incorporó al aprendizaje To-Be.

**Trazabilidad.** Mantener la correspondencia entre historias, bounded contexts, pruebas y evidencias visuales a lo largo del informe facilita la revisión externa y reduce el riesgo de presentar funcionalidades sin respaldo verificable.

### Recomendaciones para el Trabajo Final

1. Mantener una única corrida de referencia del backend y actualizar el inventario de pruebas con su resultado verificable.
2. Integrar las verificaciones estáticas y las pruebas del frontend web en un flujo de CI previo o asociado a la publicación de Vercel.
3. Añadir una prueba funcional posterior a la publicación de Render que valide un flujo esencial del backend.
4. Implementar el ajuste de privacidad de reportes anónimos y reforzar la configuración de la clave JWT.
5. Medir tiempos de despliegue y primer arranque, y utilizar la evidencia junto con la solicitud de Google Play para ordenar el backlog To-Be.

\newpage
