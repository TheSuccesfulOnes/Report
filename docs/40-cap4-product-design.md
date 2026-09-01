# Capítulo IV: Product Design

En este capítulo se presenta la propuesta integral de diseño del producto **SafeSpace**, desarrollado por **TheSuccesfulOnesCorp**. Se incluyen las directrices visuales, la arquitectura de información, los artefactos de diseño UI/UX, los prototipos, la arquitectura de software basada en Domain-Driven Design, los diagramas orientados a objetos y el diseño de base de datos.

---

## 4.1. Style Guidelines

Las guías de estilo definen los lineamientos visuales y de interacción que aseguran consistencia entre la Landing Page, la aplicación web y la aplicación móvil. Estas reglas permiten mantener una experiencia clara, accesible y coherente con la identidad de SafeSpace.

### 4.1.1. General Style Guidelines

#### Branding

El logo de **SafeSpace** comunica profesionalismo, confianza y cercanía. Su aplicación debe reforzar la idea de un espacio seguro donde los colaboradores puedan expresarse sin temor y donde Recursos Humanos pueda tomar decisiones informadas.

- **Versiones:** fondo oscuro para headers o pantallas iniciales y versión sin fondo para superficies claras.
- **Margen mínimo:** 16px alrededor del isotipo o logotipo.
- **Uso monocromático:** permitido en blanco o gris oscuro cuando el contraste lo requiera.

![Logo de referencia](../assets/images/cap3/style-guidelines/elysium-logo.jpg){ width=25% }

#### Tipografía

La fuente principal propuesta para la solución es **Exo**, debido a su apariencia moderna y buena legibilidad en interfaces digitales. Para componentes web o móviles que requieran máxima compatibilidad, puede complementarse con fuentes del sistema como **Inter**, **Roboto** o **Arial**.

| Jerarquía | Fuente y peso | Tamaño sugerido | Uso principal |
| :---- | :---- | :----: | :---- |
| Display | Exo ExtraBold 800 | 32px | Títulos principales y pantallas de bienvenida. |
| Heading 1 | Exo Bold 700 | 22px | Encabezados de secciones principales. |
| Heading 2 | Exo SemiBold 600 | 18px | Subtítulos, cards y módulos. |
| Body | Exo Regular 400 | 15px | Texto principal, reportes y formularios. |
| Caption | Exo Light 300 | 12px | Etiquetas, timestamps y estados. |
| Button | Exo SemiBold 600 | 14px | Botones y llamadas a la acción. |
| Badge | Exo Medium 500 | 11px | Categorías, filtros y chips. |

#### Paleta de colores

| Nombre | Código Hex | Uso |
| :---- | :----: | :---- |
| Azul Navy | `#1C4B78` | Headers, navegación principal y CTAs corporativos. |
| Azul Cielo | `#4DA8DA` | Botones primarios, enlaces y estados activos. |
| Verde Teal | `#19A4A1` | Acentos, confirmaciones y estados positivos. |
| Blanco Neutro | `#F2F4F7` | Fondos de pantalla y superficies claras. |
| Gris Oscuro | `#3E3E3E` | Texto principal e iconografía neutra. |
| Gris Menta | `#A5E3D8` | Chips, fondos suaves y notificaciones. |

#### Colores semánticos

| Nombre semántico | Código Hex | Uso |
| :---- | :----: | :---- |
| Éxito | `#19A4A1` | Confirmaciones, reportes enviados y check-ins positivos. |
| Advertencia | `#E8A838` | Alertas de clima o riesgo medio. |
| Peligro | `#C94040` | Denuncias críticas, errores y acciones destructivas. |
| Información | `#4DA8DA` | Mensajes informativos, ayudas y tooltips. |

**Tokens auxiliares:**

- **Border radius:** cards 16px, botones 12px y chips 20px.
- **Espaciado base:** grilla modular de 8px.
- **Estilo visual:** interfaces limpias, contraste adecuado y jerarquía clara.

### 4.1.2. Web Style Guidelines

Las guías web se aplican a la Landing Page y a la aplicación web usada por Recursos Humanos.

- **Breakpoints:** Mobile menor a 640px, Tablet entre 641px y 1024px, Desktop entre 1025px y 1440px, Large Desktop mayor a 1440px.
- **Layout:** grilla fluida de 12 columnas para desktop y estructura de una columna en mobile.
- **Componentes:** formularios con validación, cards de métricas, tablas, modales accesibles y navegación consistente.
- **Accesibilidad:** contraste suficiente, textos legibles, foco visible en elementos interactivos y etiquetas claras para inputs.
- **Contenido:** lenguaje directo, profesional y orientado a la acción.

### 4.1.3. Mobile Style Guidelines

Las guías móviles priorizan interacción rápida, navegación simple y claridad visual para usuarios que responden encuestas, revisan mensajes o reportan situaciones laborales desde su dispositivo.

#### 4.1.3.1. iOS Mobile Style Guidelines

La versión iOS debe seguir los principios de **Human Interface Guidelines**, considerando:

- Navegación clara mediante tab bar inferior.
- Uso de gestos nativos, jerarquía visual amplia y controles familiares.
- Compatibilidad con modo claro y modo oscuro.
- Respeto de áreas seguras (*safe areas*) y tamaños mínimos táctiles.

#### 4.1.3.2. Android Mobile Style Guidelines

La versión Android debe seguir los principios de **Material Design**, considerando:

- Bottom Navigation Bar para secciones principales.
- Floating Action Button para acciones frecuentes como crear publicación o reporte.
- Componentes visuales consistentes con Jetpack Compose.
- Estados claros para formularios, encuestas, confirmaciones y errores.

---

## 4.2. Information Architecture

La arquitectura de información de SafeSpace organiza los contenidos, flujos y etiquetas del producto para que empleados y profesionales de Recursos Humanos puedan encontrar rápidamente las funcionalidades que necesitan.

### 4.2.1. Organization Systems

El contenido de SafeSpace se organiza mediante distintos esquemas según el canal y el perfil de usuario.

| Contexto | Sistema de organización | Esquema de categorización | Justificación |
| :---- | :---- | :---- | :---- |
| Landing Page | Secuencial | Por audiencia y propuesta de valor | Guía al visitante desde el problema hasta la solicitud de contacto. |
| Aplicación móvil | Jerárquico por rol | Por tareas frecuentes | Permite separar funcionalidades de empleado y RRHH. |
| Dashboard RRHH | Matricial | Por área, período e indicador | Facilita el análisis de información desde múltiples dimensiones. |
| Foro | Por tópicos | Clima laboral, sugerencias, eventos, dudas y reconocimientos | Ayuda a encontrar conversaciones relevantes. |

### 4.2.2. Labeling Systems

El sistema de etiquetado prioriza claridad y brevedad. Las etiquetas se redactan principalmente en español, manteniendo algunos términos técnicos en inglés cuando son parte del vocabulario común del dominio.

| Contexto | Etiquetas principales | Propósito |
| :---- | :---- | :---- |
| Navegación empleado | Inicio, Foro, Mis Encuestas, Mensajes, Perfil | Acceso a tareas diarias del colaborador. |
| Navegación RRHH | Dashboard, Foro, Feedback, Suscripción, Perfil | Gestión y análisis del clima laboral. |
| Acciones frecuentes | Nueva publicación, Comentar, Útil, Reportar, Modo anónimo | Facilitar acciones rápidas y comprensibles. |
| Estados | Pendiente, Completada, Anónimo, En revisión, Confirmado, Fallido | Comunicar el estado de procesos internos. |
| Categorías del foro | Clima laboral, Sugerencias, Eventos, Dudas, Reconocimientos | Ordenar conversaciones por tema. |

### 4.2.3. SEO Tags and Meta Tags

**Landing Page**

```html
<!-- Title -->
<title>SafeSpace | Plataforma de Bienestar y Clima Laboral para Empresas</title>

<!-- Meta Description -->
<meta name="description" content="SafeSpace es la plataforma móvil que conecta a empleados y Recursos Humanos de forma segura y anónima. Mejora el clima laboral con foros, encuestas, dashboards analíticos e inteligencia artificial.">

<!-- Meta Keywords -->
<meta name="keywords" content="clima laboral, bienestar laboral, recursos humanos, aplicación RRHH, foro laboral anónimo, encuestas de clima, dashboard RRHH, gestión de talento, retención de empleados, Perú">

<!-- Meta Author -->
<meta name="author" content="TheSuccesfulOnesCorp">

<!-- Meta Robots -->
<meta name="robots" content="index, follow">

<!-- Open Graph -->
<meta property="og:title" content="SafeSpace | Bienestar Laboral Inteligente">
<meta property="og:description" content="Conecta a tus empleados con RRHH de forma segura, anónima y basada en datos. Descubre SafeSpace.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.safespace.pe">
<meta property="og:locale" content="es_PE">

<!-- Meta Viewport -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Meta Charset -->
<meta charset="UTF-8">
```

**Web Application**

```html
<!-- Title -->
<title>Iniciar Sesión | SafeSpace</title>

<!-- Meta Description -->
<meta name="description" content="Accede a tu cuenta SafeSpace para gestionar el bienestar laboral de tu organización o reportar tu estado anímico de forma anónima y segura.">

<!-- Meta Keywords -->
<meta name="keywords" content="iniciar sesión SafeSpace, acceso RRHH, plataforma laboral, empleado anónimo">

<!-- Meta Author -->
<meta name="author" content="TheSuccesfulOnesCorp">

<!-- Meta Robots -->
<meta name="robots" content="noindex, nofollow">
```

### 4.2.4. Searching Systems

SafeSpace ofrece mecanismos de búsqueda y filtrado diferenciados según la sección y el rol del usuario.

| Sección | Búsqueda de texto | Filtros | Ordenamiento |
| :---- | :----: | :---- | :---- |
| Workers Forum | Sí | Categoría | Recientes, votados o comentados. |
| Dashboard Analítico | No aplica | Área, periodo, indicador y equipo | No aplica. |
| Encuestas enviadas | No aplica | Estado, área y fecha | Cronológico. |
| Historial de pagos | No aplica | No aplica | Cronológico. |
| Mis publicaciones | No aplica | No aplica | Cronológico. |

Si una búsqueda o filtro no devuelve resultados, el sistema muestra mensajes claros como: *"No se encontraron publicaciones con ese término. Intenta con otras palabras o revisa las categorías."*

### 4.2.5. Navigation Systems

SafeSpace utiliza un sistema de navegación diseñado para que tanto el empleado como el responsable de RRHH puedan cumplir sus objetivos con pocos pasos.

**Landing Page**

```text
[ SafeSpace Logo ]  [ Funcionalidades ]  [ Planes ]  [ Contacto ]  [ Iniciar Sesión ]
```

**Aplicación móvil - Empleado**

```text
[ Inicio ]  [ Foro ]  [ Mis Encuestas ]  [ Mensajes ]  [ Perfil ]
```

**Aplicación móvil - RRHH**

```text
[ Dashboard ]  [ Foro ]  [ Feedback ]  [ Suscripción ]  [ Perfil ]
```

**Flujos principales**

```text
Empleado publica en foro:
Inicio -> Foro -> Selecciona categoría -> Nueva publicación -> Completa formulario -> Envía
```

```text
Empleado responde encuesta:
Inicio -> Mis Encuestas -> Selecciona encuesta -> Responde preguntas -> Confirma envío
```

```text
RRHH analiza clima:
Dashboard -> Aplica filtro de área -> Revisa indicador -> Abre detalle -> Define acción
```

---

## 4.3. Landing Page UI Design

La Landing Page es el primer punto de contacto para visitantes y potenciales clientes empresariales. Su diseño comunica la propuesta de valor de SafeSpace, presenta sus principales funcionalidades y orienta al usuario hacia la solicitud de información o demostración.

### 4.3.1. Landing Page Wireframe

Primera vista: Hero principal con propuesta de valor, CTA principal y mockup del flujo móvil.

![Landing Page Wireframe 1](../assets/images/cap3/landing-page/wireframes/landing-wireframe-1.png)

Segunda vista: Sección de valor y beneficios, enfocada en privacidad, comunicación y seguimiento.

![Landing Page Wireframe 2](../assets/images/cap3/landing-page/wireframes/landing-wireframe-2.png)

Tercera vista: Insights y métricas para reforzar la visibilidad que obtiene Recursos Humanos.

![Landing Page Wireframe 3](../assets/images/cap3/landing-page/wireframes/landing-wireframe-3.png)

Cuarta vista: Conversación asistida y soporte digital para empleados.

![Landing Page Wireframe 4](../assets/images/cap3/landing-page/wireframes/landing-wireframe-4.png)

Quinta vista: Cierre comercial con llamada a la acción y formulario de contacto.

![Landing Page Wireframe 5](../assets/images/cap3/landing-page/wireframes/landing-wireframe-5.png)

### 4.3.2. Landing Page Mock-up

Primera vista: Hero visual con CTA destacado.

![Landing Page Mock-up 1](../assets/images/cap3/landing-page/mockups/landing-mockup-1.png)

Segunda vista: Beneficios y comunicación segura.

![Landing Page Mock-up 2](../assets/images/cap3/landing-page/mockups/landing-mockup-2.png)

Tercera vista: Panel de métricas.

![Landing Page Mock-up 3](../assets/images/cap3/landing-page/mockups/landing-mockup-3.png)

Cuarta vista: Asistente y soporte.

![Landing Page Mock-up 4](../assets/images/cap3/landing-page/mockups/landing-mockup-4.png)

Quinta vista: Cierre de conversión y contacto.

![Landing Page Mock-up 5](../assets/images/cap3/landing-page/mockups/landing-mockup-5.png)

---

## 4.4. Mobile Applications UX/UI Design

En esta sección se presentan los artefactos de diseño para la aplicación móvil de SafeSpace. Los wireframes muestran la estructura funcional inicial y los mock-ups representan la aplicación visual de la identidad gráfica.

### 4.4.1. Mobile Applications Wireframes

**Registro de Usuario**

![Register Wireframe](../assets/images/cap3/mobile-app/wireframes/Registro.png){ width=30% }

**Registro con Google**

![Google Wireframe](../assets/images/cap3/mobile-app/wireframes/RegistroGoogle.png){ width=30% }

**Planes de Membresía**

![Memberships Wireframe](../assets/images/cap3/mobile-app/wireframes/PlanesPago.png){ width=30% }

**Menú Principal del Empleado**

![Employee Menu Wireframe](../assets/images/cap3/mobile-app/wireframes/MenuEmpleado.png){ width=30% }

**Menú Principal de RRHH**

![HR Menu Wireframe](../assets/images/cap3/mobile-app/wireframes/MenuRRHH.png){ width=30% }

**Llenado de Encuestas**

![Filling Survey Wireframe](../assets/images/cap3/mobile-app/wireframes/LlenarEncuesta.png){ width=30% }

**Edición de Perfil del Empleado**

![Profile Edit Employee Wireframe](../assets/images/cap3/mobile-app/wireframes/EditarPerfil.png){ width=30% }

**Modo Anónimo**

![Anonymous Mode Wireframe](../assets/images/cap3/mobile-app/wireframes/ModoAnonimo.png){ width=30% }

**Foro de Comunicación**

![Forum Wireframe](../assets/images/cap3/mobile-app/wireframes/Foro.png){ width=30% }

**Publicación en el Foro**

![New Post Wireframe](../assets/images/cap3/mobile-app/wireframes/PublicarForo.png){ width=30% }

**Comentarios en Publicaciones**

![New Comment Wireframe](../assets/images/cap3/mobile-app/wireframes/ComentarForo.png){ width=30% }

**Reporte de Publicaciones**

![Forum Report Wireframe](../assets/images/cap3/mobile-app/wireframes/ReportarForo.png){ width=30% }

**Reportes de Datos para RRHH**

![Data Report Wireframe](../assets/images/cap3/mobile-app/wireframes/ReporteRRHH.png){ width=30% }

### 4.4.2. Mobile Applications Wireflow Diagrams

Los wireflow diagrams conectan wireframes para explicar la secuencia de pantallas necesarias para completar tareas clave.

**Escenario de registro**

![Sign up Wireflow](../assets/images/cap3/userflow/wireframes/Registro.png)

**Escenario de pago de suscripción**

![Payment Wireflow](../assets/images/cap3/userflow/wireframes/PagoMembresia.png)

**Escenario de inicio de sesión**

![Log in Wireflow](../assets/images/cap3/userflow/wireframes/InicioSesion.png)

**Escenario de edición del perfil del empleado**

![Profile Employee Wireflow](../assets/images/cap3/userflow/wireframes/EdicionPerfilEmpleado.png)

**Escenario de edición del perfil de RRHH**

![Profile RRHH Wireflow](../assets/images/cap3/userflow/wireframes/EdicionPerfilRRHH.png)

**Escenario de completar encuesta**

![Survey Wireflow](../assets/images/cap3/userflow/wireframes/Encuesta.png)

**Escenario de acceso a estadísticas**

![Stats Wireflow](../assets/images/cap3/userflow/wireframes/Estadisticas.png)

**Escenario de acceso y uso del foro**

![Forum Wireflow](../assets/images/cap3/userflow/wireframes/Foro.png)

### 4.4.3. Mobile Applications Mock-ups

**Bienvenida**

![Welcome Mockup](../assets/images/cap3/mobile-app/mockups/Bienvenida.png){ width=30% }

**Registro de Usuario**

![Register Mockup](../assets/images/cap3/mobile-app/mockups/Registro.png){ width=30% }

**Registro con Google**

![Google Mockup](../assets/images/cap3/mobile-app/mockups/RegistroGoogle.png){ width=30% }

**Planes de Membresía**

![Memberships Mockup](../assets/images/cap3/mobile-app/mockups/PlanesPago.png){ width=30% }

**Método de Pago**

![Payment Method Mockup](../assets/images/cap3/mobile-app/mockups/MetodoPago.png){ width=30% }

**Menú Principal del Empleado**

![Employee Menu Mockup](../assets/images/cap3/mobile-app/mockups/MenuEmpleado.png){ width=30% }

**Menú Principal de RRHH**

![HR Menu Mockup](../assets/images/cap3/mobile-app/mockups/MenuRRHH.png){ width=30% }

**Llenado de Encuestas**

![Filling Survey Mockup](../assets/images/cap3/mobile-app/mockups/LlenarEncuesta.png){ width=30% }

**Sesión Iniciada**

![Session Mockup](../assets/images/cap3/mobile-app/mockups/SesionIniciada.png){ width=30% }

**Edición de Perfil**

![Profile Edit Mockup](../assets/images/cap3/mobile-app/mockups/EditarPerfil.png){ width=30% }

**Modo Anónimo**

![Anonymous Mode Mockup](../assets/images/cap3/mobile-app/mockups/ModoAnonimo.png){ width=30% }

**Foro de Comunicación**

![Forum Mockup](../assets/images/cap3/mobile-app/mockups/Foro.png){ width=30% }

**Publicación en el Foro**

![New Post Mockup](../assets/images/cap3/mobile-app/mockups/PublicarForo.png){ width=30% }

**Comentarios en Publicaciones**

![New Comment Mockup](../assets/images/cap3/mobile-app/mockups/ComentarForo.png){ width=30% }

**Reporte de Publicaciones**

![Forum Report Mockup](../assets/images/cap3/mobile-app/mockups/ReporteForo.png){ width=30% }

**Reportes para RRHH**

![Data Report Mockup](../assets/images/cap3/mobile-app/mockups/ReporteRRHH.png){ width=30% }

### 4.4.4. Mobile Applications User Flow Diagrams

Los user flow diagrams muestran el recorrido completo del usuario a partir de mock-ups de mayor fidelidad.

**Escenario de registro**

![Sign up User Flow](../assets/images/cap3/userflow/mockups/Registro.png)

**Escenario de pago de suscripción**

![Payment User Flow](../assets/images/cap3/userflow/mockups/Pago.png)

**Escenario de inicio de sesión**

![Log in User Flow](../assets/images/cap3/userflow/mockups/InicioSesion.png)

**Escenario de edición del perfil del empleado**

![Profile Employee User Flow](../assets/images/cap3/userflow/mockups/EdicionPerfilEmpleado.png)

**Escenario de edición del perfil de RRHH**

![Profile RRHH User Flow](../assets/images/cap3/userflow/mockups/EdicionPerfilRRHH.png)

**Escenario de completar encuesta**

![Survey User Flow](../assets/images/cap3/userflow/mockups/Encuesta.png)

**Escenario de acceso a estadísticas**

![Stats User Flow](../assets/images/cap3/userflow/mockups/Estadistica.png)

**Escenario de acceso y uso del foro**

![Forum User Flow](../assets/images/cap3/userflow/mockups/Foro.png)

---

## 4.5. Mobile Applications Prototyping

El prototipado móvil permite validar la navegación principal, el entendimiento de las pantallas y la percepción de confianza en los flujos de registro, encuesta, foro y reporte.

### 4.5.1. Android Mobile Applications Prototyping

Para Android, el prototipo considera los flujos principales de usuario trabajador y usuario RRHH. La implementación futura debe priorizar patrones de Material Design, navegación inferior y pantallas optimizadas para interacción táctil.

**Prototipo de referencia:** [PENDIENTE - Agregar enlace real del prototipo Android]

### 4.5.2. iOS Mobile Applications Prototyping

Para iOS, el prototipo debe mantener los mismos flujos funcionales, adaptando navegación, jerarquías visuales y gestos a las guías de Apple Human Interface Guidelines.

**Prototipo de referencia:** [PENDIENTE - Agregar enlace real del prototipo iOS]

---

## 4.6. Web Applications UX/UI Design

En esta sección se presentan los artefactos de diseño correspondientes a la experiencia web. Para el alcance del proyecto, la experiencia web se enfoca en el acceso de usuarios, vistas de dashboard y flujos administrativos de RRHH.

### 4.6.1. Web Applications Wireframes

Los wireframes web se representan a partir de los flujos principales diseñados para registro, inicio de sesión, estadísticas y gestión de perfiles.

![Web Wireframe - Registro](../assets/images/cap3/userflow/wireframes/Registro.png)

![Web Wireframe - Inicio de Sesión](../assets/images/cap3/userflow/wireframes/InicioSesion.png)

![Web Wireframe - Estadísticas](../assets/images/cap3/userflow/wireframes/Estadisticas.png)

### 4.6.2. Web Applications Wireflow Diagrams

Los wireflow diagrams web describen la secuencia de interacción entre las pantallas principales de acceso y gestión.

![Web Wireflow - Registro](../assets/images/cap3/userflow/wireframes/Registro.png)

![Web Wireflow - Perfil RRHH](../assets/images/cap3/userflow/wireframes/EdicionPerfilRRHH.png)

![Web Wireflow - Estadísticas](../assets/images/cap3/userflow/wireframes/Estadisticas.png)

### 4.6.3. Web Applications Mock-ups

Los mock-ups web muestran el estilo visual final aplicado a las pantallas principales de la experiencia administrativa.

![Web Mock-up - Registro](../assets/images/cap3/userflow/mockups/Registro.png)

![Web Mock-up - Inicio de Sesión](../assets/images/cap3/userflow/mockups/InicioSesion.png)

![Web Mock-up - Estadísticas](../assets/images/cap3/userflow/mockups/Estadistica.png)

### 4.6.4. Web Applications User Flow Diagrams

Los user flow diagrams web conectan las pantallas finales para explicar recorridos de uso frecuentes.

```text
Registro web:
Landing Page -> Registro -> Validación de datos -> Confirmación -> Inicio de sesión
```

```text
Dashboard RRHH:
Inicio de sesión -> Dashboard -> Filtro de área -> Revisión de estadísticas -> Acción de seguimiento
```

![Web User Flow - Inicio de Sesión](../assets/images/cap3/userflow/mockups/InicioSesion.png)

![Web User Flow - Estadísticas](../assets/images/cap3/userflow/mockups/Estadistica.png)

---

## 4.7. Web Applications Prototyping

El prototipo web permite validar los flujos de acceso, consulta de métricas y navegación del usuario de RRHH dentro del dashboard. Este prototipo debe actualizarse cuando la aplicación web final esté disponible.

**Prototipo de referencia:** [PENDIENTE - Agregar enlace real del prototipo web]

---

## 4.8. Domain-Driven Software Architecture

La arquitectura de software de SafeSpace se organiza mediante Domain-Driven Design para separar responsabilidades por dominios de negocio. Esta división facilita la evolución del sistema, la mantenibilidad y el trabajo paralelo del equipo.

### 4.8.1. Software Architecture Context Diagram

El diagrama de contexto muestra la relación entre SafeSpace, sus actores principales y sistemas externos.

![Software Architecture Context Level Diagram](../assets/images/cap4/architecture/c4-context/context-level-diagram.png)

**Actores principales:**

- **Empleado:** interactúa con encuestas, foro, reportes y mensajes.
- **Gerente de RRHH:** monitorea indicadores, gestiona encuestas y revisa reportes.
- **SafeSpace Platform:** centraliza la gestión de clima laboral, comunicación y analítica.

### 4.8.2. Software Architecture Container Diagrams

El diagrama de contenedores representa las aplicaciones y servicios principales de la solución.

![Software Architecture Container Level Diagram](../assets/images/cap4/architecture/c4-container/container-level-diagram.png)

**Contenedores principales:**

1. **Landing Page:** presenta la propuesta de valor y captura interesados.
2. **Mobile Application:** permite a empleados y RRHH interactuar con las funcionalidades principales.
3. **Web Application:** facilita la visualización de indicadores y gestión desde escritorio.
4. **Backend API:** centraliza la lógica de negocio y expone servicios REST.
5. **Database:** almacena usuarios, publicaciones, encuestas, reportes y suscripciones.
6. **External Services:** servicios de notificación, autenticación, pagos o asistencia inteligente según el alcance técnico.

### 4.8.3. Software Architecture Components Diagrams

Los diagramas de componentes muestran la estructura interna de los bounded contexts principales de SafeSpace.

#### Identity and Access Management

![IAM Component Diagram](../assets/images/cap4/architecture/c4-component/iamBCComponent.png)

#### Subscription and Payments Management

![Subscription Component Diagram](../assets/images/cap4/architecture/c4-component/subscriptionPaymentsComponent.png)

#### Workers Forum

![Workers Forum Component Diagram](../assets/images/cap4/architecture/c4-component/workersForumComponent.png)

#### Dashboard and Analytics

![Dashboard Component Diagram](../assets/images/cap4/architecture/c4-component/dashboardAnalyticsComponent.png)

#### Feedback for Workers

![Feedback Component Diagram](../assets/images/cap4/architecture/c4-component/feedbackWorkersComponent.png)

---

## 4.9. Software Object-Oriented Design

El diseño orientado a objetos define las entidades, agregados y servicios principales que soportan los casos de uso de SafeSpace.

### 4.9.1. Class Diagrams

#### Identity and Access Management

![IAM Class Diagram](../assets/images/cap4/class-diagrams/iam-layer-class-diagram.png)

#### Subscription and Payments

![Subscription Class Diagram](../assets/images/cap4/class-diagrams/subscription-layer-class-diagram.png)

#### Workers Forum

![Workers Forum Class Diagram](../assets/images/cap4/class-diagrams/workers-layer-class-diagram.png)

#### Dashboard and Analytics

![Dashboard Class Diagram](../assets/images/cap4/class-diagrams/dashboard-layer-class-diagram.png)

#### Feedback for Workers

![Feedback Class Diagram](../assets/images/cap4/class-diagrams/feedback-layer-class-diagram.png)

### 4.9.2. Class Dictionary

| Clase | Tipo | Bounded Context | Responsabilidad |
| :---- | :---- | :---- | :---- |
| `UserAccount` | Entity | IAM | Representa la cuenta de acceso de un usuario dentro del sistema. |
| `Role` | Entity | IAM | Define permisos y alcance de acciones según el tipo de usuario. |
| `Membership` | Aggregate | Subscription and Payments | Gestiona el ciclo de vida de la suscripción contratada. |
| `MembershipPlan` | Entity | Subscription and Payments | Define las características asociadas a cada plan. |
| `Payment` | Entity | Subscription and Payments | Registra transacciones y estados de pago. |
| `Thread` | Aggregate | Workers Forum | Agrupa publicaciones y comentarios del foro laboral. |
| `Message` | Entity | Workers Forum | Representa un mensaje publicado dentro de un hilo. |
| `Dashboard` | Aggregate | Dashboard and Analytics | Organiza métricas e indicadores visibles para RRHH. |
| `Widget` | Entity | Dashboard and Analytics | Representa un componente visual dentro del dashboard. |
| `PerformanceReview` | Aggregate | Feedback for Workers | Gestiona evaluaciones o comentarios de retroalimentación. |
| `FeedbackComment` | Entity | Feedback for Workers | Registra observaciones o comentarios asociados a un trabajador. |

---

## 4.10. Database Design

El diseño de base de datos define la persistencia necesaria para soportar usuarios, roles, suscripciones, foros, encuestas, métricas y retroalimentación.

### 4.10.1. Relational/Non-Relational Database Diagram

Para el alcance actual, SafeSpace utiliza un enfoque relacional que facilita la integridad de datos y la trazabilidad entre usuarios, empresas, reportes y módulos del sistema.

#### Identity and Access Management

![IAM Database Design Diagram](../assets/images/cap4/database/iam-database-design-diagram.png)

#### Subscription and Payments

![Subscription Database Design Diagram](../assets/images/cap4/database/subscription-database-design-diagram.png)

#### Workers Forum

![Workers Forum Database Design Diagram](../assets/images/cap4/database/workers-database-design-diagram.png)

#### Dashboard and Analytics

![Dashboard Database Design Diagram](../assets/images/cap4/database/dashboard-database-design-diagram.png)

#### Feedback for Workers

![Feedback Database Design Diagram](../assets/images/cap4/database/feedbackDatabaseDesign.png)

\newpage
