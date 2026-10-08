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

\newpage
