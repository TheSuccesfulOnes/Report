# Capítulo V: Product Implementation

Este capítulo documenta la configuración, implementación y evidencia verificable de SafeSpace para el Trabajo Parcial. Mantiene como línea base las evidencias presentadas en AV1 y las actualiza cuando existe una modificación comprobable en repositorios, despliegues, enlaces o capturas. La trazabilidad se mantiene entre las historias del Product Backlog, las tareas del Sprint, los cambios en los repositorios, las pruebas y la ejecución de cada producto.

## 5.1. Software Configuration Management

La gestión de configuración de SafeSpace define las herramientas, repositorios, ramas, convenciones y procedimientos de despliegue utilizados por el equipo. Su propósito es mantener una versión reproducible del producto y permitir rastrear cada cambio hasta la historia o tarea que lo motivó.

### 5.1.1. Software Development Environment Configuration

La siguiente tabla resume las herramientas y versiones observadas en las configuraciones de los repositorios disponibles.

| Actividad             | Herramienta o tecnología                                       | Uso en SafeSpace                                                          | Referencia o evidencia                                                                                 | Versión                                    |
| :-------------------- | :------------------------------------------------------------- | :------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------- | :----------------------------------------- |
| Gestión del proyecto  | Jira                                                           | Gestión del Product Backlog, Sprint Backlog, historias, tareas y estados. | [Tablero de SafeSpace](https://milenkorvu.atlassian.net/jira/software/c/projects/SSB/boards/4/backlog) | SaaS                                       |
| Control de versiones  | Git                                                            | Registro local de cambios, ramas y etiquetas.                             | [Git](https://git-scm.com/)                                                                            | 2.49.0                                      |
| Repositorios          | GitHub                                                         | Hospedaje del informe y del código; Pull Requests, issues y colaboración. | Organización: https://github.com/TheSuccesfulOnes                                                      | SaaS                                       |
| Diseño UX/UI          | Figma                                                          | Elaboración y revisión de wireframes, mockups, flujos y prototipos.       | https://www.figma.com/design/7CoYj5tfiNTLD8kScA5uTF/Untitled?node-id=0-1&t=8T79jUNWludeTlcC-1          | SaaS                                       |
| Documentación         | Markdown                                                       | Redacción del informe.                                                     | Repositorio del informe: https://github.com/TheSuccesfulOnes/Report                                    | N/A                                          |
| Landing Page          | React, Vite y TypeScript                                       | Presentación pública de SafeSpace, planes y canal de contacto.             | https://github.com/TheSuccesfulOnes/Landing-page-SafeSpace                                              | React 19; Vite 8; TypeScript 6               |
| Aplicación web        | React y Vite; TypeScript                                       | Interfaz web para empleados y RR. HH.                                     | https://github.com/TheSuccesfulOnes/Frontend-Web-SafeSpace                                  | 1                                            |
| Aplicación web administrativa | React y Vite; TypeScript                                | Interfaz web para la gestión administrativa de SafeSpace.                  | https://github.com/TheSuccesfulOnes/Frontend-Admin-SafeSpace                            | 1                                            |
| Aplicación móvil      | Kotlin y Jetpack Compose                                       | Aplicación nativa Android para empleados.                                 | https://github.com/TheSuccesfulOnes/Frontend-Movil-SafeSapace                           | 1                                            |
| API REST              | Java 21 y Spring Boot 3.5.5                                    | Reglas de negocio y servicios consumidos por las aplicaciones.            | https://github.com/TheSuccesfulOnes/Backend-SafeSpace                                 | Spring Boot 3.5.5                            |
| Base de datos         | Firebase Firestore                                             | Persistencia documental no relacional utilizada por los módulos del backend. | README y adaptadores Firebase del repositorio Backend-SafeSpace | Firestore                                    |
| Documentación y prueba manual de API | Swagger UI                                  | Consulta de los contratos OpenAPI y ejecución manual de operaciones de la API. | Swagger: https://safespace-backend-q3uv.onrender.com/swagger-ui/index.html | Disponible |
| Despliegue            | Vercel para frontend y landing; Render para backend             | Publicación de la landing, aplicaciones web y API.                         | Landing: https://landing-page-safe-space.vercel.app/; Web: https://safespace-web-nine.vercel.app/; API: https://safespace-backend-q3uv.onrender.com | Vercel / Render                             |

**Stack implementado.** SafeSpace utiliza React, Vite y TypeScript en sus interfaces web; Kotlin y Jetpack Compose en Android; Java 21 y Spring Boot 3.5.5 en la API REST; y Firebase Firestore como persistencia documental.

Los repositorios separan la configuración de cada producto. Las variables de entorno se documentan por nombre y los valores sensibles se mantienen fuera del informe y del control de versiones.

### 5.1.2. Source Code Management

El código y el informe se mantienen en repositorios GitHub públicos. La estructura prevista separa los productos para facilitar su construcción, revisión y despliegue.

| Producto                 | URL del repositorio                                               | Contenido                                                                 |
| :----------------------- | :---------------------------------------------------------------- | :------------------------------------------------------------------------ |
| Informe                  | https://github.com/TheSuccesfulOnes/Report                        | Capítulos Markdown, assets y configuración de exportación del informe.    |
| Landing Page             | https://github.com/TheSuccesfulOnes/Landing-page-SafeSpace.git    | Código de la página informativa de SafeSpace.                             |
| Aplicación web           | https://github.com/TheSuccesfulOnes/Frontend-Web-SafeSpace.git    | Interfaz web para empleados y RR. HH.                                     |
| Aplicación móvil Android | https://github.com/TheSuccesfulOnes/Frontend-Movil-SafeSapace.git | Aplicación nativa y configuración de compilación.                         |
| API REST                 | https://github.com/TheSuccesfulOnes/Backend-SafeSpace.git         | Servicios, persistencia y suite automatizada de pruebas del backend. |
| Aplicación web administrativa | https://github.com/TheSuccesfulOnes/Frontend-Admin-SafeSpace | Interfaz web para la gestión administrativa de SafeSpace.             |

#### GitFlow Workflow

La estrategia de ramas documentada para el proyecto separa el trabajo de funcionalidades, la integración, la preparación de versiones y las correcciones urgentes.

| Rama                      | Propósito                                                      | Regla                                                                          |
| :------------------------ | :------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| main                      | Versión estable revisada para entrega o despliegue.            | Recibe cambios mediante Pull Request aprobado desde una rama release o hotfix. |
| develop                   | Integración del trabajo aceptado para el siguiente incremento. | Recibe ramas feature después de revisión y validación.                         |
| feature/US-ID-descripcion | Implementación de una historia de usuario o tarea.             | Se crea desde develop y se integra por Pull Request.                           |
| release/vX.Y.Z            | Preparación de una versión.                                    | Se usa para estabilizar y validar el incremento antes de integrarlo a main.    |
| hotfix/vX.Y.Z-descripcion | Corrección urgente en una versión estable.                     | Se crea desde main y luego se sincroniza con develop.                          |

El esquema facilita relacionar cambios con historias o tareas y mantener una versión estable identificable para revisión y despliegue.

#### Semantic Versioning

El equipo identifica las versiones mediante el formato MAJOR.MINOR.PATCH:

| Componente | Se incrementa cuando…                                        |
| :--------- | :----------------------------------------------------------- |
| MAJOR      | Se introduce un cambio incompatible con la versión anterior. |
| MINOR      | Se añade funcionalidad compatible.                           |
| PATCH      | Se corrige un defecto o se realiza una mejora compatible.    |

El registro de versiones del informe identifica esta actualización como V1.1.0. Las referencias de código y publicación se consignan por producto en las tablas de configuración y despliegue.

#### Conventional Commits

El estándar de referencia para los mensajes es Conventional Commits: `tipo(alcance): descripción breve`. Se contemplan tipos como `feat`, `fix`, `docs`, `test`, `refactor` y `chore` para identificar funcionalidades, correcciones, documentación, pruebas, refactorización y mantenimiento.

Los commits de referencia incluidos en este capítulo muestran cambios de implementación y documentación vinculados con los productos SafeSpace.

#### Pull Requests

Como criterio de revisión, los Pull Requests relacionan el cambio con la historia o tarea, resumen su alcance, incluyen el resultado de las pruebas ejecutadas y reciben revisión antes de integrarse.

#### Commits de referencia observados en los repositorios

Los siguientes commits, obtenidos de los historiales públicos, documentan cambios de implementación y versiones asociadas con las evidencias revisadas.

| Producto | Commit | Fecha | Descripción |
| :-------- | :----- | :---- | :---------- |
| Backend | [4218059](https://github.com/TheSuccesfulOnes/Backend-SafeSpace/commit/42180596587208ca5ba4650d905e1cb4e8a00515) | 16/09/26 | Ajuste del resumen de mood según la zona horaria del negocio. |
| Backend | [daca205](https://github.com/TheSuccesfulOnes/Backend-SafeSpace/commit/daca205) | 15/09/26 | Versión de backend asociada a la evidencia de Render. |
| Backend | [277c518](https://github.com/TheSuccesfulOnes/Backend-SafeSpace/commit/277c5187202e7ea34e891fadc19a33ac8e57e5c9) | 14/09/26 | Actualización de persistencia y estructura de datos. |
| Backend | [dd30a88](https://github.com/TheSuccesfulOnes/Backend-SafeSpace/commit/dd30a88283eec9470f711c95dd90666f2e734b20) | 14/09/26 | Configuración de construcción y despliegue del backend. |
| Landing Page | [a60e0bc](https://github.com/TheSuccesfulOnes/Landing-page-SafeSpace/commit/a60e0bcc070ceacf8466627ea67dd4e8bd688b87) | 17/09/26 | Implementación del menú móvil y mejoras de accesibilidad. |
| Landing Page | [b68ede7](https://github.com/TheSuccesfulOnes/Landing-page-SafeSpace/commit/b68ede7) | 15/09/26 | Incorporación de una llamada a la acción de bienestar. |
| Frontend web | [33b18e6](https://github.com/TheSuccesfulOnes/Frontend-Web-SafeSpace/commit/33b18e67a856df88fd5d9644e85832c1f8af2848) | 17/09/26 | Localización de placeholders de registro. |
| Frontend web | [1451a2b](https://github.com/TheSuccesfulOnes/Frontend-Web-SafeSpace/commit/1451a2b) | 11/09/26 | Versión web asociada a la evidencia de Vercel. |
| Frontend móvil | [ebe0602](https://github.com/TheSuccesfulOnes/Frontend-Movil-SafeSapace/commit/ebe0602e05f197a6af5fe80f625c25a615f01db0) | 16/09/26 | Ajuste de recuperación de contraseña en autenticación móvil. |
| Frontend administrativo | [b76e3e4](https://github.com/TheSuccesfulOnes/Frontend-Admin-SafeSpace/commit/b76e3e495c76243b8591b29a61d3ee9ca06c49d4) | 16/09/26 | Incorporación del control de visibilidad de contraseña. |
| Frontend administrativo | [9ca1253](https://github.com/TheSuccesfulOnes/Frontend-Admin-SafeSpace/commit/9ca1253) | 11/09/26 | Versión administrativa asociada a la evidencia de Vercel. |
### 5.1.3. Source Code Style Guide & Conventions

Los repositorios mantienen nombres técnicos en inglés y aplican convenciones acordes con React/TypeScript, Kotlin y Java. Las herramientas de compilación, análisis y formato se definen en la configuración de cada producto.

| Producto                      | Convenciones aplicadas                                                                                                                                                                                                                                                                                 |
| :---------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Landing Page | React, TypeScript y Vite; interfaz por componentes y estilos adaptables. Los scripts del repositorio incluyen desarrollo, compilación y lint. |
| Aplicación web | React y TypeScript; componentes y vistas tipadas; scripts de lint y verificación de formato. |
| Aplicación móvil | Kotlin y Jetpack Compose; compilación y tareas de lint y pruebas mediante Gradle. |
| API REST | Java 21 y Spring Boot; módulos de aplicación, DTO y validación; adaptadores de persistencia Firestore y formato Java configurado con Spotless. |
| Base de datos | Firebase Firestore; colecciones documentales y transacciones para operaciones que requieren generación de identificadores. |
| Pruebas | JUnit 5 y Mockito; nombres descriptivos y escenarios de servicio asociados con reglas de negocio. |


Los escenarios de aceptación usan una sintaxis uniforme de Gherkin: Feature, Scenario, Given, When, Then y And. Los criterios se expresan como resultados observables y se relacionan con las historias del Capítulo III.

### 5.1.4. Software Deployment Configuration

El despliegue debe poder repetirse desde una rama y un commit identificables. La tabla registra la configuración real de cada artefacto.

| Producto                 | Plataforma | Rama/commit | Construcción o distribución | Variables de entorno | URL o artefacto |
| :----------------------- | :--------- | :---------- | :-------------------------- | :------------------- | :-------------- |
| Landing Page | Vercel | `master` / [a60e0bc](https://github.com/TheSuccesfulOnes/Landing-page-SafeSpace/commit/a60e0bcc070ceacf8466627ea67dd4e8bd688b87) | Despliegue Vercel | No se requieren variables de entorno propias de la aplicación. | [landing-page-safe-space.vercel.app](https://landing-page-safe-space.vercel.app/) |
| Aplicación web | Vercel | `master` / [1451a2b](https://github.com/TheSuccesfulOnes/Frontend-Web-SafeSpace/commit/1451a2b) | Despliegue Vercel | `VITE_API_URL`, documentada en `.env.example`. | [safespace-web-nine.vercel.app](https://safespace-web-nine.vercel.app/) |
| Aplicación web administrativa | Vercel | `master` / [9ca1253](https://github.com/TheSuccesfulOnes/Frontend-Admin-SafeSpace/commit/9ca1253) | Despliegue Vercel | `VITE_API_URL`. | [safespace-admin-alpha.vercel.app](https://safespace-admin-alpha.vercel.app/) |
| Aplicación móvil Android | Android Studio | `master` / [ebe0602](https://github.com/TheSuccesfulOnes/Frontend-Movil-SafeSapace/commit/ebe0602e05f197a6af5fe80f625c25a615f01db0) | Compilación Gradle y generación del APK | `API_BASE_URL` para la variante de depuración. | [Distribución Android](https://upcedupe-my.sharepoint.com/personal/u202313922_upc_edu_pe/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fu202313922%5Fupc%5Fedu%5Fpe%2FDocuments%2FSafeSpace%2DMovil&ga=1) |
| API REST | Render | `master` / [daca205](https://github.com/TheSuccesfulOnes/Backend-SafeSpace/commit/daca205) | Construcción Docker y publicación en Render | `FIREBASE_PROJECT_ID`, `GOOGLE_APPLICATION_CREDENTIALS`, `JWT_SECRET`, `CORS_ALLOWED_ORIGINS`, `PASSWORD_RESET_URL_BASE` y `GEMINI_API_KEY` opcional. | [safespace-backend-q3uv.onrender.com](https://safespace-backend-q3uv.onrender.com) |
| Base de datos | Firebase Firestore | Colecciones documentales configuradas en el proyecto Firebase | Persistencia no relacional consumida por la API | `FIREBASE_PROJECT_ID` y credenciales de Firebase mediante Application Default Credentials. | Configurada en el entorno de ejecución del backend. |

#### Procedimiento reproducible

1. Clonar el repositorio correspondiente y cambiar al commit documentado.
2. Instalar las dependencias con el comando definido en su README.
3. Configurar las variables requeridas usando valores locales o secretos del proveedor.
4. Ejecutar las pruebas y el comando de compilación del repositorio.
5. Publicar usando el mecanismo configurado por el proveedor o distribuir el artefacto Android. Las capturas disponibles deben interpretarse como evidencia del estado observado, no como prueba de publicación automática.
6. Abrir la URL/artefacto y comprobar los flujos descritos en 5.2.

Comandos de instalación, ejecución y compilación identificados en los repositorios disponibles:

- Landing Page: `npm ci`, `npm run dev`, `npm run build`, `npm run lint`.
- Frontend web: `npm ci`, `npm run dev`, `npm run build`, `npm run lint`, `npm run format:check`.
- Backend: `mvn spring-boot:run`, `mvn test`, `mvn clean package`.
- Aplicación móvil: `.\gradlew.bat clean app:build`; pruebas Android: `.\gradlew.bat app:lintDebug app:testDebugUnitTest app:connectedAndroidTest`.

Evidencia del despliegue del backend en Render:

![Despliegue del backend de SafeSpace en Render](../assets/images/cap5/deployment/backend-render.jpeg)

**Estado de automatización observado.** La captura de Render identifica el despliegue del backend como iniciado manualmente. Las capturas de producción de Vercel muestran los sitios en estado Ready, pero incluyen la opción Connect Git; por sí solas no prueban que los repositorios estén conectados para desplegar automáticamente cada cambio. La presencia de una URL publicada acredita disponibilidad de una versión, no una canalización CI/CD automática.

## 5.2. Product Implementation & Deployment

Esta sección presenta las funcionalidades y productos desarrollados por el equipo. Para cada evidencia se indica el repositorio, la versión, las historias relacionadas y las capturas correspondientes. Los diseños del capítulo IV sirven como referencia y las imágenes siguientes muestran la implementación alcanzada.

### 5.2.1. Sprint Backlogs

El Product Backlog del Capítulo III se organiza en Jira en cuatro sprints: 22 historias de usuario (US01–US22) y 31 tareas técnicas (TS01–TS31). El equipo confirmó la finalización de los 53 ítems y sus estados se actualizaron en Jira a **Listo** el **7 de octubre de 2026**. Las horas y responsables de las tablas son propuestas de planificación, porque esos campos no estaban registrados previamente.

[Tablero Jira de SafeSpace](https://milenkorvu.atlassian.net/jira/software/c/projects/SSB/boards/4/backlog)

Las capturas de Jira de esta sección conservan la vista previa a la actualización; el estado final se verificó después del cambio a Listo.

| Sprint | Objetivo | Historias de usuario | Estado |
| :----- | :------- | -------------------: | :----- |
| Sprint 1 | Base técnica, registro y acceso | 2 | 2 completadas |
| Sprint 2 | Acceso, perfil y bienestar diario | 5 | 5 completadas |
| Sprint 3 | Encuestas, comentarios y actividades | 9 | 9 completadas |
| Sprint 4 | Reportes, pagos y asistencia con IA | 6 | 6 completadas |
| **Total** |  | **22** | **22 completadas** |

Las descripciones completas y criterios de aceptación se desarrollan en el Capítulo III. Esta sección presenta únicamente las 22 historias de usuario; las tareas técnicas del backlog se omiten de estas tablas. Jira no tenía estimaciones ni responsables registrados para las historias, por lo que esos valores se presentan como propuestas.

#### Sprint 1 — Base técnica, registro y acceso

**Objetivo:** Establecer la base técnica segura de SafeSpace: API, Firestore, registro, inicio de sesión, autorización y contratos transversales.

**Registro de planeamiento:** En las evidencias revisadas no constan fecha y horario de reunión, lugar, persona que preparó el planeamiento, asistentes, velocidad acordada ni Story Points. Se deben completar desde el acta o evidencia de planificación del sprint.

| Backlog ID y título | Descripción | Estimación (h, propuesta) | Asignado a (propuesta) | Estado |
| :-------------------- | :------------------------------- | -------------: | :--------- | :----- |
| US01 - Registro de empleados | Como empleado de una organización, quiero registrar una cuenta con username, email, nombre visible y contraseña, para acceder de forma segura a las funcionalidades de bienestar. Se valida la disponibilidad de username y email, una contraseña de al menos 8 caracteres y su confirmación. | 12 | Mauricio Luis Pajés León | Completado |
| US02 - Inicio de sesión con credenciales | Como usuario registrado, quiero iniciar sesión con mi username o email y contraseña, para obtener acceso autenticado al backend. Un usuario habilitado con credenciales correctas recibe un JWT con identidad y rol. | 10 | Jose Gustavo Asto Jacome | Completado |

**Resultado del sprint en Jira:** 2 historias completadas; 0 por hacer.

![Sprint 1 de SafeSpace en Jira](../assets/images/cap5/sprints/sprint-1.png)

#### Sprint 2 — Acceso, perfil y bienestar diario

**Objetivo:** Completar recuperación de acceso, perfil y administración de usuarios, junto con el registro y resumen diario del estado de ánimo.

**Registro de planeamiento:** En las evidencias revisadas no constan fecha y horario de reunión, lugar, persona que preparó el planeamiento, asistentes, velocidad acordada ni Story Points. Se deben completar desde el acta o evidencia de planificación del sprint.

| Backlog ID y título | Descripción | Estimación propuesta (h) | Responsable propuesto | Estado |
| :-------------------- | :------------------------------- | -------------: | :--------- | :----- |
| US03 - Recuperación de contraseña de empleados | Como empleado habilitado que olvidó su contraseña, quiero solicitar un enlace temporal y definir una contraseña nueva, para recuperar el acceso a mi cuenta. El token es de un solo uso, expira y se almacena de forma segura. | 8 | Mauricio Luis Pajés León | Completado |
| US04 - Actualización de perfil y preferencias | Como usuario autenticado, quiero actualizar mi username, email, nombre visible, idioma y tema, para mantener mi cuenta configurada según mis necesidades. Se validan username y email disponibles. | 8 | Alexther Kamil Diaz Martinez | Completado |
| US05 - Administración de usuarios | Como administrador del sistema, quiero listar, crear, actualizar, habilitar, deshabilitar, eliminar usuarios y restablecer contraseñas, para controlar las cuentas y permisos de la plataforma. | 14 | Diego Andrés Ávalos Cordova | Completado |
| US06 - Registro diario de estado de ánimo | Como usuario autenticado, quiero registrar mi estado de ánimo del día, para dejar constancia de mi percepción diaria de bienestar. Solo se admite un registro por usuario y fecha. | 6 | Jean Niels Arizabal Condori | Completado |
| US07 - Resumen administrativo de estado de ánimo | Como miembro de RRHH o administrador del sistema, quiero consultar la distribución diaria de estados de ánimo y la tasa de respuesta, para conocer el pulso general de los empleados. | 8 | Milenko Ruben Cayanchi Avila | Completado |

**Resultado del sprint en Jira:** 5 historias completadas; 0 por hacer.

![Sprint 2 de SafeSpace en Jira](../assets/images/cap5/sprints/sprint-2.png)

#### Sprint 3 — Encuestas, comentarios y actividades

**Objetivo:** Habilitar encuestas, comentarios y participación mediante actividades semanales.

**Registro de planeamiento:** En las evidencias revisadas no constan fecha y horario de reunión, lugar, persona que preparó el planeamiento, asistentes, velocidad acordada ni Story Points. Se deben completar desde el acta o evidencia de planificación del sprint.

| Backlog ID y título | Descripción | Estimación propuesta (h) | Responsable propuesto | Estado |
| :-------------------- | :------------------------------- | -------------: | :--------- | :----- |
| US08 - Consulta de encuestas publicadas | Como usuario autenticado, quiero consultar las encuestas publicadas, para conocer las preguntas activas y saber si ya participé. Las encuestas en borrador o cerradas no se muestran públicamente. | 6 | Alexther Kamil Diaz Martinez | Completado |
| US09 - Respuesta única a una encuesta | Como usuario autenticado, quiero responder una encuesta publicada una sola vez, para aportar mi opinión sin duplicar mi participación. Se rechazan encuestas cerradas, borradores y respuestas repetidas. | 8 | Diego Andrés Ávalos Cordova | Completado |
| US10 - Gestión operativa de encuestas | Como miembro de RRHH o administrador del sistema, quiero crear, consultar, publicar y cerrar encuestas, para administrar las preguntas de bienestar. | 12 | Mauricio Luis Pajés León | Completado |
| US11 - Administración avanzada de encuestas | Como administrador del sistema, quiero editar, reabrir, eliminar encuestas y consultar sus respuestas detalladas, para realizar la gestión administrativa completa. | 12 | Jose Gustavo Asto Jacome | Completado |
| US12 - Comentarios anidados en encuestas | Como usuario autenticado, quiero publicar comentarios y respuestas sobre una encuesta que permite comentarios, para participar en una conversación relacionada con la pregunta. | 10 | Diego Andrés Ávalos Cordova | Completado |
| US13 - Like o unlike de comentarios | Como usuario autenticado, quiero marcar o desmarcar un comentario con un like, para expresar si considero útil su contenido. Cada usuario mantiene una sola interacción por comentario. | 6 | Alexther Kamil Diaz Martinez | Completado |
| US14 - Consulta de actividades abiertas | Como usuario autenticado, quiero consultar las actividades semanales abiertas y sus opciones, para elegir en cuál participar. Las actividades cerradas no aparecen públicamente. | 6 | Jean Niels Arizabal Condori | Completado |
| US15 - Votación y cambio de voto | Como usuario autenticado, quiero votar por una opción de una actividad abierta y poder cambiar mi voto, para participar en la decisión semanal. | 8 | Diego Andrés Ávalos Cordova | Completado |
| US16 - Gestión de actividades semanales | Como miembro de RRHH o administrador del sistema, quiero crear, consultar, cerrar y reabrir actividades semanales, para administrar las dinámicas participativas. | 10 | Milenko Ruben Cayanchi Avila | Completado |

**Resultado del sprint en Jira:** 9 historias completadas; 0 por hacer.

![Sprint 3 de SafeSpace en Jira](../assets/images/cap5/sprints/sprint-3.png)

#### Sprint 4 — Reportes, pagos y asistencia con IA

**Objetivo:** Completar reportes laborales, registro administrativo de pagos y conversaciones de apoyo con IA.

**Registro de planeamiento:** En las evidencias revisadas no constan fecha y horario de reunión, lugar, persona que preparó el planeamiento, asistentes, velocidad acordada ni Story Points. Se deben completar desde el acta o evidencia de planificación del sprint.

| Backlog ID y título | Descripción | Estimación propuesta (h) | Responsable propuesto | Estado |
| :-------------------- | :------------------------------- | -------------: | :--------- | :----- |
| US17 - Creación de reportes anónimos o identificados | Como usuario autenticado, quiero enviar un reporte con categoría, título, descripción, prioridad y opción de anonimato, para comunicar una situación que requiere atención. | 10 | Alexther Kamil Diaz Martinez | Completado |
| US18 - Consulta de reportes propios | Como usuario autenticado, quiero consultar mis reportes identificados, para revisar los casos que envié y su estado. Los reportes anónimos no se vinculan a una cuenta. | 6 | Diego Andrés Ávalos Cordova | Completado |
| US19 - Revisión y actualización de reportes | Como miembro de RRHH o administrador del sistema, quiero consultar todos los reportes y cambiar su estado, para realizar el seguimiento administrativo de los casos. | 8 | Milenko Ruben Cayanchi Avila | Completado |
| US20 - Registro de planes y comprobantes de pago | Como administrador del sistema, quiero consultar los planes disponibles y registrar un pago con beneficiario, plan y comprobante PDF, para conservar evidencia de una renovación o contratación registrada manualmente. | 12 | Jose Gustavo Asto Jacome | Completado |
| US21 - Administración de conversaciones propias | Como empleado, quiero crear, listar, renombrar y eliminar mis conversaciones de SafeSpace, para organizar mis espacios privados de apoyo emocional. | 8 | Jean Niels Arizabal Condori | Completado |
| US22 - Envío de mensajes al asistente | Como empleado, quiero enviar mensajes al asistente y recibir una respuesta considerando parte del historial, para obtener orientación breve de bienestar emocional. | 12 | Mauricio Luis Pajés León | Completado |

**Resultado del sprint en Jira:** 6 historias completadas; 0 por hacer.

![Sprint 4 de SafeSpace en Jira](../assets/images/cap5/sprints/sprint-4.png)

**Trazabilidad de commits y pruebas por sprint.** Los repositorios contienen commits y los artefactos de prueba descritos en el Capítulo VI, pero no se encontró una relación verificable entre un commit o una ejecución concreta y cada sprint/ítem de Jira. El cambio de estado a Listo refleja la confirmación del equipo, pero no añade esa relación de trazabilidad. Para la entrega final se deben añadir los SHA y resultados de prueba vinculados a cada sprint.

**Observaciones de trazabilidad y calidad del backlog.** Las tablas muestran las 22 historias de usuario (US01–US22) y omiten las 31 tareas técnicas (TS01–TS31), que todavía se encuentran en Jira mientras se completa su retiro. Las horas y los responsables son propuestas de planificación, no valores registrados previamente.

### 5.2.2. Implemented Landing Page Evidence

La landing presenta SafeSpace, explica su propuesta de valor y permite que una organización interesada solicite información o una demostración. La evidencia siguiente debe mostrar la versión realmente publicada y vinculada con sus historias de visitante.

| Evidencia                 | Información                                 |
| :------------------------ | :------------------------------------------ |
| Repositorio               | https://github.com/TheSuccesfulOnes/Landing-page-SafeSpace |
| URL publicada             | https://landing-page-safe-space.vercel.app/                |
| Commit/versión            | [a60e0bc](https://github.com/TheSuccesfulOnes/Landing-page-SafeSpace/commit/a60e0bcc070ceacf8466627ea67dd4e8bd688b87) / versión 1 |
| Contenido documentado | Presentación del producto, segmentos de uso, planes y contacto. |
| Interfaz               | Navegación localizada y composición adaptable a escritorio y móvil. |

![Landing Page de SafeSpace en escritorio](../assets/images/cap5/landing/landing-desktop.png)

![Landing Page de SafeSpace en móvil](../assets/images/cap5/landing/landing-mobile.png)

### 5.2.3. Implemented Frontend-Web Application Evidence

La aplicación web brinda a empleados y RR. HH. acceso a los flujos de bienestar que se muestran en las capturas: estado de ánimo, encuestas, actividades, comentarios, reportes, preferencias y resumen administrativo.

| Evidencia                     | Información                                                 |
| :---------------------------- | :---------------------------------------------------------- |
| Repositorio                   | https://github.com/TheSuccesfulOnes/Frontend-Web-SafeSpace |
| URL publicada o pasos locales | https://safespace-web-nine.vercel.app/                    |
| Commit/versión                | [33b18e6](https://github.com/TheSuccesfulOnes/Frontend-Web-SafeSpace/commit/33b18e67a856df88fd5d9644e85832c1f8af2848) / versión 1 |
| Tecnología implementada       | React, Vite y TypeScript                                    |
| Historias evidenciadas mediante capturas | US01, US02, US04, US06, US07, US08, US09, US10, US12, US13, US14, US15, US16, US17, US18, US19, US21 y US22 |

Las historias anteriores se identificaron revisando las páginas y servicios del repositorio. Las capturas visuales correspondientes se presentan a continuación, agrupadas por tipo de usuario y flujo.

Las historias administrativas US05, US11, US16, US19 y US20 se complementan con las capturas de la consola administrativa incluidas después de la evidencia del frontend web.

#### Evidencias visuales del frontend web

##### Empleado: mood, encuestas, actividades, reportes y preferencias

![Inicio de sesión](../assets/images/cap5/web/frontend-web-login.png)

![Registro de usuario](../assets/images/cap5/web/frontend-web-register.png)

![Estado de ánimo del empleado](../assets/images/cap5/web/frontend-web-mood.png)

![Encuestas del empleado](../assets/images/cap5/web/frontend-web-surveys.png)

![Actividades semanales del empleado](../assets/images/cap5/web/frontend-web-activities.png)

![Formulario de reporte anónimo](../assets/images/cap5/web/frontend-web-report-form.png)

![Mis reportes](../assets/images/cap5/web/frontend-web-my-reports.png)

![Preferencias y cuenta](../assets/images/cap5/web/frontend-web-settings.png)

![Chat con IA](../assets/images/cap5/web/frontend-web-ai-chat.png)

##### RR. HH.: resumen, encuestas, comentarios, actividades y reportes

![Resumen de bienestar de RR. HH.](../assets/images/cap5/web/frontend-hr-home.png)

![Gestión de encuestas de RR. HH.](../assets/images/cap5/web/frontend-hr-management-surveys.png)

![Comentarios de una encuesta](../assets/images/cap5/web/frontend-hr-management-comments.png)

![Gestión de actividades de RR. HH.](../assets/images/cap5/web/frontend-hr-management-activities.png)

![Seguimiento de reportes de RR. HH.](../assets/images/cap5/web/frontend-hr-reports.png)

![Despliegue de la aplicación web de SafeSpace en Vercel](../assets/images/cap5/deployment/frontend-vercel.jpeg)

La aplicación administrativa cuenta con un repositorio y despliegue independientes:

| Evidencia                     | Información                                                  |
| :---------------------------- | :----------------------------------------------------------- |
| Repositorio                   | https://github.com/TheSuccesfulOnes/Frontend-Admin-SafeSpace |
| URL publicada                 | https://safespace-admin-alpha.vercel.app/                    |
| Commit/versión                | [b76e3e4](https://github.com/TheSuccesfulOnes/Frontend-Admin-SafeSpace/commit/b76e3e495c76243b8591b29a61d3ee9ca06c49d4) / versión 1 |

##### Evidencias visuales de la consola administrativa

![Resumen de la consola administrativa](../assets/images/cap5/admin/admin-summary.png)

![Gestión de administradores](../assets/images/cap5/admin/admin-administrators.png)

![Gestión de empleados](../assets/images/cap5/admin/admin-employees.png)

![Gestión de miembros de RR. HH.](../assets/images/cap5/admin/admin-hr-members.png)

![Gestión de encuestas administrativas](../assets/images/cap5/admin/admin-surveys.png)

![Gestión de actividades administrativas](../assets/images/cap5/admin/admin-activities.png)

![Gestión de reportes administrativos](../assets/images/cap5/admin/admin-reports.png)

![Gestión de pagos y planes](../assets/images/cap5/admin/admin-payments.png)

![Despliegue de la aplicación administrativa de SafeSpace en Vercel](../assets/images/cap5/deployment/admin-vercel.jpeg)

### 5.2.4. Acuerdo de Servicio - SaaS

Este acuerdo resume, con fines académicos, las condiciones de servicio que SafeSpace presenta a organizaciones interesadas. Las tarifas y funcionalidades se basan en la sección de planes de la Landing Page y en el alcance actualmente documentado del producto.

| Elemento | Condición de servicio |
| :--- | :--- |
| Servicio | Acceso a SafeSpace para apoyar el bienestar laboral mediante registro de ánimo, encuestas, actividades, reportes y orientación general con IA, junto con herramientas de gestión para Recursos Humanos. |
| Modalidad mensual | S/ 20 por mes (US$ 5.33 referenciales). |
| Modalidad anual | S/ 150 por año (US$ 40 referenciales); la Landing Page la presenta como la opción de mejor valor frente a doce pagos mensuales. |
| Moneda | La Landing Page permite consultar precios en soles o dólares con una tasa de conversión referencial publicada de S/ 3.75 por dólar. |
| Activación y registro | El sitio permite elegir un plan y contactar al equipo. La API documenta el registro administrativo de planes y comprobantes PDF; no se presenta como una pasarela de cobro en línea ni como renovación automática. |
| Soporte y contacto | La organización puede iniciar la coordinación mediante el formulario de contacto de la Landing Page. |
| Privacidad y uso de IA | El uso del servicio se complementa con los documentos de privacidad, términos y política de uso de IA publicados en el sitio. El asistente ofrece orientación general y no sustituye atención profesional. |
| Disponibilidad | El servicio se publica mediante Vercel y Render. El proyecto no publica un porcentaje contractual de disponibilidad ni un tiempo garantizado de respuesta. |
| Alcance del documento | Propuesta de servicio para el informe académico; no constituye un contrato comercial firmado. Las condiciones particulares de cada organización se acuerdan antes de una contratación. |

#### Documentos de servicio publicados

- [Términos y condiciones](https://landing-page-safe-space.vercel.app/documents/safespace-terminos-y-condiciones.pdf)
- [Política de privacidad](https://landing-page-safe-space.vercel.app/documents/safespace-politica-de-privacidad.pdf)
- [Política de uso de IA](https://landing-page-safe-space.vercel.app/documents/safespace-politica-de-uso-de-ia.pdf)

### 5.2.5. Implemented Native-Mobile Application Evidence

La aplicación nativa documentada para SafeSpace es Android con Kotlin y Jetpack Compose. Esta sección demuestra su ejecución en un emulador o dispositivo y relaciona cada función mostrada con una historia implementada.

| Evidencia                | Información                                                   |
| :----------------------- | :------------------------------------------------------------ |
| Repositorio              | https://github.com/TheSuccesfulOnes/Frontend-Movil-SafeSapace |
| Plataforma/dispositivo   | Android; SDK 36 y Java 21                                    |
| Versión de la aplicación | [ebe0602](https://github.com/TheSuccesfulOnes/Frontend-Movil-SafeSapace/commit/ebe0602e05f197a6af5fe80f625c25a615f01db0) / versión 1 |
| Artefacto                | [APK y carpeta de distribución](https://upcedupe-my.sharepoint.com/personal/u202313922_upc_edu_pe/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fu202313922%5Fupc%5Fedu%5Fpe%2FDocuments%2FSafeSpace%2DMovil&ga=1) |
| Instalación y ejecución  | Abrir en Android Studio con SDK 36 y Java 21; ejecutar `.\gradlew.bat clean app:build`. |
| Historias declaradas en el README del repositorio | US01, US02, US04, US06, US07, US08, US09, US12, US13, US14, US15, US17, US18, US21 y US22. |

| Flujo                                | Estado real | Evidencia         |
| :----------------------------------- | :---------: | :---------------- |
| Inicio y registro de ánimo           | Implementado | `mobile-home.png` muestra el estado “Muy bien” registrado. |
| Perfil y configuración               | Implementado | Perfil, cambio de idioma, tema oscuro y confirmación de actualización. |
| Encuestas y respuestas               | Implementado | Estados pendiente, respuesta escrita, respuesta enviada y respuesta registrada. |
| Comentarios anónimos                 | Implementado | Visualización, likes, respuestas y eliminación de comentarios propios. |
| Actividad semanal                    | Implementado | Voto registrado y posibilidad de cambiarlo. |
| Chat AI                              | Implementado | Conversación nueva con respuesta de orientación inicial. |

#### Evidencias visuales de la aplicación Android

![Inicio y registro de ánimo en Android](../assets/images/cap5/mobile/mobile-home.png)

![Centro de encuestas en Android](../assets/images/cap5/mobile/mobile-surveys-overview.png)

![Encuesta pendiente sin respuesta](../assets/images/cap5/mobile/mobile-survey-empty.png)

![Encuesta con respuesta escrita](../assets/images/cap5/mobile/mobile-survey-filled.png)

![Respuesta enviada correctamente](../assets/images/cap5/mobile/mobile-survey-submitted.png)

![Encuesta con respuesta registrada](../assets/images/cap5/mobile/mobile-survey-response.png)

![Comentarios anónimos de una encuesta](../assets/images/cap5/mobile/mobile-survey-comments.png)

![Respuestas y acciones sobre comentarios](../assets/images/cap5/mobile/mobile-survey-replies.png)

![Actividad semanal con voto registrado](../assets/images/cap5/mobile/mobile-activity-vote.png)

![Conversación con Chat AI en Android](../assets/images/cap5/mobile/mobile-ai-chat.png)

![Perfil del empleado en Android](../assets/images/cap5/mobile/mobile-profile.png)

![Configuración de cuenta en español](../assets/images/cap5/mobile/mobile-settings-es.png)

![Confirmación de actualización de cuenta](../assets/images/cap5/mobile/mobile-settings-es-success.png)

![Configuración en inglés y tema oscuro](../assets/images/cap5/mobile/mobile-settings-en-dark.png)

Las capturas recibidas documentan los flujos móviles incluidos en esta entrega y el APK está disponible en la carpeta de distribución compartida.

### 5.2.6. Implemented RESTful API and/or Serverless Backend Evidence

La API conecta las aplicaciones con las reglas de negocio y la persistencia de SafeSpace. Esta descripción se limita a módulos y endpoints presentes en el código y comprobados durante el Sprint.

| Evidencia                        | Información                                                                            |
| :------------------------------- | :------------------------------------------------------------------------------------- |
| Repositorio                      | https://github.com/TheSuccesfulOnes/Backend-SafeSpace |
| Stack implementado               | Java 21 y Spring Boot 3.5.5 |
| URL base o instrucciones locales | https://safespace-backend-q3uv.onrender.com |
| Base de datos                   | Firebase Firestore como única persistencia del backend. |
| Commit/versión                   | [4218059](https://github.com/TheSuccesfulOnes/Backend-SafeSpace/commit/42180596587208ca5ba4650d905e1cb4e8a00515) / versión 1 |
| Historias soportadas             | US01–US22, de acuerdo con los controladores y servicios presentes en el repositorio. |

| Módulo                  | Método y ruta reales |
| :---------------------- | :------------------- |
| Autenticación           | `POST /api/v1/auth/login` |
| Estado de ánimo         | `GET /api/v1/mood/today` |
| Encuestas y comentarios | `GET /api/v1/surveys`; `GET /api/v1/surveys/1/comments` |
| Actividades             | `GET /api/v1/activities` |
| Reportes                | `GET /api/v1/reports` |

#### Evidencias adicionales de bounded contexts

| Contexto | Método y ruta reales |
| :------- | :------------------- |
| Perfil | `GET /api/v1/profile` |
| IA | `GET /api/v1/ai/conversations` |
| Administración de encuestas | `GET /api/v1/admin/surveys` |
| Administración de actividades | `GET /api/v1/admin/activities` |
| Administración de usuarios | `GET /api/v1/admin/users` |
| Pagos | `GET /api/v1/admin/payments/plans` |

#### Historias soportadas por los controladores del backend

La siguiente relación se obtuvo revisando los controladores y las rutas del repositorio `Backend-SafeSpace`.

| Contexto del backend | Controladores/rutas revisados | Historias relacionadas |
| :------------------- | :---------------------------- | :--------------------- |
| Autenticación | `/api/v1/auth/register`, `/api/v1/auth/login` y recuperación de contraseña | US01, US02 |
| Perfil | `/api/v1/profile`, `/account` y `/preferences` | US04 |
| Administración de usuarios | `/api/v1/admin/users` y `/hr-members` | US05 |
| Estado de ánimo | `/api/v1/mood/today` y `/summary` | US06, US07 |
| Encuestas | `/api/v1/surveys` y `/api/v1/admin/surveys` | US08, US09, US10, US11 |
| Comentarios | `/api/v1/surveys/{surveyId}/comments` y `/{commentId}/like` | US12, US13 |
| Actividades | `/api/v1/activities` y `/api/v1/admin/activities` | US14, US15, US16 |
| Reportes | `/api/v1/reports`, `/mine` y `/{id}/status` | US17, US18, US19 |
| Pagos | `/api/v1/admin/payments/plans` y `/api/v1/admin/payments` | US20 |
| IA | `/api/v1/ai/conversations` y `/messages` | US21, US22 |

El `pom.xml` declara Spring Boot 3.5.5 y Java 21. De acuerdo con el README y los adaptadores de infraestructura del backend, Firestore es la única persistencia de ejecución. Las migraciones SQL históricas no forman parte del arranque actual.

Las capturas siguientes presentan la documentación y las operaciones de los bounded contexts disponibles en Swagger UI.

##### Autenticación

![Login en Swagger](../assets/images/cap5/api/auth-login.png)

##### Recursos documentados en Swagger

Swagger UI reúne las operaciones de autenticación, perfil, bienestar, encuestas, comentarios, actividades, reportes, IA, administración y planes. La captura general y la operación de autenticación ilustran la documentación OpenAPI disponible.

![Catálogo de operaciones REST en Swagger UI](../assets/images/cap5/api/swagger-ui.png)

### 5.2.7. RESTful API Documentation

La especificación OpenAPI debe coincidir con los endpoints ejecutables. Para cada operación se documentan método, ruta, propósito, rol requerido, parámetros, cuerpo de solicitud, respuestas y errores.

URL de Swagger/OpenAPI: [https://safespace-backend-q3uv.onrender.com/swagger-ui/index.html](https://safespace-backend-q3uv.onrender.com/swagger-ui/index.html).

| Método | Ruta | Propósito | Parámetros/body | Rol requerido | Historia |
| :-----: | :--- | :-------- | :-------------- | :------------ | :------- |
| `POST` | `/api/v1/auth/register` | Registrar una cuenta de empleado | JSON de registro | Público | US01 |
| `POST` | `/api/v1/auth/login` | Autenticar al usuario | JSON con identificador y contraseña | Público | US02 |
| `GET` | `/api/v1/profile` | Consultar el perfil actual | Sin body | Usuario autenticado | US04 |
| `PUT` | `/api/v1/profile/preferences` | Actualizar preferencias | Idioma y tema en JSON | Usuario autenticado | US04 |
| `GET` | `/api/v1/mood/today` | Consultar el estado de ánimo del día | Sin body | Usuario autenticado | US06 |
| `GET` | `/api/v1/mood/summary` | Consultar el resumen agregado de mood | Sin body | RR. HH. o administrador | US07 |
| `GET` | `/api/v1/surveys` | Consultar encuestas publicadas | Sin body | Usuario autenticado | US08 |
| `POST` | `/api/v1/surveys/{id}/answers` | Registrar una respuesta | `id` de encuesta y respuesta en JSON | Usuario autenticado | US09 |
| `GET` | `/api/v1/surveys/{surveyId}/comments` | Consultar comentarios de una encuesta | `surveyId` en la ruta | Usuario autenticado | US12 |
| `POST` | `/api/v1/surveys/{surveyId}/comments/{commentId}/like` | Registrar un like | `surveyId` y `commentId` en la ruta | Usuario autenticado | US13 |
| `GET` | `/api/v1/activities` | Consultar actividades abiertas | Sin body | Usuario autenticado | US14 |
| `POST` | `/api/v1/activities/{id}/votes` | Registrar o cambiar un voto | `id` y `option_id` en JSON | Usuario autenticado | US15 |
| `GET` | `/api/v1/reports/mine` | Consultar reportes propios | Sin body | Usuario autenticado | US18 |
| `GET` | `/api/v1/reports` | Consultar reportes para seguimiento | Sin body | RR. HH. o administrador | US19 |
| `GET` | `/api/v1/ai/conversations` | Listar conversaciones con la IA | Sin body | Empleado | US21 |
| `POST` | `/api/v1/ai/conversations/{id}/messages` | Enviar un mensaje al asistente | `id` y contenido en JSON | Empleado | US22 |
| `GET` | `/api/v1/admin/users` | Listar usuarios | Sin body | Administrador | US05 |
| `GET` | `/api/v1/admin/surveys` | Consultar encuestas en administración | Sin body | Administrador | US10, US11 |
| `GET` | `/api/v1/admin/activities` | Consultar actividades en administración | Sin body | Administrador | US16 |
| `GET` | `/api/v1/admin/payments/plans` | Consultar planes disponibles | Sin body | Administrador | US20 |

La tabla resume las operaciones documentadas en OpenAPI y las capturas visuales asociadas a los bounded contexts del backend.

![Swagger UI de SafeSpace](../assets/images/cap5/api/swagger-ui.png)

### 5.2.8. Team Collaboration Insights

La evidencia disponible combina actividad de Jira y referencias de commits ya identificadas en la sección 5.1.2. No se dispone de una captura reciente de Insights por cada repositorio ni de un reporte de Pull Requests del periodo de esta entrega; por ello no se atribuyen contribuciones individuales ni porcentajes de participación.

| Fuente | Dato verificable | Alcance |
| :--- | :--- | :--- |
| Jira, tablero del proyecto SafeSpace | 53 ítems en cuatro sprints: 22 historias y 31 tareas técnicas, todos en estado Listo. | El capítulo V muestra únicamente las historias; responsables y horas son propuestas. |
| GitHub | La sección 5.1.2 identifica commits de referencia por producto y fecha. | Son ejemplos de cambios publicados; no constituyen un conteo completo de contribuciones del sprint. |
| GitHub Insights | La imagen siguiente procede de la evidencia usada en AV1. | Es un registro histórico agregado; no demuestra por sí solo la actividad del periodo actual ni de todos los repositorios. |

![Captura histórica de GitHub Insights usada como referencia en AV1](../assets/images/shared/evidence-av1.png)

Para completar esta evidencia en la entrega final se requiere actualizar la captura de Insights para los repositorios del backend y las interfaces, e incluir el rango de fechas o los commits/PRs vinculados a cada sprint.

## 5.3. Video About-the-Product

El video **About the Product-SafeSpace** presenta el problema de comunicación y bienestar laboral, la propuesta de valor de SafeSpace, su modelo de suscripción y un recorrido por la Landing Page y las aplicaciones. La tabla registra los enlaces y el contenido temporal mostrado.

| Campo | Información |
| :---- | :---------- |
| Título | About the Product-SafeSpace |
| Duración | 02:06 |
| URL Microsoft Stream / OneDrive | [Ver video en Microsoft 365](https://upcedupe-my.sharepoint.com/:v:/g/personal/u202412316_upc_edu_pe/IQCGpIJb9aonTLG1yEctvKw2ASu2vkNiDx2fEkP3M_4wXiA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=g11Gr9) |
| URL YouTube | [Ver video en YouTube](https://youtu.be/LQMtdRskbRs) |

| Tiempo | Contenido |
| :----: | :-------- |
| 00:00–00:15 | Presentación del problema de bienestar y comunicación dentro del entorno laboral. |
| 00:15–00:22 | Identidad de SafeSpace y presentación inicial del modelo de suscripción en la Landing Page. |
| 00:22–00:38 | Recorrido del empleado por la aplicación web: historial del asistente, registro del estado de ánimo y encuestas. |
| 00:38–00:47 | Contexto organizacional y necesidad de información para Recursos Humanos. |
| 00:47–01:08 | Creación de un reporte confidencial y revisión administrativa de reportes y estados. |
| 01:08–01:23 | Historial y conversación con el asistente de IA. |
| 01:23–01:38 | Gestión de actividades semanales y encuestas desde el espacio de Recursos Humanos. |
| 01:38–01:53 | Planes de suscripción y formulario de contacto de la Landing Page. |
| 01:53–02:02 | Síntesis de los beneficios y presentación del ecosistema web y móvil. |
| 02:02–02:06 | Cierre con la identidad visual del producto. |

### Evidencia visual y retroalimentación de usuario

La siguiente captura representa la interfaz de registro de ánimo del producto, uno de los flujos descritos en el recorrido. No se presenta como fotograma extraído del video.

![Interfaz web de registro del estado de ánimo, relacionada con el recorrido del producto](../assets/images/cap5/web/frontend-web-mood.png)

**Testimonio positivo de usuario:** pendiente. En los archivos revisados no se encontró una declaración atribuible a una persona usuaria ni su autorización para publicarla. Se debe incorporar una cita breve con fuente o evidencia verificable antes de la entrega final; no se inventa una opinión.


\newpage
