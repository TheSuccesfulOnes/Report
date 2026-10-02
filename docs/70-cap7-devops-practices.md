# Capítulo VII: DevOps Practices

Este capítulo describe la automatización disponible para SafeSpace en el corte de Trabajo Parcial. La evidencia principal se encuentra en [Backend-SafeSpace](https://github.com/TheSuccesfulOnes/Backend-SafeSpace), rama `master`, commit [ab0fa90](https://github.com/TheSuccesfulOnes/Backend-SafeSpace/commit/ab0fa904ffd3e7646a45f6da08e9f8bc5c7343ca).

## 7.1. Continuous Integration

### 7.1.1. Tools and Practices

| Herramienta o práctica | Uso configurado |
| :--- | :--- |
| GitHub Actions | Orquesta el workflow `Backend CI`. |
| GitHub | Activa la validación ante `push` y `pull_request` hacia `master`. |
| Temurin JDK 21 | Proporciona el entorno Java de la ejecución. |
| Maven | Restaura dependencias desde caché y ejecuta la suite de pruebas. |
| JUnit 5 y Mockito | Ejecutan las pruebas de lógica de negocio del backend. |

El workflow fue añadido en el commit [dd30a88](https://github.com/TheSuccesfulOnes/Backend-SafeSpace/commit/dd30a88283eec9470f711c95dd90666f2e734b20). Su definición revisada es:

```yaml
name: Backend CI
on:
  push:
    branches: [master]
  pull_request:
    branches: [master]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
        with:
          distribution: temurin
          java-version: "21"
          cache: maven
      - run: mvn -B test
```

### 7.1.2. Build & Test Suite Pipeline Components

| Etapa | Entrada | Acción | Resultado esperado |
| :--- | :--- | :--- | :--- |
| Disparador | Push o pull request a `master` | GitHub Actions inicia `Backend CI`. | Ejecución rastreable en Actions. |
| Checkout | Commit que activó el workflow | `actions/checkout@v4` obtiene el código. | Código reproducible del commit. |
| Entorno | `pom.xml` y JDK 21 | `actions/setup-java@v4` instala Temurin y usa caché Maven. | Dependencias listas para la compilación. |
| Pruebas | Código y suite en `src/test` | `mvn -B test` ejecuta la suite. | Aprobación o fallo visible en el job. |

La configuración del pipeline está presente en el repositorio. Para cerrar la evidencia del hito se debe adjuntar una captura del job `Backend CI` exitoso ejecutado sobre el commit entregado.

## 7.2. Continuous Delivery

### 7.2.1. Tools and Practices

| Producto | Herramienta | Configuración comprobable |
| :--- | :--- | :--- |
| API REST | Docker | Construcción en dos etapas con Maven 3.9.9 y Temurin 21. |
| API REST | Render | `render.yaml` define el servicio `safespace-backend` sobre la rama `master`. |
| Landing y aplicaciones web | Vercel | URLs publicadas y commits de referencia documentados en 5.1.4. |
| Base de datos | Firebase Firestore | Variables y archivo de credenciales gestionados fuera del repositorio. |

El `Dockerfile` compila el JAR con `mvn -B -DskipTests package`. Las pruebas se ejecutan antes en CI; por eso un despliegue solo debe promover cambios cuya ejecución de `Backend CI` sea satisfactoria.

### 7.2.2. Stages Deployment Pipeline Components

| Etapa | Componente | Configuración |
| :--- | :--- | :--- |
| Fuente | GitHub, rama `master` | Base de los cambios que pasan por CI. |
| Build | Docker multi-stage | Genera `backend-api-0.0.1-SNAPSHOT.jar`. |
| Configuración | `render.yaml` | Usa `Dockerfile`, puerto `10000` y perfil `prod`. |
| Secretos | Render Secret File y variables de entorno | Firebase, JWT, CORS, recuperación de contraseña y Gemini se mantienen fuera de Git. |
| Verificación de disponibilidad | Render health check | Consulta `/v3/api-docs`. |
| Consumo | Swagger y frontends publicados | API disponible en la URL consignada en el Capítulo V. |

## 7.3. Continuous Deployment

### 7.3.1. Tools and Practices

La configuración versionada permite a Render desplegar la API desde `master` y verificar su disponibilidad mediante `/v3/api-docs`. El Capítulo V conserva las evidencias de Render y Vercel con sus URLs y commits de referencia.

La existencia de `render.yaml` y de los despliegues publicados prueba la configuración de entrega. La habilitación de despliegue automático en los paneles de Render o Vercel no puede verificarse solo desde el código fuente; antes de presentar Continuous Deployment como completado, el equipo debe adjuntar la captura de la configuración de auto-deploy y de un despliegue exitoso asociado a un commit.

### 7.3.2. Production Deployment Pipeline Components

| Etapa | Evidencia requerida para la entrega |
| :--- | :--- |
| Validación | Job `Backend CI` aprobado para el commit entregado. |
| Despliegue API | Registro de Render con commit, estado `Live` y health check aprobado. |
| Despliegue web | Registro de Vercel con commit, URL de producción y estado `Ready`. |
| Verificación final | Swagger accesible y flujos principales comprobados desde web y móvil. |

\newpage
