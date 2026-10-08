# Conclusiones

## Conclusiones y recomendaciones

### Conclusiones generales

El Trabajo Parcial documenta SafeSpace como una solución web y móvil de bienestar laboral, respaldada por una Landing Page, aplicaciones web para empleados y Recursos Humanos, una aplicación Android y una API REST. Los capítulos de requisitos y diseño se conectan con las funciones implementadas y con las evidencias visuales incluidas en el informe.

La revisión del backend permitió precisar la configuración técnica: Java 21, Spring Boot 3.5.5 y Firebase Firestore como persistencia documental. El backend organiza sus datos en colecciones mediante adaptadores de repositorio; MySQL, JPA y Flyway no forman parte de la configuración de ejecución. Los repositorios y capturas muestran componentes publicados en Vercel y Render.

Los artefactos de verificación incluyen pruebas de backend, escenarios BDD y pruebas de la aplicación web. Los conteos backend disponibles (958, 960 y 966) corresponden a registros distintos y aún requieren una corrida limpia y sincronización. El workflow Backend CI ejecuta pruebas del backend en push y pull request a master; no se encontró un workflow equivalente para el frontend.

### Relación entre necesidades y solución

| Necesidad del usuario | Respuesta de SafeSpace | Evidencia documentada |
| :--- | :--- | :--- |
| Compartir experiencias laborales en un entorno confidencial. | Encuestas, comentarios y reportes con alternativa de envío anónimo. | Interfaces de empleado y flujo de reportes en el Capítulo V. |
| Dar seguimiento al bienestar individual y del equipo. | Registro de ánimo y vistas de resumen para Recursos Humanos. | Capturas web y móvil de bienestar y resumen administrativo. |
| Promover la participación del equipo. | Actividades semanales con opciones de votación y resultados. | Interfaces web y Android de actividades semanales. |
| Acceder a orientación general de manera privada. | Chat de asistencia con IA y aviso de alcance informativo. | Capturas de conversación web y Android. |

### Lecciones aprendidas

**Requisitos y diseño.** Vincular las historias de usuario, criterios de aceptación y pantallas permite mantener un hilo claro entre la necesidad, el comportamiento esperado y la solución presentada.

**Implementación.** Separar la Landing Page, las interfaces web, la aplicación Android y el backend facilita organizar los despliegues y documentar las responsabilidades de cada componente. El backend centraliza las reglas de negocio y conserva los datos en documentos y colecciones Firestore.

**Verificación.** Las pruebas unitarias de servicios permiten cubrir reglas de negocio con escenarios controlados. Los escenarios Given–When–Then y la matriz de aceptación complementan esta cobertura con el comportamiento que percibe el usuario.

**Entrega.** La integración continua del backend y las versiones publicadas permiten revisar el producto. Las capturas disponibles muestran publicación manual de Render y no prueban despliegue automático de Vercel; el proceso de entrega requiere mayor automatización.

### Recomendaciones para la evolución del producto

1. Ampliar la automatización BDD a partir de los escenarios priorizados y vincular sus resultados al workflow de CI.
2. Ejecutar una corrida backend limpia y sincronizar el inventario, la documentación y la captura de CI; ampliar la validación de persistencia con Firestore Emulator o el mecanismo local definido por el equipo, sin usar la base de producción.
3. Mantener sincronizados el inventario de endpoints, las historias soportadas y la documentación OpenAPI con cada actualización del backend.
4. Continuar evaluando con empleados y personal de Recursos Humanos la claridad, confianza y utilidad de los flujos de bienestar y reportes.
5. Revisar periódicamente los textos de privacidad, condiciones del servicio y orientación asistida por IA conforme evolucione el producto.

Estas recomendaciones plantean una ruta de mejora continua para las siguientes versiones y complementan las capacidades y artefactos presentados en este hito.

---

## Conclusiones del Trabajo Parcial (TB1)

### Conclusiones generales

El Trabajo Parcial consolida SafeSpace como una solución de bienestar laboral con verificación documentada y prácticas de integración continua en funcionamiento. Los Capítulos VI y VII incorporados en este hito presentan la suite de pruebas del backend —960 casos en 60 suites, con variantes unitarias, de integración y BDD—, seis pruebas de sistema Playwright para la aplicación web y el workflow `Backend CI` en GitHub Actions que ejecuta `mvn -B test` ante cada cambio en la rama `master`.

La organización de las pruebas por bounded context (autenticación, bienestar, encuestas, actividades, reportes e IA) permite relacionar los escenarios de verificación con las historias de usuario y con las reglas de negocio implementadas en el backend. Los escenarios BDD (`survey-answer.feature`, `mood-check-in.feature`, `activity-voting.feature`, `report-privacy.feature`) expresan en lenguaje Gherkin los comportamientos esperados del producto y constituyen criterios ejecutables alineados con los requisitos del Capítulo III.

El pipeline de entrega del backend cubre integración continua (GitHub Actions), empaquetado (Docker) y publicación (Render), con el health check configurado en `/v3/api-docs`. El frontend web y la consola administrativa están publicados en Vercel; la conexión automática con Git no quedó confirmada en las evidencias disponibles y representa una brecha a resolver en la siguiente etapa.

### Relación necesidades–evidencia de calidad

| Necesidad | Verificación documentada en TB1 |
| :--- | :--- |
| Que el producto funcione conforme a los requisitos. | Suite de 960+ pruebas de backend; 6 pruebas de sistema Playwright; 8 escenarios BDD aprobados. |
| Que los datos personales y anónimos se traten correctamente. | `ReportServiceTest` y `report-privacy.feature` validan que la identidad se oculte o se muestre según la elección del usuario. |
| Que las encuestas no acumulen respuestas duplicadas. | `SurveyServiceTest` y `SurveyServiceValidationTest` rechazan respuestas repetidas con `IllegalArgumentException`. |
| Que el producto esté disponible de forma reproducible. | CI con GitHub Actions; despliegue backend en Render; aplicaciones web en Vercel; APK Android distribuido. |

### Lecciones aprendidas del TB1

**Verificación.** Clasificar las pruebas por tipo (unitaria, integración local, BDD, sistema) y por bounded context facilita la revisión de la cobertura y permite identificar vacíos concretos: pruebas de sistema para la aplicación móvil y un smoke test post-despliegue para el backend.

**BDD.** Expresar criterios en Gherkin como pruebas dinámicas de JUnit 5 conecta el lenguaje del dominio con la ejecución automatizada, sin necesidad de infraestructura adicional para la corrida local.

**CI/CD.** La separación entre el job de CI (pruebas) y el despliegue (Render manual, Vercel) deja visible la brecha de automatización. Documentarla honestamente permite planificar su cierre con evidencia concreta en el siguiente hito.

**Trazabilidad.** Mantener la correspondencia entre historias, bounded contexts, pruebas y evidencias visuales a lo largo del informe facilita la revisión externa y reduce el riesgo de presentar funcionalidades sin respaldo verificable.

### Recomendaciones para el Trabajo Final

1. Ejecutar una corrida limpia del backend, regenerar el inventario `validation-inventory.json` y actualizar la captura de CI para que las cifras de pruebas sean consistentes entre sí.
2. Incorporar las pruebas Vitest y Playwright del frontend web a un workflow de GitHub Actions, convirtiendo esas verificaciones en una puerta de calidad antes de cada despliegue.
3. Conectar los repositorios web y administrativo a Vercel mediante la integración Git y documentar el despliegue automático con capturas verificables.
4. Añadir una prueba smoke post-despliegue en Render que valide al menos un endpoint funcional del backend tras cada publicación.
5. Incorporar el testimonio de usuario pendiente con fuente y autorización verificables, y actualizar la sección de retroalimentación del Capítulo V.
6. Completar los campos de planificación de sprint (fechas, responsables y velocidad acordada) para los cuatro sprints, de modo que la trazabilidad entre Jira y los commits sea completa y auditables.

\newpage
