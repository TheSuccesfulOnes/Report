# Capítulo VI: Product Verification & Validation

Este capítulo registra la evidencia de pruebas disponible para SafeSpace en el corte de Trabajo Parcial. La revisión se realizó sobre la rama `master` del repositorio [Backend-SafeSpace](https://github.com/TheSuccesfulOnes/Backend-SafeSpace), en el commit [ab0fa90](https://github.com/TheSuccesfulOnes/Backend-SafeSpace/commit/ab0fa904ffd3e7646a45f6da08e9f8bc5c7343ca).

## 6.1. Testing Suites & Validation

El backend contiene 13 clases de prueba en `src/test/java` y 42 casos marcados con `@Test`. La suite usa JUnit 5 y Mockito mediante `spring-boot-starter-test`; los servicios se prueban con sus repositorios y puertos simulados para aislar la lógica de negocio.

| Evidencia | Ubicación o comando | Estado verificable |
| :--- | :--- | :--- |
| Suite unitaria | `src/test/java/com/experimentos/backend` | 13 clases y 42 casos identificados |
| Dependencia de pruebas | `pom.xml` | `spring-boot-starter-test` |
| Ejecución local | `mvn test` | Comando definido por el repositorio |
| Ejecución automatizada | `.github/workflows/ci.yml` | Configurada para push y pull request a `master` |

El resultado de una ejecución exitosa de `mvn test` o de GitHub Actions debe adjuntarse como captura antes de la exportación final. No se declara un resultado de ejecución si no existe su salida o captura verificable.

### 6.1.1. Core Entities Unit Tests

Las pruebas cubren reglas de negocio de autenticación, encuestas, bienestar, actividades, reportes, pagos y asistencia mediante IA.

| Historias relacionadas | Clase de prueba | Comportamiento validado |
| :--- | :--- | :--- |
| US01, US02 | `AuthServiceTest` | Registro con contraseña cifrada, rechazo de contraseñas no coincidentes e inicio de sesión inválido. |
| US03 | `PasswordResetServiceTest` | Recuperación sin revelar si una cuenta existe, token de un solo uso y rechazo de token expirado. |
| US05 | `AdminServiceTest` | Alta, actualización, desactivación y restricciones de administración de usuarios. |
| US06, US07 | `MoodServiceTest` | Registro diario único, rechazo de duplicados y cálculo de métricas anónimas. |
| US08, US09 | `SurveyServiceTest` | Consulta de encuestas, respuesta única y publicación de un comentario anónimo asociado. |
| US10, US11 | `AdminSurveyServiceTest` | Consulta administrativa de encuestas, respuestas y reapertura de encuestas cerradas. |
| US12, US13 | `CommentServiceTest`, `CompositeIdRepositoryTest` | Propiedad de comentarios y eliminación de identificadores compuestos para likes. |
| US14, US15, US16 | `AdminActivityServiceTest` | Creación, reapertura y restricciones de cambio en actividades con votación iniciada. |
| US17, US18, US19 | `ReportServiceTest` | Visibilidad de reportes anónimos para su propietario sin revelar identidad. |
| US20 | `PaymentServiceTest` | Validación de comprobante PDF, datos obligatorios y límite de tamaño en Firestore. |
| US21, US22 | `AiChatServiceTest` | Historial reciente, respuesta local segura y rechazo de mensajes que exceden el límite. |
| Configuración API | `OpenApiConfigTest` | Esquema JWT Bearer en las operaciones protegidas de OpenAPI. |

| Commit | Fecha | Cambio relacionado con pruebas |
| :--- | :--- | :--- |
| [13cc7fc](https://github.com/TheSuccesfulOnes/Backend-SafeSpace/commit/13cc7fc) | 11/09/2026 | Prueba de propiedad de comentarios. |
| [ba2eea9](https://github.com/TheSuccesfulOnes/Backend-SafeSpace/commit/ba2eea9) | 11/09/2026 | Prueba de publicación de respuestas de encuesta como comentarios. |
| [090dd90](https://github.com/TheSuccesfulOnes/Backend-SafeSpace/commit/090dd90) | 15/09/2026 | Pruebas de comentarios, pagos, reportes y encuestas. |
| [f6da863](https://github.com/TheSuccesfulOnes/Backend-SafeSpace/commit/f6da863) | 15/09/2026 | Pruebas de votos de actividades y likes. |
| [daca205](https://github.com/TheSuccesfulOnes/Backend-SafeSpace/commit/daca205) | 15/09/2026 | Ajustes y prueba del repositorio de identificadores compuestos. |
| [4218059](https://github.com/TheSuccesfulOnes/Backend-SafeSpace/commit/42180596587208ca5ba4650d905e1cb4e8a00515) | 16/09/2026 | Prueba de la zona horaria aplicada al resumen de estado de ánimo. |
| [ab0fa90](https://github.com/TheSuccesfulOnes/Backend-SafeSpace/commit/ab0fa904ffd3e7646a45f6da08e9f8bc5c7343ca) | 18/09/2026 | Prueba de configuración JWT para Swagger. |

### 6.1.2. Core Integration Tests

Las pruebas existentes verifican la colaboración entre servicios, repositorios y puertos mediante mocks. Por ejemplo, `SurveyServiceTest` confirma que una respuesta única genera una respuesta de encuesta y un comentario anónimo; `PasswordResetServiceTest` coordina usuarios, tokens y el puerto de notificación.

| Escenario de integración | Componentes | Historia | Estado |
| :--- | :--- | :--- | :--- |
| Respuesta de encuesta | Servicio de encuestas, repositorio de respuestas y repositorio de comentarios | US09 | Cubierto mediante mocks. |
| Recuperación de contraseña | Servicio, repositorio de usuarios, tokens y puerto de notificación | US03 | Cubierto mediante mocks. |
| Voto y like persistidos | Repositorios Firestore e identificadores compuestos | US13, US15 | Cubierto mediante mocks de Firestore. |
| Flujo web o móvil contra API desplegada | Frontend, API REST, JWT y Firestore | Varias US | Pendiente de prueba automatizada end-to-end. |

No se identificaron pruebas con `@SpringBootTest`, Testcontainers ni llamadas reales a Firestore en la suite revisada. Por ello, las interacciones disponibles deben presentarse como pruebas de colaboración de componentes simulados, no como una validación completa contra infraestructura real.

### 6.1.3. Core Behavior-Driven Development

Los criterios de aceptación de las User Stories del Capítulo III sirven como base de BDD. En la versión revisada no se identificaron archivos `.feature`, definiciones de pasos ni dependencias de Cucumber; por tanto, BDD aún debe automatizarse en el repositorio de pruebas.

El primer escenario priorizado corresponde a US03:

```gherkin
Feature: Recuperación de contraseña
  Como empleado registrado
  Quiero recuperar mi contraseña
  Para volver a acceder a SafeSpace de forma segura

  Scenario: Restablecer contraseña con un token vigente
    Given que existe un empleado con una cuenta activa
    And que el empleado recibió un token de recuperación vigente
    When confirma una nueva contraseña válida
    Then el sistema actualiza la contraseña
    And invalida el token utilizado
```

Para convertirlo en evidencia ejecutable se debe añadir el archivo `.feature`, sus Steps en Java, la dependencia de Cucumber y su ejecución dentro de `mvn test` o un perfil específico del pipeline.

### 6.1.4. Core System Tests

Las capturas del Capítulo V evidencian productos publicados y sus pantallas principales. Sirven como evidencia visual de los flujos, pero no reemplazan un registro de ejecución de pruebas de sistema.

| Caso | Flujo a verificar | Evidencia visual actual | Estado |
| :--- | :--- | :--- | :--- |
| SYS-01 | Registro e inicio de sesión de empleado | `../assets/images/cap5/web/frontend-web-register.png` y `frontend-web-login.png` | Evidencia visual disponible. |
| SYS-02 | Registro de estado de ánimo y consulta de encuestas | `../assets/images/cap5/web/frontend-web-mood.png` y `frontend-web-surveys.png` | Evidencia visual disponible. |
| SYS-03 | Creación y consulta de reportes | `../assets/images/cap5/web/frontend-web-report-form.png` y `frontend-web-my-reports.png` | Evidencia visual disponible. |
| SYS-04 | Actividades, encuestas y perfil en Android | `../assets/images/cap5/mobile/` | Evidencia visual disponible. |
| SYS-05 | Operaciones REST y seguridad | `../assets/images/cap5/api/swagger-ui.png` y respuestas `401` | Evidencia visual disponible. |

Antes de la entrega, el equipo debe registrar para cada caso la fecha, ambiente, datos de prueba, resultado esperado, resultado obtenido y captura final. Así se podrá distinguir una demostración visual de una prueba de sistema ejecutada.

\newpage
