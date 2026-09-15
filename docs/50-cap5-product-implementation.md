# Capítulo V: Product Implementation

Este capítulo documenta la configuración, implementación y evidencia verificable de SafeSpace durante el Avance 1. La trazabilidad se mantiene entre las historias del Product Backlog, las tareas del Sprint, los cambios en los repositorios, las pruebas y la ejecución de cada producto. Las capturas, enlaces y datos de planificación deben corresponder al trabajo realmente realizado por el equipo.

## 5.1. Software Configuration Management

La gestión de configuración de SafeSpace define las herramientas, repositorios, ramas, convenciones y procedimientos de despliegue utilizados por el equipo. Su propósito es mantener una versión reproducible del producto y permitir rastrear cada cambio hasta la historia o tarea que lo motivó.

### 5.1.1. Software Development Environment Configuration

La siguiente tabla identifica las herramientas y tecnologías del proyecto. Las versiones se deben contrastar con los archivos de configuración de cada repositorio antes de entregar el informe.

| Actividad             | Herramienta o tecnología                                       | Uso en SafeSpace                                                          | Referencia o evidencia                                                                                 | Versión                                    |
| :-------------------- | :------------------------------------------------------------- | :------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------- | :----------------------------------------- |
| Gestión del proyecto  | Jira                                                           | Gestión del Product Backlog, Sprint Backlog, historias, tareas y estados. | [Tablero de SafeSpace](https://milenkorvu.atlassian.net/jira/software/c/projects/SSB/boards/4/backlog) | SaaS                                       |
| Control de versiones  | Git                                                            | Registro local de cambios, ramas y etiquetas.                             | [Git](https://git-scm.com/)                                                                            | [[COMPLETAR: versión usada]]               |
| Repositorios          | GitHub                                                         | Hospedaje del informe y del código; Pull Requests, issues y colaboración. | Organización: https://github.com/TheSuccesfulOnes                                                      | SaaS                                       |
| Diseño UX/UI          | Figma                                                          | Elaboración y revisión de wireframes, mockups, flujos y prototipos.       | https://www.figma.com/design/7CoYj5tfiNTLD8kScA5uTF/Untitled?node-id=0-1&t=8T79jUNWludeTlcC-1          | SaaS                                       |
| Documentación         | Markdown y Pandoc                                              | Redacción del informe y generación del PDF.                               | Repositorio del informe: https://github.com/TheSuccesfulOnes/Report                                    | [[COMPLETAR: versión de Pandoc]]           |
| Landing Page          | HTML5, CSS3 y JavaScript                                       | Presentación pública de SafeSpace y acceso a sus acciones de contacto.    | https://github.com/TheSuccesfulOnes/Landing-Page-SafeSpace.git                                         | [[COMPLETAR: versiones verificadas]]       |
| Aplicación web        | React y Vite; TypeScript si está configurado en el repositorio | Interfaz web para empleados y RR. HH.                                     | https://github.com/TheSuccesfulOnes/Frontend-Web-SafeSpace.git                                         | [[COMPLETAR desde package.json]]           |
| Aplicación móvil      | Kotlin y Jetpack Compose                                       | Aplicación nativa Android para empleados.                                 | https://github.com/TheSuccesfulOnes/Frontend-Movil-SafeSapace.git                                      | [[COMPLETAR desde Gradle]]                 |
| API REST              | Java y Spring Boot; Spring Data JPA si está configurado        | Reglas de negocio y servicios consumidos por las aplicaciones.            | https://github.com/TheSuccesfulOnes/Backend-SafeSpace.git                                              | [[COMPLETAR desde pom.xml o build.gradle]] |
| Base de datos         | MySQL y Flyway                                                 | Persistencia relacional y evolución versionada del esquema.               | [[INSERTAR CONFIGURACIÓN/MIGRACIONES DEL REPOSITORIO API]]                                             | [[COMPLETAR desde la configuración real]]  |
| Pruebas de API        | Postman y Swagger UI                                           | Ejecución manual de requests y consulta de contratos disponibles.         | [[INSERTAR COLECCIÓN POSTMAN Y URL SWAGGER]]                                                           | [[COMPLETAR: versión/URL]]                 |
| Pruebas automatizadas | JUnit y Mockito, si están configurados en el repositorio       | Validación unitaria y de integración del backend.                         | [[INSERTAR RUTA DE PRUEBAS Y REPORTE]]                                                                 | [[COMPLETAR desde el proyecto]]            |
| Despliegue            | [[COMPLETAR: proveedor real por producto]]                     | Publicación de la landing, aplicaciones y API.                            | [[INSERTAR URLS DE PRODUCCIÓN O DISTRIBUCIÓN]]                                                         | SaaS / [[COMPLETAR]]                       |

**Stack implementado.** El equipo confirma React + Vite para el frontend, Kotlin para la aplicación Android y Java + Spring Boot para el backend. El enunciado del curso especifica Vue/PrimeVue para la aplicación web y ASP.NET Core/C# para la API. Por tanto, el stack implementado no coincide con el stack indicado en el enunciado. Mantener en este informe las tecnologías reales; confirmar con el docente si la desviación está autorizada y documentar esa decisión. No cambiar los nombres de tecnologías para aparentar cumplimiento.

Cada repositorio debe incluir un README con requisitos previos, instalación, ejecución local, pruebas y configuración necesaria. Los secretos se mantienen fuera del repositorio; se incluye un archivo de ejemplo con los nombres de las variables, nunca sus valores reales.

### 5.1.2. Source Code Management

El código y el informe se mantienen en repositorios GitHub públicos. La estructura prevista separa los productos para facilitar su construcción, revisión y despliegue.

| Producto                 | URL del repositorio                                               | Contenido                                                                 |
| :----------------------- | :---------------------------------------------------------------- | :------------------------------------------------------------------------ |
| Informe                  | https://github.com/TheSuccesfulOnes/Report                        | Capítulos Markdown, assets y configuración de exportación del informe.    |
| Landing Page             | https://github.com/TheSuccesfulOnes/Landing-page-SafeSpace.git    | Código de la página informativa de SafeSpace.                             |
| Aplicación web           | https://github.com/TheSuccesfulOnes/Frontend-Web-SafeSpace.git    | Interfaz web para empleados y RR. HH.                                     |
| Aplicación móvil Android | https://github.com/TheSuccesfulOnes/Frontend-Movil-SafeSapace.git | Aplicación nativa y configuración de compilación.                         |
| API REST                 | https://github.com/TheSuccesfulOnes/Backend-SafeSpace.git         | Servicios, persistencia y pruebas unitarias, de integración y aceptación. |

#### GitFlow Workflow

El flujo de ramas usado por el equipo es el siguiente. La captura y los enlaces a ramas y Pull Requests deben probar que este flujo se aplicó durante el Sprint.

| Rama                      | Propósito                                                      | Regla                                                                          |
| :------------------------ | :------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| main                      | Versión estable revisada para entrega o despliegue.            | Recibe cambios mediante Pull Request aprobado desde una rama release o hotfix. |
| develop                   | Integración del trabajo aceptado para el siguiente incremento. | Recibe ramas feature después de revisión y validación.                         |
| feature/US-ID-descripcion | Implementación de una historia de usuario o tarea.             | Se crea desde develop y se integra por Pull Request.                           |
| release/vX.Y.Z            | Preparación de una versión.                                    | Se usa para estabilizar y validar el incremento antes de integrarlo a main.    |
| hotfix/vX.Y.Z-descripcion | Corrección urgente en una versión estable.                     | Se crea desde main y luego se sincroniza con develop.                          |

Las ramas se nombran en inglés y se relacionan con una historia o tarea cuando corresponde. Cada Pull Request describe el cambio, referencia su historia, identifica pruebas ejecutadas y adjunta evidencia visual cuando modifica una interfaz.

#### Semantic Versioning

El equipo identifica las versiones mediante el formato MAJOR.MINOR.PATCH:

| Componente | Se incrementa cuando…                                        |
| :--------- | :----------------------------------------------------------- |
| MAJOR      | Se introduce un cambio incompatible con la versión anterior. |
| MINOR      | Se añade funcionalidad compatible.                           |
| PATCH      | Se corrige un defecto o se realiza una mejora compatible.    |

Versión entregada en AV1: [[COMPLETAR: etiqueta real del repositorio o indicar “sin etiqueta publicada”]].

#### Conventional Commits

Los commits usan el formato tipo(scope): descripción breve. Se emplean, entre otros, los tipos feat para funcionalidades, fix para correcciones, docs para documentación, test para pruebas, refactor para cambios internos y chore para mantenimiento.

Ejemplos de formato:

- feat(web): add employee mood check-in
- fix(api): reject duplicate daily mood entry
- test(api): cover anonymous report creation
- docs(report): document sprint evidence

Los ejemplos anteriores describen el formato; reemplázalos por enlaces a commits reales al documentar el Sprint.

#### Pull Requests

Cada Pull Request debe identificar las historias o tareas relacionadas, resumir el cambio, incluir el resultado de las pruebas y tener revisión de otro integrante antes de integrarse. 
### 5.1.3. Source Code Style Guide & Conventions

Los nombres de clases, funciones, variables, ramas y archivos de código se escriben en inglés. Cada repositorio debe aplicar un formateador y un analizador estático cuando su stack lo permita; sus configuraciones se conservan junto al código.

| Producto                      | Convenciones aplicadas                                                                                                                                                                                                                                                                                 |
| :---------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Landing Page                  | HTML semántico; CSS mobile-first; nombres de clases consistentes; JavaScript separado del HTML; validación de formularios y optimización de imágenes.                                                                                                                                                  |
| Aplicación web (React + Vite) | Componentes reutilizables; separación entre páginas, componentes, servicios y rutas; nombres PascalCase para componentes y camelCase para funciones; estados de carga, error y vacío. Si el repositorio usa TypeScript, tipar explícitamente modelos, requests y responses; confirmar en package.json. |
| Aplicación móvil              | Convenciones oficiales de Kotlin; separación entre datos, dominio y presentación; lógica de negocio fuera de las vistas; estados explícitos de carga, éxito, error y vacío; almacenamiento seguro de datos sensibles.                                                                                  |
| API REST (Java + Spring Boot) | Capas o módulos con responsabilidades claras; DTO para entrada y salida; validación de datos; códigos HTTP consistentes; errores controlados; documentación OpenAPI; secretos fuera del código fuente.                                                                                                 |
| Base de datos                 | Tablas en snake_case y plural; claves primarias y foráneas explícitas; restricciones únicas e índices según las consultas; migraciones versionadas y revisables.                                                                                                                                       |
| Pruebas                       | Nombres que expresen el comportamiento esperado; pruebas vinculadas a historias; datos de prueba no sensibles; ejecución reproducible desde el repositorio.                                                                                                                                            |


Los escenarios de aceptación mantienen una sintaxis uniforme de Gherkin: Feature, Scenario, Given, When, Then y And. Se emplean criterios observables y comprobables; cada escenario se vincula con su historia y con una prueba cuando existe automatización. Referencias de estilo que deben constar también en la bibliografía: [WHATWG HTML Living Standard](https://html.spec.whatwg.org/), [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide), [Microsoft C# coding conventions](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions) y [Gherkin Reference](https://cucumber.io/docs/gherkin/reference/). Usar las guías que correspondan al stack aprobado y realmente implementado.

### 5.1.4. Software Deployment Configuration

El despliegue debe poder repetirse desde una rama y un commit identificables. La tabla registra la configuración real de cada artefacto.

| Producto                 | Plataforma                                   | Rama/commit                     | Construcción o distribución                 | Variables de entorno                                                      | URL o artefacto                               |
| :----------------------- | :------------------------------------------- | :------------------------------ | :------------------------------------------ | :------------------------------------------------------------------------ | :-------------------------------------------- |
| Landing Page             | [[COMPLETAR: proveedor]]                     | [[COMPLETAR]]                   | [[COMPLETAR: comando o proceso]]            | [[COMPLETAR: nombres; indicar “ninguna” si aplica]]                       | [[INSERTAR URL]]                              |
| Aplicación web           | [[COMPLETAR: proveedor]]                     | [[COMPLETAR]]                   | [[COMPLETAR desde el repositorio]]          | VITE_API_BASE_URL o equivalente real                                      | [[INSERTAR URL]]                              |
| Aplicación móvil Android | Android Studio / [[COMPLETAR: distribución]] | [[COMPLETAR]]                   | Compilación Gradle y generación del APK/AAB | URL de API y configuración segura aplicable                               | [[INSERTAR ENLACE AL APK/AAB O DISTRIBUCIÓN]] |
| API REST                 | [[COMPLETAR: proveedor]]                     | [[COMPLETAR]]                   | [[COMPLETAR desde el repositorio]]          | URL de base de datos, usuario, contraseña, JWT y demás nombres requeridos | [[INSERTAR URL BASE]]                         |
| Base de datos            | [[COMPLETAR: proveedor o ejecución local]]   | [[COMPLETAR migración/esquema]] | Migraciones del repositorio                 | Variables de conexión                                                     | [[INDICAR ENTORNO; NO PUBLICAR CREDENCIALES]] |

#### Procedimiento reproducible

1. Clonar el repositorio correspondiente y cambiar al commit documentado.
2. Instalar las dependencias con el comando definido en su README.
3. Configurar las variables requeridas usando valores locales o secretos del proveedor.
4. Ejecutar las pruebas y el comando de compilación del repositorio.
5. Publicar desde la rama configurada o distribuir el artefacto Android.
6. Abrir la URL/artefacto y comprobar los flujos descritos en 5.2.

Comandos exactos para los entornos de AV1: [[COMPLETAR con los comandos comprobados en cada README]]. Captura del proceso o panel de despliegue: ![Configuración de despliegue de SafeSpace](../assets/images/cap5/deployment/deployment-overview.png)

## 5.2. Product Implementation & Deployment

Esta sección presenta solo funcionalidades y productos que el equipo pueda ejecutar y verificar. Para cada evidencia se indica el repositorio, la versión, las historias relacionadas y el resultado observado. Los diseños del capítulo IV sirven como referencia, pero no sustituyen capturas de una aplicación en ejecución.

### 5.2.1. Sprint Backlogs

Como se mencionó previamente en el planeamiento del sprint número 1, el objetivo del mismo es desarrollar y desplegar una primera versión funcional de la aplicación web y Aplicación Backend. Esto conlleva implementar las funcionalidades clave que permitan a los propietarios de licorerías y proveedores gestionar de manera eficiente sus productos y almacenes de forma simplificada.

Luego de definir el objetivo del sprint, se identificaron las historias de usuario útiles para este sprint. A continuación, se dividió cada historia de usuario en tareas relacionadas a la implementación y cumplimiento de dicha historia. Para ello, se utilizó la aplicación Jira que nos ayuda a gestionar el progreso del sprint.

[Trello Board - SafeSpace](https://milenkorvu.atlassian.net/jira/software/c/projects/SSB/boards/4/backlog)


![Product Backlog](../assets/images/cap3/product-backlog.png)

| Jira   | ID   | Historia de usuario                           | Epic |
| ------ | ---- | --------------------------------------------- | ---- |
| SSB-1  | US01 | Registro de empleados                         | EP01 |
| SSB-2  | US02 | Inicio de sesión con credenciales             | EP01 |
| SSB-3  | US03 | Recuperación de contraseña de empleados       | EP01 |
| SSB-4  | US04 | Actualización de perfil y preferencias        | EP01 |
| SSB-5  | US05 | Administración de usuarios                    | EP01 |
| SSB-6  | US06 | Registro diario de estado de ánimo            | EP02 |
| SSB-7  | US07 | Resumen administrativo de estado de ánimo     | EP02 |
| SSB-8  | US08 | Consulta de encuestas publicadas              | EP03 |
| SSB-9  | US09 | Respuesta única a una encuesta                | EP03 |
| SSB-10 | US10 | Gestión operativa de encuestas                | EP03 |
| SSB-11 | US11 | Administración avanzada de encuestas          | EP03 |
| SSB-12 | US12 | Comentarios anidados en encuestas             | EP03 |
| SSB-13 | US13 | Like o unlike de comentarios                  | EP03 |
| SSB-14 | US14 | Consulta de actividades abiertas              | EP04 |
| SSB-15 | US15 | Votación y cambio de voto                     | EP04 |
| SSB-16 | US16 | Gestión de actividades semanales              | EP04 |
| SSB-17 | US17 | Creación de reportes anónimos o identificados | EP05 |
| SSB-18 | US18 | Consulta de reportes propios                  | EP05 |
| SSB-19 | US19 | Revisión y actualización de reportes          | EP05 |
| SSB-20 | US20 | Registro de planes y comprobantes de pago     | EP06 |
| SSB-21 | US21 | Administración de conversaciones propias      | EP07 |
| SSB-22 | US22 | Envío de mensajes al asistente                | EP07 |

### 5.2.2. Implemented Landing Page Evidence

La landing presenta SafeSpace, explica su propuesta de valor y permite que una organización interesada solicite información o una demostración. La evidencia siguiente debe mostrar la versión realmente publicada y vinculada con sus historias de visitante.

| Evidencia                 | Información                                 |
| :------------------------ | :------------------------------------------ |
| Repositorio               | https://github.com/TheSuccesfulOnes         |
| URL publicada             |                                             |
| Commit/versión            |                                             |
| Historias implementadas   | US-VISITOR-01, US-VISITOR-02, US-VISITOR-03 |
| Interacciones verificadas | CTA, formulario y resultado real            |
| Responsive                | Funciona correctamente en desktop y móvil   |

![Landing Page de SafeSpace en escritorio](../assets/images/cap5/landing/landing-desktop.png)

![Landing Page de SafeSpace en móvil](../assets/images/cap5/landing/landing-mobile.png)

### 5.2.3. Implemented Frontend-Web Application Evidence

La aplicación web brinda acceso a las funciones que el repositorio tenga implementadas para empleados y RR. HH. Según el diseño documentado, estas incluyen estado de ánimo, encuestas, actividades, comentarios, reportes y vistas de resumen. Se debe conservar solo lo que funcione en la versión demostrada.

| Evidencia                     | Información                                                 |
| :---------------------------- | :---------------------------------------------------------- |
| Repositorio                   | https://github.com/TheSuccesfulOnes/Frontend-Web-SafeSapace |
| URL publicada o pasos locales |                                                             |
| Commit/versión                |                                                             |
| Tecnología implementada       | React y Vite                                                |
| Historias implementadas       |                                                             |

| Vista/flujo                       | Estado real | Historia | Evidencia |
| :-------------------------------- | :---------: | :------- | :-------- |
| Acceso y perfil                   |             |          |           |
| Registro de estado de ánimo       |             |          |           |
| Encuestas y participación         |             |          |           |
| Reportes y seguimiento de RR. HH. |             |          |           |
| Resumen de bienestar              |             |          |           |

![Aplicación web de SafeSpace: flujo de empleado](../assets/images/cap5/web/web-employee-flow.png)

![Aplicación web de SafeSpace: vista de RR. HH.](../assets/images/cap5/web/web-hr-dashboard.png)

### 5.2.4. Implemented Native-Mobile Application Evidence

La aplicación nativa documentada para SafeSpace es Android con Kotlin y Jetpack Compose. Esta sección demuestra su ejecución en un emulador o dispositivo y relaciona cada función mostrada con una historia implementada.

| Evidencia                | Información                                                   |
| :----------------------- | :------------------------------------------------------------ |
| Repositorio              | https://github.com/TheSuccesfulOnes/Frontend-Movil-SafeSapace |
| Plataforma/dispositivo   | Android 15, Emulador Pixel 6a                                 |
| Versión de la aplicación | [[INSERTAR VERSIÓN/COMMIT]]                                   |
| Artefacto                | [[INSERTAR ENLACE AL APK/AAB O DISTRIBUCIÓN]]                 |
| Instalación y ejecución  | [[INSERTAR README O PASOS REPRODUCIBLES]]                     |
| Historias implementadas  | [[INSERTAR US-ID]]                                            |

| Flujo                                | Estado real | Evidencia         |
| :----------------------------------- | :---------: | :---------------- |
| Acceso y perfil                      | [[ESTADO]]  | [[CAPTURA/VIDEO]] |
| Registro de ánimo                    | [[ESTADO]]  | [[CAPTURA/VIDEO]] |
| Encuestas, comentarios o actividades | [[ESTADO]]  | [[CAPTURA/VIDEO]] |
| Creación de reporte anónimo          | [[ESTADO]]  | [[CAPTURA/VIDEO]] |

![SafeSpace Android ejecutado en dispositivo o emulador](../assets/images/cap5/mobile/android-running-app.png)

### 5.2.5. Implemented RESTful API and/or Serverless Backend Evidence

La API conecta las aplicaciones con las reglas de negocio y la persistencia de SafeSpace. Esta descripción se limita a módulos y endpoints presentes en el código y comprobados durante el Sprint.

| Evidencia                        | Información                                                                            |
| :------------------------------- | :------------------------------------------------------------------------------------- |
| Repositorio                      | [[INSERTAR URL]]                                                                       |
| Stack implementado               | Java y Spring Boot [[COMPLETAR versiones desde el repositorio; indicar JPA si se usa]] |
| URL base o instrucciones locales | [[INSERTAR URL O README/COMANDO]]                                                      |
| Base de datos y migración        | [[COMPLETAR: motor, versión y migración ejecutada]]                                    |
| Commit/versión                   | [[INSERTAR ENLACE]]                                                                    |
| Historias soportadas             | [[INSERTAR US-ID]]                                                                     |

| Módulo                  | Método y ruta reales | Resultado comprobado | Evidencia               |
| :---------------------- | :------------------- | :------------------- | :---------------------- |
| Autenticación           | [[MÉTODO + RUTA]]    | [[RESULTADO]]        | [[POSTMAN/LOG/CAPTURA]] |
| Estado de ánimo         | [[MÉTODO + RUTA]]    | [[RESULTADO]]        | [[POSTMAN/LOG/CAPTURA]] |
| Encuestas y comentarios | [[MÉTODO + RUTA]]    | [[RESULTADO]]        | [[POSTMAN/LOG/CAPTURA]] |
| Actividades             | [[MÉTODO + RUTA]]    | [[RESULTADO]]        | [[POSTMAN/LOG/CAPTURA]] |
| Reportes                | [[MÉTODO + RUTA]]    | [[RESULTADO]]        | [[POSTMAN/LOG/CAPTURA]] |

![Request y respuesta real de la API SafeSpace](../assets/images/cap5/api/api-request-response.png)

### 5.2.6. RESTful API Documentation

La especificación OpenAPI debe coincidir con los endpoints ejecutables. Para cada operación se documentan método, ruta, propósito, rol requerido, parámetros, cuerpo de solicitud, respuestas y errores.

URL de Swagger/OpenAPI: [[INSERTAR URL PÚBLICA O RUTA LOCAL Y CÓMO EJECUTARLA]].

|  Método  | Ruta          | Descripción   | Parámetros/body  | Respuesta y códigos        | Historia  |
| :------: | :------------ | :------------ | :--------------- | :------------------------- | :-------- |
| [[POST]] | [[RUTA REAL]] | [[PROPÓSITO]] | [[ESQUEMA REAL]] | [[CÓDIGOS Y EJEMPLO REAL]] | [[US-ID]] |

La evidencia debe incluir una operación exitosa y, cuando esté implementado, un caso de validación o autorización denegada. No se deben documentar como disponibles endpoints que solo estén planeados.

![Swagger UI de SafeSpace](../assets/images/cap5/api/swagger-ui.png)

### 5.2.7. Team Collaboration Insights

La participación del equipo se reporta para el periodo del Sprint 1 y se contrasta con la actividad visible en GitHub, Jira y los repositorios de producto.

| Integrante                                  | Productos/tareas aportados | Commits/PRs relevantes | Evidencia       |
| :------------------------------------------ | :------------------------- | :--------------------- | :-------------- |
| Mauricio Luis Pajés León                    | [[DESCRIBIR APORTE REAL]]  | [[ENLACES]]            | [[CAPTURA/URL]] |
| Milenko Ruben Cayanchi Avila                | [[DESCRIBIR APORTE REAL]]  | [[ENLACES]]            | [[CAPTURA/URL]] |
| Diego Andrés Ávalos Cordova                 | [[DESCRIBIR APORTE REAL]]  | [[ENLACES]]            | [[CAPTURA/URL]] |
| Jose Gustavo Asto Jacome                    | [[DESCRIBIR APORTE REAL]]  | [[ENLACES]]            | [[CAPTURA/URL]] |
| [[AGREGAR O ELIMINAR SEGÚN LA NÓMINA REAL]] | [[DESCRIBIR APORTE REAL]]  | [[ENLACES]]            | [[CAPTURA/URL]] |

La evidencia de esta sección debe ser coherente con la matriz LACX, el registro de versiones y el informe de desempeño individual. Capturas generales de GitHub Insights: ![Colaboración del equipo en GitHub](../assets/images/cap5/collaboration/github-team-insights.png)

## 5.3. Video About-the-Product

El video presenta el problema de comunicación y bienestar laboral, la propuesta de SafeSpace y una demostración breve de las versiones implementadas. Debe mostrar resultados reales, usar datos ficticios o anonimizados y distinguir las funciones disponibles de las que siguen en desarrollo.

| Campo                   | Información                                                                                          |
| :---------------------- | :--------------------------------------------------------------------------------------------------- |
| Título                  | SafeSpace — bienestar laboral seguro y humano                                                        |
| Duración                | [[COMPLETAR: duración real; objetivo de 1 a 3 minutos]]                                              |
| URL Microsoft Stream    | [[INSERTAR ENLACE]]                                                                                  |
| URL YouTube             | [[INSERTAR ENLACE]]                                                                                  |
| Captura/miniatura       | ![Video About-the-Product de SafeSpace](../assets/images/cap5/video/about-the-product-thumbnail.png) |
| Ubicación en la landing | [[INSERTAR URL O SECCIÓN DONDE SE EMBEBE]]                                                           |

|   Tiempo    | Contenido                                                         |
| :---------: | :---------------------------------------------------------------- |
| 00:00–00:20 | Problema que enfrentan los empleados y RR. HH.                    |
| 00:20–00:45 | Propuesta de valor de SafeSpace y segmentos a los que sirve.      |
| 00:45–01:20 | Demostración de la landing y su acción principal.                 |
| 01:20–02:00 | Flujo implementado de la aplicación web para RR. HH.              |
| 02:00–02:40 | Flujo implementado de la aplicación móvil Android para empleados. |
| 02:40–03:00 | Resultado del flujo y cierre.                                     |

El video incluye al menos una opinión de un representante de cada segmento objetivo. Registrar su autorización para aparecer, utilizar extractos breves y evitar datos personales o información laboral identificable. Si no se cuenta con esas opiniones, no presentar esta fila como cumplida y consultar el criterio de evaluación.

\newpage
