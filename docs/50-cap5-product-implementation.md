# Capítulo V: Product Implementation

Este capítulo presenta la configuración técnica y de gestión utilizada para implementar **SafeSpace**, producto desarrollado por **TheSuccesfulOnesCorp**. Para el Avance 1 se documentan el entorno de desarrollo, la estrategia de control de versiones, las convenciones de código y la estructura de evidencias que será completada con el Sprint Backlog, capturas, enlaces de despliegue, documentación de servicios y video del producto cuando el equipo termine la implementación.

---

## 5.1. Software Configuration Management

La gestión de configuración de software define las herramientas, repositorios, flujos de trabajo y convenciones que permiten que el equipo mantenga trazabilidad sobre los cambios realizados durante el ciclo de vida del proyecto. En SafeSpace, estas prácticas se aplican sobre los productos principales de la solución: Landing Page, Web Application, Native Mobile Application y RESTful API Backend.

---

### 5.1.1. Software Development Environment Configuration

La siguiente tabla resume las herramientas y tecnologías consideradas para el desarrollo del proyecto. Se registran tanto herramientas de gestión y diseño como lenguajes, frameworks y plataformas de soporte para la implementación.

| Actividad | Herramienta / Tecnología | Propósito de uso | Referencia | Versión / Estado |
|:---|:---|:---|:---|:---:|
| Project Management | Trello | Organización del Product Backlog, Sprint Backlog y seguimiento de tareas. | [https://trello.com](https://trello.com) | SaaS |
| Version Control | Git | Control de versiones local mediante ramas, commits y tags. | [https://git-scm.com](https://git-scm.com) | 2.x |
| Repository Hosting | GitHub | Hospedaje de repositorios, Pull Requests, issues y evidencia colaborativa. | [https://github.com](https://github.com) | SaaS |
| Report Documentation | Markdown + Pandoc | Redacción del informe y exportación a PDF. | [https://pandoc.org](https://pandoc.org) | Según entorno |
| UX/UI Design | Figma | Diseño de wireframes, mock-ups, flujos y prototipos navegables. | [https://www.figma.com](https://www.figma.com) | SaaS |
| API Testing | Postman / Swagger UI | Prueba y documentación de endpoints REST. | [https://www.postman.com](https://www.postman.com) | SaaS |
| Landing Page | HTML5, CSS3, JavaScript | Implementación de la página informativa del producto y formularios de contacto. | [https://developer.mozilla.org](https://developer.mozilla.org) | HTML5 / ES6 |
| Frontend Web Application | React + Vite + TypeScript | Implementación de la aplicación web para usuarios de Recursos Humanos. | [https://react.dev](https://react.dev) | React 18 / TS |
| Web UI Components | PrimeReact / Material UI | Construcción de componentes visuales reutilizables para la Web Application. | [https://primereact.org](https://primereact.org) | Por confirmar |
| Native Mobile Application | Kotlin + Jetpack Compose | Implementación de la aplicación móvil nativa orientada a empleados. | [https://developer.android.com](https://developer.android.com) | Kotlin 1.9+ |
| Backend RESTful API | Java + Spring Boot | Implementación de servicios REST, reglas de negocio y endpoints del sistema. | [https://spring.io/projects/spring-boot](https://spring.io/projects/spring-boot) | Spring Boot 3.x |
| Persistence | Spring Data JPA | Acceso a datos mediante repositorios y entidades persistentes. | [https://spring.io/projects/spring-data-jpa](https://spring.io/projects/spring-data-jpa) | 3.x |
| Database | MySQL | Base de datos relacional para usuarios, reportes, foros, encuestas y métricas. | [https://www.mysql.com](https://www.mysql.com) | 8.x |
| Security | Spring Security + JWT | Autenticación, autorización y protección de rutas privadas. | [https://spring.io/projects/spring-security](https://spring.io/projects/spring-security) | 6.x |
| API Documentation | OpenAPI / Swagger | Documentación interactiva de los endpoints disponibles. | [https://swagger.io/specification](https://swagger.io/specification) | OpenAPI 3 |
| Testing Backend | JUnit 5 + Mockito | Pruebas unitarias y de integración para servicios backend. | [https://junit.org/junit5](https://junit.org/junit5) | 5.x |
| Deployment | Por confirmar | Publicación de Landing Page, Web Application, Backend API y base de datos. | Por definir | Pendiente |

**Consideraciones de entorno**

- Cada repositorio debe incluir un archivo `README.md` con instrucciones de instalación, ejecución local y pruebas.
- Los valores sensibles deben documentarse en `.env.example`, sin exponer credenciales reales.
- Las variables de entorno de producción deben configurarse únicamente en la plataforma de despliegue seleccionada.
- Las versiones finales de herramientas y frameworks deben actualizarse cuando el equipo confirme los repositorios reales.

---

### 5.1.2. Source Code Management

El control de versiones del proyecto se gestionará mediante una organización pública de GitHub asociada a **TheSuccesfulOnesCorp**. Los repositorios deben evidenciar el trabajo colaborativo del equipo a través de commits, ramas, Pull Requests y trazabilidad con User Stories o tareas del Sprint.

#### Relación de repositorios

| Producto / Artefacto | Repositorio | Descripción |
|:---|:---|:---|
| Project Report | `[PENDIENTE - URL del repositorio del informe]` | Repositorio Markdown del informe del curso, assets y exportación PDF. |
| Landing Page | `[PENDIENTE - URL del repositorio de Landing Page]` | Sitio de presentación comercial de SafeSpace. |
| Frontend Web Application | `[PENDIENTE - URL del repositorio de Web Application]` | Aplicación web orientada a RRHH y administración. |
| Native Mobile Application | `[PENDIENTE - URL del repositorio de Mobile Application]` | Aplicación móvil nativa para empleados. |
| RESTful API Backend | `[PENDIENTE - URL del repositorio de Backend API]` | API REST para autenticación, foros, encuestas, reportes y analítica. |

#### GitFlow Workflow

El equipo utilizará **GitFlow** para organizar el desarrollo incremental:

| Rama | Propósito | Reglas de uso |
|:---|:---|:---|
| `main` | Rama estable de producción o entrega validada. | Solo recibe cambios mediante Pull Request aprobado desde `release/*` o `hotfix/*`. |
| `develop` | Rama de integración del sprint. | Recibe funcionalidades terminadas desde ramas `feature/*`. |
| `feature/<US-ID>-<description>` | Desarrollo de User Stories o tareas específicas. | Se crea desde `develop` y se integra mediante Pull Request. |
| `fix/<description>` | Corrección de errores durante el desarrollo. | Se crea desde `develop` cuando el error aún no corresponde a producción. |
| `release/vX.Y.Z` | Preparación de entrega. | Se usa para estabilizar, corregir detalles menores y etiquetar versión. |
| `hotfix/vX.Y.Z` | Corrección urgente sobre versión estable. | Se crea desde `main` y luego se sincroniza con `develop`. |

#### Semantic Versioning

Las versiones del software seguirán el formato `v<MAJOR>.<MINOR>.<PATCH>`:

| Componente | Uso |
|:---|:---|
| `MAJOR` | Cambios incompatibles o reestructuración mayor del producto. |
| `MINOR` | Nuevas funcionalidades compatibles con la versión anterior. |
| `PATCH` | Correcciones de errores, ajustes menores o mejoras internas. |

#### Conventional Commits

Los mensajes de commit deben respetar el formato:

```text
<type>(<scope>): <short description>
```

Ejemplos:

```text
feat(landing): add pricing section
feat(mobile): implement anonymous mode screen
fix(api): validate duplicate email during registration
docs(report): update chapter five scm section
```

Tipos aceptados:

| Tipo | Uso |
|:---|:---|
| `feat` | Nueva funcionalidad visible para el usuario. |
| `fix` | Corrección de errores. |
| `docs` | Cambios en documentación. |
| `style` | Formato sin alterar lógica. |
| `refactor` | Reorganización interna sin cambio funcional. |
| `test` | Adición o modificación de pruebas. |
| `chore` | Configuración, dependencias o tareas de mantenimiento. |

#### Pull Requests

Cada Pull Request debe incluir:

- Descripción breve del cambio realizado.
- User Story, Technical Story o Task relacionada.
- Evidencia visual cuando aplique a interfaces.
- Resultado de pruebas locales o validación manual.
- Revisión de al menos un integrante antes de mergear.

---

### 5.1.3. Source Code Style Guide & Conventions

Las convenciones de código buscan mantener legibilidad, consistencia y facilidad de mantenimiento en todos los productos de SafeSpace. Como regla general, los nombres de variables, funciones, clases, ramas y archivos de código deben escribirse en inglés.

#### Landing Page: HTML5, CSS3 y JavaScript

- Usar estructura semántica con etiquetas como `<header>`, `<nav>`, `<main>`, `<section>` y `<footer>`.
- Mantener el enfoque **mobile-first** para estilos responsivos.
- Centralizar colores, tipografías y espaciados mediante variables CSS.
- Nombrar clases de forma clara y consistente, preferentemente con metodología BEM.
- Evitar código JavaScript inline dentro del HTML.
- Validar formularios de contacto antes del envío.
- Optimizar imágenes para reducir peso de carga.

#### Frontend Web Application: React, Vite y TypeScript

- Utilizar componentes funcionales y React Hooks.
- Separar componentes, páginas, servicios, rutas y utilidades.
- Usar **PascalCase** para componentes: `DashboardPage`, `LoginForm`.
- Usar **camelCase** para variables y funciones: `handleSubmit`, `fetchReports`.
- Mantener tipado explícito para modelos, requests y responses.
- Evitar `any` salvo casos justificados.
- Consumir la API mediante servicios centralizados.
- Gestionar estados de carga, error y vacío en las vistas principales.
- Aplicar formateo automático con Prettier y validación con ESLint si el repositorio lo incluye.

#### Native Mobile Application: Kotlin y Jetpack Compose

- Seguir las convenciones oficiales de Kotlin.
- Organizar el proyecto por capas o features: `data`, `domain`, `presentation`.
- Usar **PascalCase** para clases, pantallas y composables: `LoginScreen`, `ForumPostCard`.
- Usar **camelCase** para propiedades, funciones y estados.
- Mantener la lógica de negocio fuera de los composables.
- Gestionar estados de UI de forma explícita: loading, success, error y empty.
- Usar navegación clara entre pantallas.
- Proteger datos sensibles del usuario mediante almacenamiento seguro cuando corresponda.

#### Backend RESTful API: Java, Spring Boot y MySQL

- Organizar el backend por capas: `domain`, `application`, `infrastructure` o por módulos equivalentes.
- Usar **PascalCase** para clases e interfaces: `UserController`, `ForumService`.
- Usar **camelCase** para atributos y métodos: `findUserByEmail`, `createPost`.
- Exponer endpoints con rutas consistentes, por ejemplo `/api/v1/users`.
- Validar entradas con DTOs y anotaciones de validación.
- Evitar exponer entidades de persistencia directamente como respuestas públicas.
- Manejar errores con respuestas HTTP consistentes.
- Documentar endpoints mediante OpenAPI/Swagger.
- Mantener credenciales y secrets fuera del repositorio.

#### Database: MySQL

- Nombrar tablas en `snake_case` y plural: `users`, `forum_posts`, `pulse_surveys`.
- Usar claves primarias explícitas y relaciones con claves foráneas cuando corresponda.
- Crear índices para búsquedas frecuentes.
- Documentar cambios de esquema cuando se incorporen migraciones.
- Evitar guardar datos sensibles sin protección o justificación.

#### API y pruebas

- Los endpoints deben usar verbos HTTP según la intención: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`.
- Las respuestas deben mantener una estructura predecible.
- Las pruebas unitarias deben cubrir reglas de negocio importantes.
- Las pruebas de integración deben validar flujos críticos de la API.
- Los escenarios BDD, si se usan, deben relacionarse con User Stories del Product Backlog.

---

### 5.1.4. Software Deployment Configuration

La configuración de despliegue será completada cuando el equipo confirme las plataformas finales y publique los productos. Para Avance 1 se define la estrategia esperada de despliegue y las variables necesarias.

#### Landing Page

| Elemento | Configuración esperada |
|:---|:---|
| Plataforma | `[PENDIENTE - Vercel, Netlify u otra plataforma confirmada]` |
| Rama de despliegue | `main` |
| Comando de build | Según repositorio (`npm run build` si aplica) |
| Variables | `[PENDIENTE - Definir si requiere variables públicas]` |
| URL de producción | `[PENDIENTE - Agregar URL real]` |

#### Frontend Web Application

| Elemento | Configuración esperada |
|:---|:---|
| Plataforma | `[PENDIENTE - Plataforma confirmada]` |
| Rama de despliegue | `main` |
| Comando de instalación | `npm install` |
| Comando de build | `npm run build` |
| Variable principal | `VITE_API_BASE_URL=[PENDIENTE]` |
| URL de producción | `[PENDIENTE - Agregar URL real]` |

#### Native Mobile Application

| Elemento | Configuración esperada |
|:---|:---|
| Plataforma de desarrollo | Android Studio |
| Build de prueba | APK o AAB generado desde Gradle |
| Distribución interna | `[PENDIENTE - Firebase App Distribution, APK compartido u otra opción]` |
| Variables/API URL | `[PENDIENTE - Base URL del backend]` |
| Evidencia | Capturas del emulador o dispositivo físico |

#### RESTful API Backend

| Elemento | Configuración esperada |
|:---|:---|
| Plataforma | `[PENDIENTE - Render, Railway, VPS u otra plataforma confirmada]` |
| Runtime | Java + Spring Boot |
| Base de datos | MySQL |
| Variables mínimas | `SPRING_DATASOURCE_URL`, `SPRING_DATASOURCE_USERNAME`, `SPRING_DATASOURCE_PASSWORD`, `JWT_SECRET` |
| Documentación | Swagger/OpenAPI |
| URL base | `[PENDIENTE - Agregar URL real]` |

---

## 5.2. Product Implementation & Deployment

Esta sección recopila la evidencia de implementación y despliegue de los productos de SafeSpace. Como el Sprint Backlog aún no está cerrado, se deja la estructura completa solicitada por el enunciado para completarla con información real: tablero, tareas, commits, capturas, endpoints, URLs y métricas de colaboración.

---

### 5.2.1. Sprint Backlogs

#### Sprint 1

##### Sprint Planning 1

| Campo | Descripción |
|:---|:---|
| Sprint # | Sprint 1 |
| Date | `[PENDIENTE - Fecha de planificación]` |
| Time | `[PENDIENTE - Hora]` |
| Location | `[PENDIENTE - Modalidad o enlace de reunión]` |
| Prepared By | `[PENDIENTE - Responsable]` |
| Attendees | Mauricio Luis Pajés León, Milenko Ruben Cayanchi Avila, Diego Andrés Ávalos Cordova, Jose Gustavo Asto Jacome, [Integrante 5], [Integrante 6] |
| Sprint 0 / Previous Review Summary | `[PENDIENTE - Resumen de avances previos]` |
| Sprint 0 / Previous Retrospective Summary | `[PENDIENTE - Resumen de acuerdos de mejora]` |

##### Sprint Goal & User Stories

| Campo | Descripción |
|:---|:---|
| Sprint Goal | `[PENDIENTE - Definir objetivo del Sprint 1 según alcance real]` |
| Sprint Velocity | `[PENDIENTE - Story Points aceptados]` |
| Sum of Story Points | `[PENDIENTE - Suma de Story Points seleccionados]` |

| User Story ID | Título | Story Points | Epic | Estado |
|:---:|:---|:---:|:---:|:---:|
| `[PENDIENTE]` | `[PENDIENTE - Historia seleccionada]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` |

##### Leadership & Collaboration Matrix

| Integrante | GitHub Username | Landing Page | Web Application | Mobile Application | Backend API | Documentation |
|:---|:---|:---:|:---:|:---:|:---:|:---:|
| Mauricio Luis Pajés León | `[PENDIENTE]` | `[L/C]` | `[L/C]` | `[L/C]` | `[L/C]` | `[L/C]` |
| Milenko Ruben Cayanchi Avila | `[PENDIENTE]` | `[L/C]` | `[L/C]` | `[L/C]` | `[L/C]` | `[L/C]` |
| Diego Andrés Ávalos Cordova | `[PENDIENTE]` | `[L/C]` | `[L/C]` | `[L/C]` | `[L/C]` | `[L/C]` |
| Jose Gustavo Asto Jacome | `[PENDIENTE]` | `[L/C]` | `[L/C]` | `[L/C]` | `[L/C]` | `[L/C]` |
| [Integrante 5 - Pendiente] | `[PENDIENTE]` | `[L/C]` | `[L/C]` | `[L/C]` | `[L/C]` | `[L/C]` |
| [Integrante 6 - Pendiente] | `[PENDIENTE]` | `[L/C]` | `[L/C]` | `[L/C]` | `[L/C]` | `[L/C]` |

> L = Leader, C = Collaborator.

##### Sprint Backlog 1

**Herramienta de tablero:** `[PENDIENTE - Trello/GitHub Projects]`  
**URL del tablero:** `[PENDIENTE - Agregar enlace público]`  
**Captura del tablero:** `[PENDIENTE - Agregar captura real]`

| User Story ID | Task ID | Título de tarea | Descripción | Estimación | Asignado a | Estado |
|:---:|:---:|:---|:---|:---:|:---|:---:|
| `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` |

##### Development Evidence for Sprint Review

| Repositorio | Rama | Commit ID | Mensaje de commit | Descripción | Fecha |
|:---|:---|:---:|:---|:---|:---:|
| `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` |

##### Testing Suite Evidence for Sprint Review

| Repositorio | Rama | Commit ID | Tipo de prueba | Descripción | Fecha |
|:---|:---|:---:|:---|:---|:---:|
| `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` |

##### Execution Evidence for Sprint Review

| Producto | Evidencia requerida | Estado |
|:---|:---|:---:|
| Landing Page | Capturas de la página funcionando en desktop y mobile. | `[PENDIENTE]` |
| Frontend Web Application | Capturas de pantallas implementadas y flujo principal. | `[PENDIENTE]` |
| Native Mobile Application | Capturas de emulador o dispositivo físico. | `[PENDIENTE]` |
| RESTful API Backend | Capturas de ejecución local o desplegada, requests exitosos y logs. | `[PENDIENTE]` |

##### Services Documentation Evidence for Sprint Review

| Endpoint | Método HTTP | Descripción | Parámetros / Body | Respuesta esperada | Estado |
|:---|:---:|:---|:---|:---|:---:|
| `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` |

**URL Swagger/OpenAPI:** `[PENDIENTE - Agregar URL real o ruta local]`

##### Software Deployment Evidence for Sprint Review

| Producto | Plataforma | URL / Artefacto | Estado | Evidencia |
|:---|:---|:---|:---:|:---|
| Landing Page | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` |
| Frontend Web Application | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` |
| Native Mobile Application | `[PENDIENTE]` | `[PENDIENTE - APK/AAB o distribución interna]` | `[PENDIENTE]` | `[PENDIENTE]` |
| RESTful API Backend | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` |
| Database | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` |

##### Team Collaboration Insights during Sprint

| Integrante | Commits | Pull Requests | Issues / Tasks | Evidencia |
|:---|:---:|:---:|:---:|:---|
| Mauricio Luis Pajés León | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` |
| Milenko Ruben Cayanchi Avila | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` |
| Diego Andrés Ávalos Cordova | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` |
| Jose Gustavo Asto Jacome | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` |
| [Integrante 5 - Pendiente] | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` |
| [Integrante 6 - Pendiente] | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` |

---

### 5.2.2. Implemented Landing Page Evidence

La Landing Page permite presentar la propuesta de valor de SafeSpace, explicar sus funcionalidades principales y dirigir a los visitantes hacia acciones de contacto o solicitud de demostración.

| Evidencia | Detalle |
|:---|:---|
| Repositorio | `[PENDIENTE - URL real]` |
| URL publicada | `[PENDIENTE - URL real]` |
| Tecnologías | HTML5, CSS3, JavaScript |
| Captura desktop | `[PENDIENTE - Agregar captura real]` |
| Captura mobile | `[PENDIENTE - Agregar captura real]` |
| User Stories relacionadas | `[PENDIENTE - Ej. US01, US02, US03, US04, US05]` |

---

### 5.2.3. Implemented Frontend-Web Application Evidence

La Web Application está orientada principalmente a usuarios de Recursos Humanos, quienes necesitan visualizar información agregada del clima laboral, revisar reportes, gestionar información de la organización y dar seguimiento a indicadores relevantes.

| Evidencia | Detalle |
|:---|:---|
| Repositorio | `[PENDIENTE - URL real]` |
| URL publicada | `[PENDIENTE - URL real]` |
| Tecnologías | React, Vite, TypeScript |
| Capturas principales | `[PENDIENTE - Agregar capturas reales]` |
| User Stories relacionadas | `[PENDIENTE - Completar según alcance implementado]` |

| Vista / Funcionalidad | Descripción | Estado | Evidencia |
|:---|:---|:---:|:---|
| Login / Registro | Acceso de usuarios a la plataforma. | `[PENDIENTE]` | `[PENDIENTE]` |
| Dashboard RRHH | Visualización de métricas de clima laboral. | `[PENDIENTE]` | `[PENDIENTE]` |
| Gestión de reportes | Revisión de publicaciones, alertas o reportes internos. | `[PENDIENTE]` | `[PENDIENTE]` |

---

### 5.2.4. Implemented Native-Mobile Application Evidence

La Native Mobile Application está orientada al empleado. Su propósito es permitir una interacción rápida, privada y accesible con funciones como inicio de sesión, modo anónimo, participación en foro, encuestas de pulso emocional y envío de retroalimentación.

| Evidencia | Detalle |
|:---|:---|
| Repositorio | `[PENDIENTE - URL real]` |
| Artefacto de prueba | `[PENDIENTE - APK/AAB o mecanismo de distribución]` |
| Tecnologías | Kotlin, Jetpack Compose |
| Plataforma objetivo | Android |
| Capturas principales | `[PENDIENTE - Agregar capturas reales]` |
| User Stories relacionadas | `[PENDIENTE - Completar según alcance implementado]` |

| Vista / Funcionalidad | Descripción | Estado | Evidencia |
|:---|:---|:---:|:---|
| Inicio de sesión | Acceso seguro del usuario empleado. | `[PENDIENTE]` | `[PENDIENTE]` |
| Modo anónimo | Publicación o participación sin exponer identidad visible. | `[PENDIENTE]` | `[PENDIENTE]` |
| Foro | Lectura, creación o interacción con publicaciones. | `[PENDIENTE]` | `[PENDIENTE]` |
| Encuesta diaria | Registro breve del estado emocional del empleado. | `[PENDIENTE]` | `[PENDIENTE]` |

---

### 5.2.5. Implemented RESTful API and/or Serverless Backend Evidence

El backend de SafeSpace expone servicios REST para soportar los flujos de autenticación, gestión de usuarios, foros, encuestas, reportes y métricas. La evidencia final debe completarse con endpoints reales, capturas de pruebas y URL de despliegue si corresponde.

| Evidencia | Detalle |
|:---|:---|
| Repositorio | `[PENDIENTE - URL real]` |
| URL base | `[PENDIENTE - URL local o producción]` |
| Tecnologías | Java, Spring Boot, Spring Data JPA, Spring Security, JWT |
| Base de datos | MySQL |
| Captura de ejecución | `[PENDIENTE - Agregar evidencia real]` |
| User Stories relacionadas | `[PENDIENTE - Completar según alcance implementado]` |

| Módulo | Endpoint esperado | Estado | Evidencia |
|:---|:---|:---:|:---|
| Authentication | `/api/v1/auth/...` | `[PENDIENTE]` | `[PENDIENTE]` |
| Users | `/api/v1/users/...` | `[PENDIENTE]` | `[PENDIENTE]` |
| Forum | `/api/v1/forum/...` | `[PENDIENTE]` | `[PENDIENTE]` |
| Surveys | `/api/v1/surveys/...` | `[PENDIENTE]` | `[PENDIENTE]` |
| Reports / Analytics | `/api/v1/reports/...` | `[PENDIENTE]` | `[PENDIENTE]` |

---

### 5.2.6. RESTful API Documentation

La documentación de servicios debe describir los endpoints implementados, métodos HTTP, parámetros, cuerpos de solicitud, respuestas esperadas y códigos de error. Cuando el backend se encuentre disponible, esta sección debe complementarse con Swagger UI u OpenAPI.

**URL de documentación:** `[PENDIENTE - Swagger UI desplegado o ruta local]`

| Endpoint | Método | Descripción | Request | Response | Código esperado |
|:---|:---:|:---|:---|:---|:---:|
| `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` |

Ejemplo de estructura esperada para documentar un endpoint:

```json
{
  "endpoint": "/api/v1/auth/login",
  "method": "POST",
  "description": "Authenticates a registered user.",
  "requestBody": {
    "email": "user@company.com",
    "password": "********"
  },
  "responses": {
    "200": "Authentication successful.",
    "401": "Invalid credentials."
  }
}
```

---

### 5.2.7. Team Collaboration Insights

Esta sección consolidará la evidencia de colaboración técnica del equipo durante el desarrollo del Avance 1. Debe incluir capturas de GitHub Insights, Pull Requests, commits relevantes, issues cerrados y participación de cada integrante.

| Fuente de evidencia | Descripción | Estado |
|:---|:---|:---:|
| GitHub Insights | Captura de contribuciones por repositorio. | `[PENDIENTE]` |
| Pull Requests | Relación de PRs creados, revisados y fusionados. | `[PENDIENTE]` |
| Issues / Tasks | Relación de tareas cerradas durante el sprint. | `[PENDIENTE]` |
| Commits | Commits relevantes vinculados a User Stories o Tasks. | `[PENDIENTE]` |

| Integrante | Aporte esperado para AV1 | Evidencia |
|:---|:---|:---|
| Mauricio Luis Pajés León | `[PENDIENTE - Describir aporte real]` | `[PENDIENTE]` |
| Milenko Ruben Cayanchi Avila | `[PENDIENTE - Describir aporte real]` | `[PENDIENTE]` |
| Diego Andrés Ávalos Cordova | `[PENDIENTE - Describir aporte real]` | `[PENDIENTE]` |
| Jose Gustavo Asto Jacome | `[PENDIENTE - Describir aporte real]` | `[PENDIENTE]` |
| [Integrante 5 - Pendiente] | `[PENDIENTE - Describir aporte real]` | `[PENDIENTE]` |
| [Integrante 6 - Pendiente] | `[PENDIENTE - Describir aporte real]` | `[PENDIENTE]` |

---

## 5.3. Video About-the-Product

El video About-the-Product debe presentar la propuesta de valor de SafeSpace y mostrar brevemente el funcionamiento de los productos implementados. Para Avance 1 se deja la estructura requerida hasta contar con el enlace final.

| Campo | Detalle |
|:---|:---|
| Título del video | `[PENDIENTE - Definir título final]` |
| Duración | `[PENDIENTE - Indicar duración]` |
| URL Microsoft Stream | `[PENDIENTE - Agregar enlace real]` |
| URL alternativa / respaldo | `[PENDIENTE - Si aplica]` |
| Screenshot del video | `[PENDIENTE - Agregar captura real]` |

**Guion propuesto**

| Tiempo | Contenido |
|:---:|:---|
| 00:00 - 00:20 | Presentación del problema de clima laboral y comunicación interna. |
| 00:20 - 00:45 | Presentación de SafeSpace y su propuesta de valor. |
| 00:45 - 01:20 | Recorrido breve por la Landing Page. |
| 01:20 - 02:00 | Demostración de la Web Application para RRHH. |
| 02:00 - 02:40 | Demostración de la Native Mobile Application para empleados. |
| 02:40 - 03:00 | Cierre, beneficios principales y llamado a la acción. |

\newpage
