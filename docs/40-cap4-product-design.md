# Capítulo IV: Product Design

En este capítulo se presenta la propuesta integral de diseño del producto **SafeSpace**, desarrollado por **TheSuccesfulOnesCorp**. Se incluyen las directrices visuales, la arquitectura de información, los artefactos de diseño UI/UX, los prototipos, la arquitectura de software basada en Domain-Driven Design, los diagramas orientados a objetos y el diseño de base de datos.

---

## 4.1. Style Guidelines

Las guías de estilo permiten mantener una identidad común entre la landing page, la web y Android, respetando sus patrones de interacción. Esta versión integra la identidad visual observada en los frontends y en la landing page publicada.

### 4.1.1. General Style Guidelines



El logo de SafeSpace representa la identidad visual del producto y se emplea como referencia en las pantallas de acceso, navegación y materiales de presentación.

#### Branding

La marca visible es **SafeSpace**. El logotipo oficial combina el isotipo coral y verde oscuro con el nombre de la marca y el descriptor **BIENESTAR LABORAL**. Se utiliza en la navegación de la landing page, en el footer y como referencia común para los accesos y las interfaces web y Android. Los mockups de la landing incorporan el recurso gráfico oficial; los wireframes mantienen una representación estructural del logo para priorizar la distribución del contenido.

![Logo oficial de SafeSpace](../assets/images/shared/safespace-logo.jpeg)

#### Tipografía

La aplicación web emplea **Manrope** como fuente principal y **DM Mono** para etiquetas auxiliares. Android utiliza la familia sans serif del sistema mediante la tipografía de Material 3. Los mockups móviles usan **Roboto** con Arial de respaldo; los wireframes usan Arial. Estos valores documentan los recursos revisados y no implican que todos los textos de ambas plataformas tengan idénticas medidas.

En web, los títulos de página emplean Manrope con peso destacado y tamaños adaptables entre 28 y 36 px. Los textos de los formularios y sus controles se sitúan habitualmente entre 12 y 14 px. Las fechas, los estados y otras etiquetas auxiliares utilizan DM Mono, normalmente a 10 px, para diferenciarlos del contenido principal.

En Android, las jerarquías headline y title de Material 3 distinguen los encabezados. Los estilos bodyLarge y bodyMedium organizan la lectura con interlineados de 24 y 21 sp, mientras que los estilos label identifican acciones y controles. Los mockups se representan con un ancho base de 1440 px para web y 412 px para Android; estos valores describen los lienzos de diseño.

![Muestras tipográficas de Manrope, DM Mono y Roboto para SafeSpace](../assets/images/cap4/revision-20260911/style-guidelines/tipografia.png)

#### Paleta de colores

La base visual combina el **verde oscuro (#243432)** en navegación y acciones principales con el **verde salvia (#A7C4A5)** en contenedores y estados destacados. El texto principal utiliza **#16211F** y las descripciones o metadatos emplean **#73807B**. El fondo claro **#F5F6F1** separa el espacio general de las tarjetas, formularios y diálogos blancos **#FFFFFF**. Esta distribución permite reconocer las áreas de contenido y sus acciones.

![Paleta base de SafeSpace: colores y códigos hexadecimales](../assets/images/cap4/revision-20260911/style-guidelines/paleta-base.png)

Los acentos ayudan a diferenciar tipos de información. El **coral (#EE8E79)** aparece en detalles y selección de navegación; el **azul suave (#B9D8E5)** distingue contenido informativo, y el **dorado (#E9C36C)** destaca estados como En revisión. En web también se utiliza **lila (#E2D0FA)** en recursos y acentos auxiliares, y **#B64F43** para mensajes y acciones de error. Estos colores acompañan las etiquetas y los controles correspondientes.

![Colores de acento de SafeSpace y color de error web](../assets/images/cap4/revision-20260911/style-guidelines/paleta-acentos.png)

Los colores no sustituyen las etiquetas: una encuesta distingue **Borrador**, **Publicada** y **Cerrada** mediante texto; un reporte distingue **Nuevo**, **En revisión**, **Atendido** y **Cerrado**. El tema oscuro dispone de tokens propios, entre ellos fondo `#18211F`, panel `#202B28` y texto `#E6ECE8`.

![Muestras del fondo, panel y texto del tema oscuro](../assets/images/cap4/revision-20260911/style-guidelines/paleta-oscura.png)

#### Espaciado y agrupación

Los controles relacionados se agrupan en tarjetas y formularios. Los márgenes exteriores separan la navegación del contenido; las distancias entre etiqueta, campo y mensaje permiten reconocer cada unidad de interacción. En las reconstrucciones se mantienen separaciones consistentes dentro de cada plataforma, con mayor espacio entre secciones que entre elementos de un mismo grupo. Las pantallas móviles largas admiten desplazamiento y conservan el orden de lectura. Esta descripción no atribuye al código una escala universal de espaciado que no se haya verificado.

#### Tono de comunicación

Como criterio de comunicación se adopta un tono **serio, casual, respetuoso y sereno**, siguiendo las cuatro dimensiones solicitadas por el enunciado. Se priorizan indicaciones breves, cercanas y sin juicios sobre el estado emocional. Los errores explican qué ocurrió y qué acción permite continuar; las confirmaciones describen únicamente operaciones aceptadas. Por ejemplo, «No se pudo enviar. Vuelve a intentarlo» comunica una falla sin responsabilizar al usuario. Este criterio editorial deberá contrastarse con todas las cadenas de texto al implementar ajustes.

#### Componentes y estados

La estructura visual distingue navegación, título de página, contenido principal y acciones. Los formularios identifican los campos necesarios y comunican el resultado de la operación. Se consideran estados de carga, contenido vacío, datos rechazados, fallas del servicio y operación completada. El mensaje de éxito se vincula con una respuesta aceptada por el servicio, no con la sola selección de un botón.

### 4.1.2. Web Style Guidelines

La web está disponible para **empleados y RRHH**. En escritorio utiliza una barra lateral de 248 px, una cabecera y un área principal desplazable. Los estilos incluyen ajustes a 900, 680 y 430 px; no se asume una grilla de doce columnas que no esté documentada en el código.

Las acciones principales tienen contornos rectos en buena parte del área de trabajo, mientras que el acceso usa una tarjeta redondeada. La página **Encuestas** reúne las pestañas Encuestas, Actividades semanales y Reportes. **Gestión** muestra formularios de creación dentro de la página. El detalle de reportes y la edición o eliminación de conversaciones utilizan modales.

Las etiquetas de los campos, el foco visible y los textos que acompañan a los estados contribuyen a la comprensión de la interfaz. Una evaluación formal de accesibilidad y de adaptación a todos los tamaños deberá realizarse sobre la aplicación ejecutada; estos artefactos no constituyen esa validación.

### 4.1.3. Mobile Style Guidelines

La documentación móvil corresponde al frontend **Android desarrollado con Jetpack Compose**. La navegación inferior separa las tareas principales por rol. Las pantallas secundarias incorporan acciones para regresar y los formularios largos permiten desplazamiento vertical. Las imágenes muestran el contenido completo de esas pantallas; su altura no representa necesariamente un único viewport del teléfono.

#### 4.1.3.1. iOS Mobile Style Guidelines

No se dispone de un frontend iOS en los repositorios considerados. Por ello, los mockups Android no se presentan como un diseño iOS ya implementado. La adaptación a iOS y sus patrones de navegación queda pendiente de un alcance y una implementación propios.

#### 4.1.3.2. Android Mobile Style Guidelines

La interfaz utiliza componentes Material 3, tarjetas, botones, campos delineados y diálogos. Los tokens de forma incluyen radios de 8, 12, 18 y 28 dp. Se consideran tema claro y oscuro, textos traducibles al español e inglés y navegación inferior con cuatro destinos según el rol.

El empleado accede al **Centro de Encuestas**, desde el que abre encuestas diarias, actividades semanales o el formulario de reporte. Los ajustes de cuenta usan diálogos por campo. RRHH crea encuestas y actividades mediante diálogos y confirma su cierre. En reportes, el detalle es una hoja de consulta; el cambio de estado se realiza desde la tarjeta de la bandeja.

## 4.2. Information Architecture

La arquitectura de información organiza el producto en torno a tareas de bienestar, participación, orientación y gestión. Los destinos se ajustan al rol de la sesión; no se propone un selector manual de empleado o RRHH en el inicio de sesión.

### 4.2.1. Organization Systems

| Contexto                | Organización                            | Contenido disponible                                                                    |
| :---------------------- | :-------------------------------------- | :-------------------------------------------------------------------------------------- |
| Acceso                  | Secuencia de formularios                | Inicio de sesión, registro y recuperación de acceso.                                    |
| Empleado, web           | Navegación por tareas y pestañas        | Inicio; Encuestas, Actividades semanales y Reportes; Chat AI; Perfil y Configuración.   |
| Empleado, Android       | Navegación inferior y centro de tareas  | Inicio; Centro de Encuestas y sus destinos; Chat IA; Perfil y ajustes.                  |
| RRHH, ambas plataformas | Resumen y gestión por tipo de contenido | Resumen de bienestar, gestión de encuestas y actividades, bandeja de reportes y cuenta. |
| Conversaciones          | Historial y detalle                     | Crear, abrir, renombrar y eliminar conversaciones.                                      |
| Reportes de RRHH        | Lista, filtros y detalle                | Todos, En revisión y Atendidos; consulta del caso y actualización de estado.            |

Los comentarios están asociados a encuestas. No se incorpora un foro independiente, pagos, membresías, suscripciones ni acceso con Google, porque esos recorridos no están presentes en los frontends revisados. Las tarjetas de recursos guiados y métricas personales aparecen como **Próximamente** y no se incluyen como funciones completadas.

### 4.2.2. Labeling Systems

| Grupo                  | Etiquetas                                                                                         | Finalidad                                             |
| :--------------------- | :------------------------------------------------------------------------------------------------ | :---------------------------------------------------- |
| Navegación de empleado | Inicio, Encuestas, Chat AI/Chat IA, Perfil                                                        | Localizar las tareas personales.                      |
| Navegación de RRHH     | Inicio, Gestión, Reportes, Perfil                                                                 | Acceder a resumen, contenido y casos reportados.      |
| Participación          | Enviar respuesta, Mostrar comentarios, Votar, Crear reporte                                       | Diferenciar respuesta, comentario, voto y reporte.    |
| Gestión                | Nueva encuesta, Nueva actividad, Publicar, Cerrar, Cambiar estado                                 | Comunicar operaciones sobre contenido y reportes.     |
| Cuenta                 | Configuración, Cambiar nombre, Cambiar correo, Idioma, Tema oscuro                                | Administrar los datos y preferencias propias.         |
| Estados                | Respuesta registrada, Voto registrado, Borrador, Publicada, Cerrada, Nuevo, En revisión, Atendido | Dar visibilidad al resultado y al estado del recurso. |

El anonimato se explica donde corresponde: comentarios anónimos de encuestas y opción de envío anónimo del reporte. No se documenta como una preferencia global que cambie todas las operaciones de la cuenta.

### 4.2.3. SEO Tags and Meta Tags

La landing page se revisará por separado. En la web autenticada, el archivo de entrada consultado declara idioma español, codificación UTF-8, viewport adaptable, título SafeSpace, color de tema `#243432` y la descripción **«SafeSpace: bienestar laboral seguro y humano.»**

La versión revisada no declara una directiva `noindex, nofollow`; por ello no se presenta como implementada. Si se decide añadirla, deberá tratarse como una mejora independiente. Tampoco se atribuyen a la aplicación metadatos de una landing page o un dominio comercial no verificado.

### 4.2.4. Searching Systems

| Sección                 | Mecanismo actual                                      | Sin contenido o con error                                      |
| :---------------------- | :---------------------------------------------------- | :------------------------------------------------------------- |
| Encuestas y actividades | Navegación por pestaña o categoría, según plataforma. | Estado vacío o aviso de carga fallida.                         |
| Reportes RRHH           | Filtros Todos, En revisión y Atendidos.               | Resultado vacío del filtro; posibilidad de cambiarlo.          |
| Conversaciones          | Selección desde el historial.                         | Estado sin conversaciones; opción de crear una.                |
| Resumen RRHH            | Consulta agregada del resumen disponible.             | Error de consulta o indicadores sin respuestas, diferenciados. |

No se documentan buscadores de texto, filtros por área o período del dashboard ni historiales de pagos que no estén implementados en estas interfaces.

### 4.2.5. Navigation Systems

| Plataforma y rol  | Recorrido principal                                                                       |
| :---------------- | :---------------------------------------------------------------------------------------- |
| Web, empleado     | Inicio → Encuestas / Chat AI; acceso a Perfil y Configuración desde el espacio de cuenta. |
| Web, RRHH         | Inicio → Gestión / Reportes; acceso a Perfil y Configuración.                             |
| Android, empleado | Inicio · Encuestas · Chat IA · Perfil.                                                    |
| Android, RRHH     | Inicio · Gestión · Reportes · Perfil.                                                     |

En Android, **Encuestas → Centro de Encuestas** abre encuestas diarias, actividades semanales o creación de reportes. En web, esas tareas se agrupan en pestañas de una misma página. Las respuestas y los votos modifican el estado del contenido; no representan necesariamente navegación a otra pantalla.

Los wireflows usan los mismos identificadores de las vistas del catálogo. Las flechas indican la acción y, cuando corresponde, la aceptación del servicio. Los user flows distinguen pasos, decisiones y resultados: verde para el recorrido exitoso, coral para condiciones que impiden completarlo y línea discontinua para el retorno o reintento. Las salidas alternativas válidas —cancelar o encontrar una encuesta ya respondida— se describen explícitamente y no se confunden con un fallo técnico.

## 4.3. Landing Page UI Design

La Landing Page es el primer punto de contacto para visitantes y potenciales clientes empresariales. Su diseño comunica la propuesta de valor de SafeSpace, presenta sus principales funcionalidades y orienta al usuario hacia la solicitud de información o demostración.

### 4.3.1. Landing Page Wireframe

Los wireframes se separan según las secciones visibles de la landing page publicada. Se conserva la retícula, la jerarquía de títulos y el orden de navegación, representando con bloques estructurales las imágenes y componentes visuales.

**Sección 01 — Hero.** Navegación principal, selector de idioma, CTA «Empieza» y propuesta de valor.

![Landing Page Wireframe — Hero](../assets/images/cap3/landing-page/wireframes/landing-section-01-hero.svg)

**Sección 02 — Producto.** Presentación del ecosistema SafeSpace y composición de vistas de computadora y celular.

![Landing Page Wireframe — Producto](../assets/images/cap3/landing-page/wireframes/landing-section-02-product.svg)

**Sección 03 — Empleados y Recursos Humanos.** Dos formas de acompañar dentro de una misma plataforma.

![Landing Page Wireframe — Empleados y RR. HH.](../assets/images/cap3/landing-page/wireframes/landing-section-03-people.svg)

**Sección 04 — Planes.** Modalidades mensual y anual, con el selector de moneda y las acciones de elección.

![Landing Page Wireframe — Planes](../assets/images/cap3/landing-page/wireframes/landing-section-04-plans.svg)

**Sección 05 — Contacto.** Mensaje de contacto y formulario para iniciar la conversación con la organización.

![Landing Page Wireframe — Contacto](../assets/images/cap3/landing-page/wireframes/landing-section-05-contact.svg)

**Sección 06 — Conócenos.** Visión, misión y carrusel de perfiles del equipo de SafeSpace.

![Landing Page Wireframe — Conócenos](../assets/images/cap3/landing-page/wireframes/landing-section-06-about.svg)

**Sección 07 — CTA y footer.** Llamada final hacia los planes, enlaces legales, soporte y derechos reservados.

![Landing Page Wireframe — CTA y footer](../assets/images/cap3/landing-page/wireframes/landing-section-07-join-footer.svg)

### 4.3.2. Landing Page Mock-up

Los mockups incorporan el logotipo oficial y reproducen la composición visual actual de la landing: fondo claro, tipografía de alto contraste, acentos coral, verde oscuro, tarjetas divididas, collage de pantallas, planes, formulario de contacto, perfil del equipo y CTA final.

**Sección 01 — Hero.**

![Landing Page Mock-up — Hero](../assets/images/cap3/landing-page/mockups/landing-section-01-hero.svg)

**Sección 02 — Producto.**

![Landing Page Mock-up — Producto](../assets/images/cap3/landing-page/mockups/landing-section-02-product.svg)

**Sección 03 — Empleados y Recursos Humanos.**

![Landing Page Mock-up — Empleados y RR. HH.](../assets/images/cap3/landing-page/mockups/landing-section-03-people.svg)

**Sección 04 — Planes.**

![Landing Page Mock-up — Planes](../assets/images/cap3/landing-page/mockups/landing-section-04-plans.svg)

**Sección 05 — Contacto.**

![Landing Page Mock-up — Contacto](../assets/images/cap3/landing-page/mockups/landing-section-05-contact.svg)

**Sección 06 — Conócenos.**

![Landing Page Mock-up — Conócenos](../assets/images/cap3/landing-page/mockups/landing-section-06-about.svg)

**Sección 07 — CTA y footer.**

![Landing Page Mock-up — CTA y footer](../assets/images/cap3/landing-page/mockups/landing-section-07-join-footer.svg)

---

## 4.4. Mobile Applications UX/UI Design

Los mockups y wireframes son reconstrucciones de diseño basadas en el frontend, con datos ficticios. Representan la interfaz y sus estados; no constituyen evidencia de ejecución ni de validación con usuarios.

Esta sección contiene exclusivamente la experiencia Android. Incluye acceso, registro emocional, encuestas y comentarios, actividades, reportes, chat de apoyo, resumen de RRHH, gestión de contenido y cuenta. Se distinguen los destinos del Centro de Encuestas, los diálogos de edición y la navegación inferior.

### 4.4.1. Mobile Applications Wireframes

El catálogo de Android contiene **55 vistas y estados estructurales**, agrupados por acceso, empleado y RRHH. Se mantienen los identificadores de las vistas para relacionar imágenes y flujos. Las láminas siguientes contienen el catálogo completo en imágenes PNG.

**Vistas 01, 02, 03.** Inicio de sesión; Registro de cuenta; Recuperar acceso.

![Android wireframes — 01, 02, 03](../assets/images/cap4/revision-20260911/assets/mobile/boards/wireframes-01.png)

**Vistas 04, 05, 06.** Enlace de recuperación enviado; Nueva contraseña con token; Contraseña actualizada.

![Android wireframes — 04, 05, 06](../assets/images/cap4/revision-20260911/assets/mobile/boards/wireframes-02.png)

**Vistas 07, 10, 11.** Acceso · error de credenciales; Inicio del empleado; Estado de ánimo registrado.

![Android wireframes — 07, 10, 11](../assets/images/cap4/revision-20260911/assets/mobile/boards/wireframes-03.png)

**Vistas 12, 13, 14.** Centro de encuestas; Encuestas diarias · responder; Encuesta respondida.

![Android wireframes — 12, 13, 14](../assets/images/cap4/revision-20260911/assets/mobile/boards/wireframes-04.png)

**Vistas 15, 16, 17.** Comentarios anónimos; Responder a un comentario; Encuestas · sin contenido.

![Android wireframes — 15, 16, 17](../assets/images/cap4/revision-20260911/assets/mobile/boards/wireframes-05.png)

**Vistas 18, 19, 20.** Actividades semanales · votación; Actividad · voto registrado; Actividades · sin contenido.

![Android wireframes — 18, 19, 20](../assets/images/cap4/revision-20260911/assets/mobile/boards/wireframes-06.png)

**Vistas 21, 22, 23.** Crear reporte confidencial; Reporte · seleccionar área; Reporte · validación de campos.

![Android wireframes — 21, 22, 23](../assets/images/cap4/revision-20260911/assets/mobile/boards/wireframes-07.png)

**Vistas 30, 31, 32.** Historial de conversaciones; Conversaciones · vacío; Conversación de apoyo.

![Android wireframes — 30, 31, 32](../assets/images/cap4/revision-20260911/assets/mobile/boards/wireframes-08.png)

**Vistas 33, 34, 35.** Nueva conversación; Editar nombre de conversación; Eliminar conversación.

![Android wireframes — 33, 34, 35](../assets/images/cap4/revision-20260911/assets/mobile/boards/wireframes-09.png)

**Vistas 36, 37, 38.** Opciones de conversación; Chat · asistente escribiendo; Chat · error de conexión.

![Android wireframes — 36, 37, 38](../assets/images/cap4/revision-20260911/assets/mobile/boards/wireframes-10.png)

**Vistas 40, 41, 43.** Resumen de bienestar RRHH; Gestión de encuestas; Nueva encuesta.

![Android wireframes — 40, 41, 43](../assets/images/cap4/revision-20260911/assets/mobile/boards/wireframes-11.png)

**Vistas 44, 45, 46.** Gestión de actividades y resultados; Nueva actividad; Cerrar encuesta · confirmación.

![Android wireframes — 44, 45, 46](../assets/images/cap4/revision-20260911/assets/mobile/boards/wireframes-12.png)

**Vistas 47, 48, 49.** Cerrar actividad · confirmación; Gestión · contenido vacío; Gestión · actividad cerrada.

![Android wireframes — 47, 48, 49](../assets/images/cap4/revision-20260911/assets/mobile/boards/wireframes-13.png)

**Vistas 50, 51, 52.** Bandeja de reportes RRHH; Reportes · filtro en revisión; Reporte · detalle de consulta.

![Android wireframes — 50, 51, 52](../assets/images/cap4/revision-20260911/assets/mobile/boards/wireframes-14.png)

**Vistas 53, 60, 61.** Reportes · sin resultados; Perfil empleado; Configuración empleado.

![Android wireframes — 53, 60, 61](../assets/images/cap4/revision-20260911/assets/mobile/boards/wireframes-15.png)

**Vistas 62, 70, 71.** Configuración · tema oscuro empleado; Perfil rrhh; Configuración rrhh.

![Android wireframes — 62, 70, 71](../assets/images/cap4/revision-20260911/assets/mobile/boards/wireframes-16.png)

**Vistas 72, 63, 64.** Configuración · tema oscuro rrhh; Cambiar nombre visible; Cambiar nombre de usuario.

![Android wireframes — 72, 63, 64](../assets/images/cap4/revision-20260911/assets/mobile/boards/wireframes-17.png)

**Vistas 65, 66, 80.** Cambiar correo electrónico; Seleccionar idioma; Carga de contenido.

![Android wireframes — 65, 66, 80](../assets/images/cap4/revision-20260911/assets/mobile/boards/wireframes-18.png)

**Vistas 81.** Error de carga.

![Android wireframes — 81](../assets/images/cap4/revision-20260911/assets/mobile/boards/wireframes-19.png)

### 4.4.2. Mobile Applications Wireflow Diagrams

Los diagramas mantienen la idea de los wireflows anteriores —pantallas enlazadas por acciones— y sustituyen las vistas y transiciones por las del frontend revisado. Un estado de la misma pantalla puede aparecer varias veces para representar el cambio producido por una acción.

#### G00. Acceder al espacio correspondiente a mi rol

**User Persona:** Andrés / Beatriz, según la cuenta. **Actor:** Empleado / RRHH. **Precondición:** Cuenta existente y sesión no iniciada.

**Resultado esperado:** Sesión iniciada y navegación correspondiente al rol.

La imagen de error representa una alternativa, no un paso obligatorio. El sistema decide el destino por el rol; no existe un selector de rol en Login.

![Android wireflows G00](../assets/images/cap4/revision-20260911/diagrams/mobile/wireflows/G00.png)

#### G01. Crear una cuenta para utilizar SafeSpace

**User Persona:** Andrés / Beatriz, según la cuenta. **Actor:** Nuevo usuario. **Precondición:** No tener una cuenta utilizable.

**Resultado esperado:** Registro aceptado y retorno a Inicio de sesión.

Android solicita usuario, correo, contraseña y confirmación. No se añade un campo de nombre visible al registro.

![Android wireflows G01](../assets/images/cap4/revision-20260911/diagrams/mobile/wireflows/G01.png)

#### G02. Restablecer mi contraseña

**User Persona:** Andrés / Beatriz, según la cuenta. **Actor:** Usuario sin acceso. **Precondición:** Recordar el usuario o correo asociado a la cuenta.

**Resultado esperado:** Contraseña actualizada; el usuario puede volver a iniciar sesión.

El aviso «si la cuenta existe» no confirma que el correo se haya entregado ni revela la existencia de la cuenta.

![Android wireflows G02](../assets/images/cap4/revision-20260911/diagrams/mobile/wireflows/G02.png)

#### G03. Registrar cómo me siento hoy

**User Persona:** Andrés (El Empleado). **Actor:** Empleado. **Precondición:** Sesión de empleado activa.

**Resultado esperado:** Estado de ánimo del día registrado y selección bloqueada para ese día.

Las tarjetas Métricas de bienestar y Recursos guiados están marcadas Próximamente y no forman parte de este recorrido.

![Android wireflows G03](../assets/images/cap4/revision-20260911/diagrams/mobile/wireflows/G03.png)

#### G04. Responder una encuesta y aportar contexto

**User Persona:** Andrés (El Empleado). **Actor:** Empleado. **Precondición:** Sesión activa y encuesta publicada disponible.

**Resultado esperado:** Respuesta registrada; los comentarios son opcionales y dependen de la encuesta.

Los comentarios permiten respuestas anidadas. No existe un foro independiente.

![Android wireflows G04](../assets/images/cap4/revision-20260911/diagrams/mobile/wireflows/G04.png)

#### G05. Elegir una actividad del equipo mediante mi voto

**User Persona:** Andrés (El Empleado). **Actor:** Empleado. **Precondición:** Sesión activa y actividad abierta.

**Resultado esperado:** Voto aceptado para la opción seleccionada.

La interfaz permite cambiar el voto y actualiza los resultados después del envío.

![Android wireflows G05](../assets/images/cap4/revision-20260911/diagrams/mobile/wireflows/G05.png)

#### G06. Comunicar una situación laboral a RRHH

**User Persona:** Andrés (El Empleado). **Actor:** Empleado. **Precondición:** Sesión activa; conocer los datos de la situación.

**Resultado esperado:** Reporte aceptado y retorno al Centro de Encuestas.

El anonimato se selecciona para este reporte; no es un modo anónimo global. La validación es una rama alternativa, no una pantalla obligatoria.

![Android wireflows G06](../assets/images/cap4/revision-20260911/diagrams/mobile/wireflows/G06.png)

#### G07. Obtener orientación y conservar una conversación

**User Persona:** Andrés (El Empleado). **Actor:** Empleado. **Precondición:** Sesión activa y servicio de IA disponible.

**Resultado esperado:** Conversación con respuesta del asistente disponible en el historial.

El camino de error exige reescribir o revisar el mensaje antes de volver a enviarlo; no se presupone reenvío automático. Renombrar y eliminar son operaciones opcionales; eliminar requiere confirmación.

![Android wireflows G07](../assets/images/cap4/revision-20260911/diagrams/mobile/wireflows/G07.png)

#### G08. Publicar una encuesta para escuchar al equipo

**User Persona:** Beatriz (La Gerente). **Actor:** RRHH. **Precondición:** Sesión de RRHH activa.

**Resultado esperado:** Encuesta publicada después de su creación como borrador.

Crear y cerrar usan diálogos. Al cerrar, el ViewModel retira la encuesta de la lista local; no se garantiza que quede visible como historial inmediato.

![Android wireflows G08](../assets/images/cap4/revision-20260911/diagrams/mobile/wireflows/G08.png)

#### G09. Crear una votación y cerrar la actividad

**User Persona:** Beatriz (La Gerente). **Actor:** RRHH. **Precondición:** Sesión de RRHH activa.

**Resultado esperado:** Actividad creada, abierta a votación y cerrada mediante una operación aceptada.

Las opciones se escriben una por línea y deben ser al menos dos. Al cerrar se retira la actividad de la lista local; el estado de destino se explica en el pie del wireflow.

![Android wireflows G09](../assets/images/cap4/revision-20260911/diagrams/mobile/wireflows/G09.png)

#### G10. Revisar un reporte y actualizar su atención

**User Persona:** Beatriz (La Gerente). **Actor:** RRHH. **Precondición:** Sesión activa y reporte existente.

**Resultado esperado:** Estado del reporte actualizado tras confirmación del servicio.

En Android, el detalle es una hoja de consulta. Cambiar estado está en la tarjeta de la bandeja, no dentro de la hoja.

![Android wireflows G10](../assets/images/cap4/revision-20260911/diagrams/mobile/wireflows/G10.png)

#### G11. Consultar el resumen de bienestar del equipo

**User Persona:** Beatriz (La Gerente). **Actor:** RRHH. **Precondición:** Sesión de RRHH activa.

**Resultado esperado:** Consultar distribución emocional, empleados activos y tasa de respuesta.

No se añaden filtros de área, período ni navegación a personas: el frontend revisado presenta un resumen agregado. Cero respuestas no equivale a un error.

![Android wireflows G11](../assets/images/cap4/revision-20260911/diagrams/mobile/wireflows/G11.png)

#### G12. Actualizar mi cuenta y mis preferencias

**User Persona:** Andrés / Beatriz, según la cuenta. **Actor:** Empleado / RRHH. **Precondición:** Sesión activa y acceso a la cuenta propia.

**Resultado esperado:** Datos o preferencias actualizados con respuesta satisfactoria.

Cada dato de cuenta se edita en un diálogo; idioma y tema se guardan al seleccionarlos. Cambiar contraseña aparece como Próximamente.

![Android wireflows G12](../assets/images/cap4/revision-20260911/diagrams/mobile/wireflows/G12.png)

### 4.4.3. Mobile Applications Mock-ups

El catálogo de Android contiene **55 vistas y estados visuales**, agrupados por acceso, empleado y RRHH. Se mantienen los identificadores de las vistas para relacionar imágenes y flujos. Las láminas siguientes contienen el catálogo completo en imágenes PNG.

**Vistas 01, 02, 03.** Inicio de sesión; Registro de cuenta; Recuperar acceso.

![Android mockups — 01, 02, 03](../assets/images/cap4/revision-20260911/assets/mobile/boards/mockups-01.png)

**Vistas 04, 05, 06.** Enlace de recuperación enviado; Nueva contraseña con token; Contraseña actualizada.

![Android mockups — 04, 05, 06](../assets/images/cap4/revision-20260911/assets/mobile/boards/mockups-02.png)

**Vistas 07, 10, 11.** Acceso · error de credenciales; Inicio del empleado; Estado de ánimo registrado.

![Android mockups — 07, 10, 11](../assets/images/cap4/revision-20260911/assets/mobile/boards/mockups-03.png)

**Vistas 12, 13, 14.** Centro de encuestas; Encuestas diarias · responder; Encuesta respondida.

![Android mockups — 12, 13, 14](../assets/images/cap4/revision-20260911/assets/mobile/boards/mockups-04.png)

**Vistas 15, 16, 17.** Comentarios anónimos; Responder a un comentario; Encuestas · sin contenido.

![Android mockups — 15, 16, 17](../assets/images/cap4/revision-20260911/assets/mobile/boards/mockups-05.png)

**Vistas 18, 19, 20.** Actividades semanales · votación; Actividad · voto registrado; Actividades · sin contenido.

![Android mockups — 18, 19, 20](../assets/images/cap4/revision-20260911/assets/mobile/boards/mockups-06.png)

**Vistas 21, 22, 23.** Crear reporte confidencial; Reporte · seleccionar área; Reporte · validación de campos.

![Android mockups — 21, 22, 23](../assets/images/cap4/revision-20260911/assets/mobile/boards/mockups-07.png)

**Vistas 30, 31, 32.** Historial de conversaciones; Conversaciones · vacío; Conversación de apoyo.

![Android mockups — 30, 31, 32](../assets/images/cap4/revision-20260911/assets/mobile/boards/mockups-08.png)

**Vistas 33, 34, 35.** Nueva conversación; Editar nombre de conversación; Eliminar conversación.

![Android mockups — 33, 34, 35](../assets/images/cap4/revision-20260911/assets/mobile/boards/mockups-09.png)

**Vistas 36, 37, 38.** Opciones de conversación; Chat · asistente escribiendo; Chat · error de conexión.

![Android mockups — 36, 37, 38](../assets/images/cap4/revision-20260911/assets/mobile/boards/mockups-10.png)

**Vistas 40, 41, 43.** Resumen de bienestar RRHH; Gestión de encuestas; Nueva encuesta.

![Android mockups — 40, 41, 43](../assets/images/cap4/revision-20260911/assets/mobile/boards/mockups-11.png)

**Vistas 44, 45, 46.** Gestión de actividades y resultados; Nueva actividad; Cerrar encuesta · confirmación.

![Android mockups — 44, 45, 46](../assets/images/cap4/revision-20260911/assets/mobile/boards/mockups-12.png)

**Vistas 47, 48, 49.** Cerrar actividad · confirmación; Gestión · contenido vacío; Gestión · actividad cerrada.

![Android mockups — 47, 48, 49](../assets/images/cap4/revision-20260911/assets/mobile/boards/mockups-13.png)

**Vistas 50, 51, 52.** Bandeja de reportes RRHH; Reportes · filtro en revisión; Reporte · detalle de consulta.

![Android mockups — 50, 51, 52](../assets/images/cap4/revision-20260911/assets/mobile/boards/mockups-14.png)

**Vistas 53, 60, 61.** Reportes · sin resultados; Perfil empleado; Configuración empleado.

![Android mockups — 53, 60, 61](../assets/images/cap4/revision-20260911/assets/mobile/boards/mockups-15.png)

**Vistas 62, 70, 71.** Configuración · tema oscuro empleado; Perfil rrhh; Configuración rrhh.

![Android mockups — 62, 70, 71](../assets/images/cap4/revision-20260911/assets/mobile/boards/mockups-16.png)

**Vistas 72, 63, 64.** Configuración · tema oscuro rrhh; Cambiar nombre visible; Cambiar nombre de usuario.

![Android mockups — 72, 63, 64](../assets/images/cap4/revision-20260911/assets/mobile/boards/mockups-17.png)

**Vistas 65, 66, 80.** Cambiar correo electrónico; Seleccionar idioma; Carga de contenido.

![Android mockups — 65, 66, 80](../assets/images/cap4/revision-20260911/assets/mobile/boards/mockups-18.png)

**Vistas 81.** Error de carga.

![Android mockups — 81](../assets/images/cap4/revision-20260911/assets/mobile/boards/mockups-19.png)

### 4.4.4. Mobile Applications User Flow Diagrams

Los objetivos se formulan desde la intención de la persona. Cada diagrama presenta un happy path y un unhappy path explícitos, unidos por una decisión Sí/No. Se selecciona un caso de error concreto por objetivo; las demás condiciones del recorrido se asumen válidas en este escenario. La ruta de error indica qué impide cumplir el objetivo y cómo reintentarlo. Los mockups muestran la vista de interacción y el resultado; cuando no existe un mockup específico del error, la condición se describe fuera de la interfaz, sin inventar una pantalla. Los errores se describen como estados de interfaz y no como nuevas pantallas que necesariamente existan. Las acciones opcionales se explican en el pie y no condicionan el logro principal.

#### G00. Acceder al espacio correspondiente a mi rol

**User Persona:** Andrés / Beatriz, según la cuenta. **Actor:** Empleado / RRHH. **Precondición:** Cuenta existente y sesión no iniciada.

**Resultado esperado:** Sesión iniciada y navegación correspondiente al rol.

La imagen de error representa una alternativa, no un paso obligatorio. El sistema decide el destino por el rol; no existe un selector de rol en Login.

**Happy path:** Abrir Inicio de sesión e ingresar usuario o correo y contraseña → EMPLOYEE → Inicio del empleado. HR_MEMBER → Resumen de bienestar. → Acceso al espacio de trabajo del rol correcto

**Unhappy path:** Credenciales incorrectas. La sesión no se inicia. Corregir las credenciales y volver a iniciar sesión. El objetivo permanece pendiente hasta que el reintento sea aceptado.

![Android user-flows G00](../assets/images/cap4/revision-20260911/diagrams/mobile/user-flows/G00.png)

#### G01. Crear una cuenta para utilizar SafeSpace

**User Persona:** Andrés / Beatriz, según la cuenta. **Actor:** Nuevo usuario. **Precondición:** No tener una cuenta utilizable.

**Resultado esperado:** Registro aceptado y retorno a Inicio de sesión.

Android solicita usuario, correo, contraseña y confirmación. No se añade un campo de nombre visible al registro.

**Happy path:** Inicio de sesión → Regístrate → Completar usuario, correo, contraseña y confirmación → Seleccionar Registrar cuenta → Volver a Inicio de sesión con la cuenta creada

**Unhappy path:** Las contraseñas no coinciden. El registro no continúa. Corregir la confirmación y volver a registrar la cuenta. El objetivo permanece pendiente hasta que el reintento sea aceptado.

![Android user-flows G01](../assets/images/cap4/revision-20260911/diagrams/mobile/user-flows/G01.png)

#### G02. Restablecer mi contraseña

**User Persona:** Andrés / Beatriz, según la cuenta. **Actor:** Usuario sin acceso. **Precondición:** Recordar el usuario o correo asociado a la cuenta.

**Resultado esperado:** Contraseña actualizada; el usuario puede volver a iniciar sesión.

El aviso «si la cuenta existe» no confirma que el correo se haya entregado ni revela la existencia de la cuenta.

**Happy path:** Inicio de sesión → ¿Olvidaste tu contraseña? → Introducir usuario o correo y enviar solicitud → Mostrar aviso: si la cuenta existe, recibirá instrucciones → Ya tengo el enlace → pegar token y nueva contraseña → Contraseña actualizada → Volver al inicio de sesión

**Unhappy path:** El token venció. La contraseña no se actualiza. Volver al acceso, solicitar otro enlace e introducir el nuevo token. El objetivo permanece pendiente hasta que el reintento sea aceptado.

![Android user-flows G02](../assets/images/cap4/revision-20260911/diagrams/mobile/user-flows/G02.png)

#### G03. Registrar cómo me siento hoy

**User Persona:** Andrés (El Empleado). **Actor:** Empleado. **Precondición:** Sesión de empleado activa.

**Resultado esperado:** Estado de ánimo del día registrado y selección bloqueada para ese día.

Las tarjetas Métricas de bienestar y Recursos guiados están marcadas Próximamente y no forman parte de este recorrido.

**Happy path:** Abrir Inicio y consultar el estado de ánimo de hoy → Seleccionar Muy mal, Mal, Bien o Muy bien → Estado de ánimo registrado para hoy

**Unhappy path:** El guardado falla. El estado de ánimo no queda confirmado. Volver a seleccionar el estado de ánimo cuando termine la solicitud. El objetivo permanece pendiente hasta que el reintento sea aceptado.

![Android user-flows G03](../assets/images/cap4/revision-20260911/diagrams/mobile/user-flows/G03.png)

#### G04. Responder una encuesta y aportar contexto

**User Persona:** Andrés (El Empleado). **Actor:** Empleado. **Precondición:** Sesión activa y encuesta publicada disponible.

**Resultado esperado:** Respuesta registrada; los comentarios son opcionales y dependen de la encuesta.

Los comentarios permiten respuestas anidadas. No existe un foro independiente.

**Happy path:** Encuestas → Centro de Encuestas → Encuestas diarias → Escribir una respuesta no vacía y seleccionar Enviar respuesta → Opcional: mostrar comentarios, publicar uno o responder a otro → Respuesta registrada; contexto adicional publicado si se eligió y fue aceptado

**Unhappy path:** Falla el envío de la respuesta. La encuesta sigue pendiente. Revisar la respuesta y volver a enviarla. El objetivo permanece pendiente hasta que el reintento sea aceptado.

![Android user-flows G04](../assets/images/cap4/revision-20260911/diagrams/mobile/user-flows/G04.png)

#### G05. Elegir una actividad del equipo mediante mi voto

**User Persona:** Andrés (El Empleado). **Actor:** Empleado. **Precondición:** Sesión activa y actividad abierta.

**Resultado esperado:** Voto aceptado para la opción seleccionada.

La interfaz permite cambiar el voto y actualiza los resultados después del envío.

**Happy path:** Centro de Encuestas → Actividades semanales → Seleccionar una opción disponible → Seleccionar Votar → Voto registrado y resultados actualizados; se puede cambiar el voto

**Unhappy path:** Falla el envío del voto. No hay voto confirmado. Revisar la opción seleccionada y volver a votar. El objetivo permanece pendiente hasta que el reintento sea aceptado.

![Android user-flows G05](../assets/images/cap4/revision-20260911/diagrams/mobile/user-flows/G05.png)

#### G06. Comunicar una situación laboral a RRHH

**User Persona:** Andrés (El Empleado). **Actor:** Empleado. **Precondición:** Sesión activa; conocer los datos de la situación.

**Resultado esperado:** Reporte aceptado y retorno al Centro de Encuestas.

El anonimato se selecciona para este reporte; no es un modo anónimo global. La validación es una rama alternativa, no una pantalla obligatoria.

**Happy path:** Centro de Encuestas → Crear reporte → Completar área, título, descripción y prioridad; elegir envío anónimo o identificado → Seleccionar Enviar reporte → Retorno al Centro de Encuestas tras la creación

**Unhappy path:** Faltan campos obligatorios. El reporte no se envía. Completar los campos señalados y volver a enviar el reporte. El objetivo permanece pendiente hasta que el reintento sea aceptado.

![Android user-flows G06](../assets/images/cap4/revision-20260911/diagrams/mobile/user-flows/G06.png)

#### G07. Obtener orientación y conservar una conversación

**User Persona:** Andrés (El Empleado). **Actor:** Empleado. **Precondición:** Sesión activa y servicio de IA disponible.

**Resultado esperado:** Conversación con respuesta del asistente disponible en el historial.

El camino de error exige reescribir o revisar el mensaje antes de volver a enviarlo; no se presupone reenvío automático. Renombrar y eliminar son operaciones opcionales; eliminar requiere confirmación.

**Happy path:** Chat IA → historial → crear o abrir una conversación → Escribir un mensaje no vacío y seleccionar Enviar → Leer la respuesta y regresar al historial → Conversación disponible para continuar después

**Unhappy path:** El asistente no responde por un error del servicio. Reescribir el mensaje y volver a enviarlo. El objetivo permanece pendiente hasta que el reintento sea aceptado.

![Android user-flows G07](../assets/images/cap4/revision-20260911/diagrams/mobile/user-flows/G07.png)

#### G08. Publicar una encuesta para escuchar al equipo

**User Persona:** Beatriz (La Gerente). **Actor:** RRHH. **Precondición:** Sesión de RRHH activa.

**Resultado esperado:** Encuesta publicada después de su creación como borrador.

Crear y cerrar usan diálogos. Al cerrar, el ViewModel retira la encuesta de la lista local; no se garantiza que quede visible como historial inmediato.

**Happy path:** Gestión → Encuestas → Nueva encuesta → Completar título, pregunta, frecuencia y permiso de comentarios → Encuesta creada como borrador → seleccionar Publicar → Encuesta publicada y disponible para los empleados

**Unhappy path:** Falla la publicación. La encuesta no queda publicada. Volver a seleccionar Publicar desde la encuesta en borrador. El objetivo permanece pendiente hasta que el reintento sea aceptado.

![Android user-flows G08](../assets/images/cap4/revision-20260911/diagrams/mobile/user-flows/G08.png)

#### G09. Crear una votación y cerrar la actividad

**User Persona:** Beatriz (La Gerente). **Actor:** RRHH. **Precondición:** Sesión de RRHH activa.

**Resultado esperado:** Actividad creada, abierta a votación y cerrada mediante una operación aceptada.

Las opciones se escriben una por línea y deben ser al menos dos. Al cerrar se retira la actividad de la lista local; el estado de destino se explica en el pie del wireflow.

**Happy path:** Gestión → Actividades → Nueva actividad → Ingresar título y al menos dos opciones; descripción opcional → Actividad abierta → consultar participación → seleccionar Cerrar → Actividad cerrada y retirada de la lista local

**Unhappy path:** Falla el cierre. La actividad no tiene un cierre confirmado. Comprobar el estado y volver a cerrar la actividad. El objetivo permanece pendiente hasta que el reintento sea aceptado.

![Android user-flows G09](../assets/images/cap4/revision-20260911/diagrams/mobile/user-flows/G09.png)

#### G10. Revisar un reporte y actualizar su atención

**User Persona:** Beatriz (La Gerente). **Actor:** RRHH. **Precondición:** Sesión activa y reporte existente.

**Resultado esperado:** Estado del reporte actualizado tras confirmación del servicio.

En Android, el detalle es una hoja de consulta. Cambiar estado está en la tarjeta de la bandeja, no dentro de la hoja.

**Happy path:** Reportes → Todos, En revisión o Atendidos → Abrir detalle y revisar categoría, descripción, prioridad e identidad declarada → Cerrar detalle → Cambiar estado desde la tarjeta → Estado actualizado: Nuevo, En revisión, Atendido o Cerrado

**Unhappy path:** Falla la actualización del reporte. No se confirma el nuevo estado. Volver a seleccionar el estado del reporte. El objetivo permanece pendiente hasta que el reintento sea aceptado.

![Android user-flows G10](../assets/images/cap4/revision-20260911/diagrams/mobile/user-flows/G10.png)

#### G11. Consultar el resumen de bienestar del equipo

**User Persona:** Beatriz (La Gerente). **Actor:** RRHH. **Precondición:** Sesión de RRHH activa.

**Resultado esperado:** Consultar distribución emocional, empleados activos y tasa de respuesta.

No se añaden filtros de área, período ni navegación a personas: el frontend revisado presenta un resumen agregado. Cero respuestas no equivale a un error.

**Happy path:** Abrir Inicio de RRHH → Revisar distribución emocional y proporción positiva → Consultar empleados activos y tasa de respuesta → Información agregada consultada para orientar el seguimiento

**Unhappy path:** No se puede cargar el resumen de bienestar. Actualizar o volver a abrir Inicio de RRHH. El objetivo permanece pendiente hasta que el reintento sea aceptado.

![Android user-flows G11](../assets/images/cap4/revision-20260911/diagrams/mobile/user-flows/G11.png)

#### G12. Actualizar mi cuenta y mis preferencias

**User Persona:** Andrés / Beatriz, según la cuenta. **Actor:** Empleado / RRHH. **Precondición:** Sesión activa y acceso a la cuenta propia.

**Resultado esperado:** Datos o preferencias actualizados con respuesta satisfactoria.

Cada dato de cuenta se edita en un diálogo; idioma y tema se guardan al seleccionarlos. Cambiar contraseña aparece como Próximamente.

**Happy path:** Abrir Perfil / Configuración → Elegir nombre, usuario o correo y abrir el diálogo → Opcional: seleccionar idioma o alternar Tema oscuro → Cuenta y preferencias actualizadas según las acciones realizadas

**Unhappy path:** Falla el guardado de la cuenta. No se confirma la actualización. Revisar los datos y volver a guardar. El objetivo permanece pendiente hasta que el reintento sea aceptado.

![Android user-flows G12](../assets/images/cap4/revision-20260911/diagrams/mobile/user-flows/G12.png)

## 4.5. Mobile Applications Prototyping

Los wireflows y los mockups forman un storyboard de diseño para revisar las tareas de ambos roles. Las imágenes PNG documentan las vistas y transiciones; las conexiones del prototipo deben configurarse en la herramienta de diseño. No se presentan como un prototipo interactivo ya probado.

Video: [Link del video](https://upcedupe-my.sharepoint.com/:v:/g/personal/u202312566_upc_edu_pe/IQBfRe042xsqTZ0HxCQQ12jEASa0npquQuDSFxj4o-DhFvg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=hMx8Zo)

### 4.5.1. Android Mobile Applications Prototyping

El diseño define las vistas y transiciones que se conectarían en un prototipo Android. La revisión debe comprobar que las personas puedan identificar la tarea, comprender los estados, recuperar un envío fallido y diferenciar el anonimato de cada reporte. Los objetivos G00–G12 permiten preparar esas tareas de evaluación. La evidencia de sesiones de prueba y el enlace a un prototipo interactivo quedan pendientes; no se fabrican resultados de validación.

### 4.5.2. iOS Mobile Applications Prototyping

Pendiente de alcance específico. No se atribuye al proyecto un prototipo iOS validado ni una implementación SwiftUI a partir del código Android.

## 4.6. Web Applications UX/UI Design

Esta sección contiene exclusivamente las vistas web de empleado y RRHH. La documentación respeta la navegación lateral, las pestañas de Encuestas, los formularios de Gestión dentro de la página y los modales propios de esta plataforma. No se reutilizan pantallas de teléfono para representar la aplicación web.

### 4.6.1. Web Applications Wireframes

El catálogo de Web contiene **50 vistas y estados estructurales**, agrupados por acceso, empleado y RRHH. Se mantienen los identificadores de las vistas para relacionar imágenes y flujos. Las láminas siguientes contienen el catálogo completo en imágenes PNG.

**Vistas 01, 02.** Inicio de sesión; Registro de cuenta.

![Web wireframes — 01, 02](../assets/images/cap4/revision-20260911/assets/web/boards/wireframes-01.png)

**Vistas 03, 04.** Recuperar acceso; Enlace de recuperación enviado.

![Web wireframes — 03, 04](../assets/images/cap4/revision-20260911/assets/web/boards/wireframes-02.png)

**Vistas 07, 08.** Acceso · error de credenciales; Acceso restringido a administración.

![Web wireframes — 07, 08](../assets/images/cap4/revision-20260911/assets/web/boards/wireframes-03.png)

**Vistas 10, 11.** Inicio del empleado; Estado de ánimo registrado.

![Web wireframes — 10, 11](../assets/images/cap4/revision-20260911/assets/web/boards/wireframes-04.png)

**Vistas 13, 14.** Encuestas diarias · responder; Encuesta respondida.

![Web wireframes — 13, 14](../assets/images/cap4/revision-20260911/assets/web/boards/wireframes-05.png)

**Vistas 15, 17.** Comentarios anónimos; Encuestas · sin contenido.

![Web wireframes — 15, 17](../assets/images/cap4/revision-20260911/assets/web/boards/wireframes-06.png)

**Vistas 18, 19.** Actividades semanales · votación; Actividad · voto registrado.

![Web wireframes — 18, 19](../assets/images/cap4/revision-20260911/assets/web/boards/wireframes-07.png)

**Vistas 20, 21.** Actividades · sin contenido; Crear reporte confidencial.

![Web wireframes — 20, 21](../assets/images/cap4/revision-20260911/assets/web/boards/wireframes-08.png)

**Vistas 22, 23.** Reporte · seleccionar área; Reporte · validación de campos.

![Web wireframes — 22, 23](../assets/images/cap4/revision-20260911/assets/web/boards/wireframes-09.png)

**Vistas 24, 25.** Reporte enviado e historial; Mis reportes · historial.

![Web wireframes — 24, 25](../assets/images/cap4/revision-20260911/assets/web/boards/wireframes-10.png)

**Vistas 26, 30.** Mis reportes · vacío; Historial de conversaciones.

![Web wireframes — 26, 30](../assets/images/cap4/revision-20260911/assets/web/boards/wireframes-11.png)

**Vistas 31, 32.** Conversaciones · vacío; Conversación de apoyo.

![Web wireframes — 31, 32](../assets/images/cap4/revision-20260911/assets/web/boards/wireframes-12.png)

**Vistas 33, 34.** Nueva conversación; Editar nombre de conversación.

![Web wireframes — 33, 34](../assets/images/cap4/revision-20260911/assets/web/boards/wireframes-13.png)

**Vistas 35, 37.** Eliminar conversación; Chat · asistente escribiendo.

![Web wireframes — 35, 37](../assets/images/cap4/revision-20260911/assets/web/boards/wireframes-14.png)

**Vistas 38, 40.** Chat · error de conexión; Resumen de bienestar RRHH.

![Web wireframes — 38, 40](../assets/images/cap4/revision-20260911/assets/web/boards/wireframes-15.png)

**Vistas 41, 42.** Gestión de encuestas; Gestión · comentarios y respuestas.

![Web wireframes — 41, 42](../assets/images/cap4/revision-20260911/assets/web/boards/wireframes-16.png)

**Vistas 43, 44.** Nueva encuesta; Gestión de actividades y resultados.

![Web wireframes — 43, 44](../assets/images/cap4/revision-20260911/assets/web/boards/wireframes-17.png)

**Vistas 45, 48.** Nueva actividad; Gestión · contenido vacío.

![Web wireframes — 45, 48](../assets/images/cap4/revision-20260911/assets/web/boards/wireframes-18.png)

**Vistas 49, 50.** Gestión · actividad cerrada; Bandeja de reportes RRHH.

![Web wireframes — 49, 50](../assets/images/cap4/revision-20260911/assets/web/boards/wireframes-19.png)

**Vistas 51, 52.** Reportes · filtro en revisión; Reporte · detalle y estado.

![Web wireframes — 51, 52](../assets/images/cap4/revision-20260911/assets/web/boards/wireframes-20.png)

**Vistas 53, 60.** Reportes · sin resultados; Perfil empleado.

![Web wireframes — 53, 60](../assets/images/cap4/revision-20260911/assets/web/boards/wireframes-21.png)

**Vistas 61, 62.** Configuración empleado; Configuración · tema oscuro empleado.

![Web wireframes — 61, 62](../assets/images/cap4/revision-20260911/assets/web/boards/wireframes-22.png)

**Vistas 70, 71.** Perfil rrhh; Configuración rrhh.

![Web wireframes — 70, 71](../assets/images/cap4/revision-20260911/assets/web/boards/wireframes-23.png)

**Vistas 72, 67.** Configuración · tema oscuro rrhh; Configuración guardada.

![Web wireframes — 72, 67](../assets/images/cap4/revision-20260911/assets/web/boards/wireframes-24.png)

**Vistas 80, 81.** Carga de contenido; Error de carga.

![Web wireframes — 80, 81](../assets/images/cap4/revision-20260911/assets/web/boards/wireframes-25.png)

### 4.6.2. Web Applications Wireflow Diagrams

Los diagramas mantienen la idea de los wireflows anteriores —pantallas enlazadas por acciones— y sustituyen las vistas y transiciones por las del frontend revisado. Un estado de la misma pantalla puede aparecer varias veces para representar el cambio producido por una acción.

#### G00. Acceder al espacio correspondiente a mi rol

**User Persona:** Andrés / Beatriz, según la cuenta. **Actor:** Empleado / RRHH. **Precondición:** Cuenta existente y sesión no iniciada.

**Resultado esperado:** Sesión iniciada y navegación correspondiente al rol.

La imagen de error representa una alternativa, no un paso obligatorio. El sistema decide el destino por el rol; no existe un selector de rol en Login.

![Web wireflows G00](../assets/images/cap4/revision-20260911/diagrams/web/wireflows/G00.png)

#### G01. Crear una cuenta para utilizar SafeSpace

**User Persona:** Andrés / Beatriz, según la cuenta. **Actor:** Nuevo usuario. **Precondición:** No tener una cuenta utilizable.

**Resultado esperado:** Registro aceptado y retorno a Inicio de sesión.

Web solicita además el nombre visible. El registro exitoso vuelve al acceso; no inicia sesión automáticamente.

![Web wireflows G01](../assets/images/cap4/revision-20260911/diagrams/web/wireflows/G01.png)

#### G02. Solicitar instrucciones para recuperar mi acceso

**User Persona:** Andrés / Beatriz, según la cuenta. **Actor:** Usuario sin acceso. **Precondición:** Recordar el usuario o correo asociado a la cuenta.

**Resultado esperado:** Solicitud aceptada y aviso condicional mostrado; este frontend no incluye la confirmación con token.

El aviso «si la cuenta existe» no confirma que el correo se haya entregado ni revela la existencia de la cuenta.

![Web wireflows G02](../assets/images/cap4/revision-20260911/diagrams/web/wireflows/G02.png)

#### G03. Registrar cómo me siento hoy

**User Persona:** Andrés (El Empleado). **Actor:** Empleado. **Precondición:** Sesión de empleado activa.

**Resultado esperado:** Estado de ánimo del día registrado y selección bloqueada para ese día.

Las tarjetas Métricas de bienestar y Recursos guiados están marcadas Próximamente y no forman parte de este recorrido.

![Web wireflows G03](../assets/images/cap4/revision-20260911/diagrams/web/wireflows/G03.png)

#### G04. Responder una encuesta y aportar contexto

**User Persona:** Andrés (El Empleado). **Actor:** Empleado. **Precondición:** Sesión activa y encuesta publicada disponible.

**Resultado esperado:** Respuesta registrada; los comentarios son opcionales y dependen de la encuesta.

Los comentarios pertenecen a la encuesta; el cliente web permite publicar y dar Me gusta, sin compositor de respuestas anidadas.

![Web wireflows G04](../assets/images/cap4/revision-20260911/diagrams/web/wireflows/G04.png)

#### G05. Elegir una actividad del equipo mediante mi voto

**User Persona:** Andrés (El Empleado). **Actor:** Empleado. **Precondición:** Sesión activa y actividad abierta.

**Resultado esperado:** Voto aceptado para la opción seleccionada.

La interfaz muestra Voto registrado al aceptar el envío. No se presupone una actualización automática de los conteos porque este handler no vuelve a consultarlos.

![Web wireflows G05](../assets/images/cap4/revision-20260911/diagrams/web/wireflows/G05.png)

#### G06. Comunicar una situación laboral a RRHH

**User Persona:** Andrés (El Empleado). **Actor:** Empleado. **Precondición:** Sesión activa; conocer los datos de la situación.

**Resultado esperado:** Reporte aceptado e incorporado a Mis reportes.

El anonimato se selecciona para este reporte; no es un modo anónimo global. La validación es una rama alternativa, no una pantalla obligatoria.

![Web wireflows G06](../assets/images/cap4/revision-20260911/diagrams/web/wireflows/G06.png)

#### G07. Obtener orientación y conservar una conversación

**User Persona:** Andrés (El Empleado). **Actor:** Empleado. **Precondición:** Sesión activa y servicio de IA disponible.

**Resultado esperado:** Conversación con respuesta del asistente disponible en el historial.

El camino de error exige reescribir o revisar el mensaje antes de volver a enviarlo; no se presupone reenvío automático. Renombrar y eliminar son operaciones opcionales; eliminar requiere confirmación.

![Web wireflows G07](../assets/images/cap4/revision-20260911/diagrams/web/wireflows/G07.png)

#### G08. Publicar una encuesta para escuchar al equipo

**User Persona:** Beatriz (La Gerente). **Actor:** RRHH. **Precondición:** Sesión de RRHH activa.

**Resultado esperado:** Encuesta publicada después de su creación como borrador.

Crear abre un formulario dentro de Gestión. Publicar y cerrar son acciones de la tarjeta; no se añade un diálogo de confirmación inexistente.

![Web wireflows G08](../assets/images/cap4/revision-20260911/diagrams/web/wireflows/G08.png)

#### G09. Crear una votación y cerrar la actividad

**User Persona:** Beatriz (La Gerente). **Actor:** RRHH. **Precondición:** Sesión de RRHH activa.

**Resultado esperado:** Actividad creada, abierta a votación y cerrada mediante una operación aceptada.

Las opciones usan campos separados y se pueden añadir más. El cierre se ejecuta desde la tarjeta y conserva el estado actualizado en la lista local.

![Web wireflows G09](../assets/images/cap4/revision-20260911/diagrams/web/wireflows/G09.png)

#### G10. Revisar un reporte y actualizar su atención

**User Persona:** Beatriz (La Gerente). **Actor:** RRHH. **Precondición:** Sesión activa y reporte existente.

**Resultado esperado:** Estado del reporte actualizado tras confirmación del servicio.

En web, el selector de estado está dentro del modal. La selección envía el cambio sin un botón adicional de Guardar.

![Web wireflows G10](../assets/images/cap4/revision-20260911/diagrams/web/wireflows/G10.png)

#### G11. Consultar el resumen de bienestar del equipo

**User Persona:** Beatriz (La Gerente). **Actor:** RRHH. **Precondición:** Sesión de RRHH activa.

**Resultado esperado:** Consultar distribución emocional, empleados activos y tasa de respuesta.

No se añaden filtros de área, período ni navegación a personas: el frontend revisado presenta un resumen agregado. Cero respuestas no equivale a un error.

![Web wireflows G11](../assets/images/cap4/revision-20260911/diagrams/web/wireflows/G11.png)

#### G12. Actualizar mi cuenta y mis preferencias

**User Persona:** Andrés / Beatriz, según la cuenta. **Actor:** Empleado / RRHH. **Precondición:** Sesión activa y acceso a la cuenta propia.

**Resultado esperado:** Datos o preferencias actualizados con respuesta satisfactoria.

Cuenta y preferencias tienen botones Guardar cambios separados. La foto se actualiza desde Perfil con un selector local.

![Web wireflows G12](../assets/images/cap4/revision-20260911/diagrams/web/wireflows/G12.png)

### 4.6.3. Web Applications Mock-ups

El catálogo de Web contiene **50 vistas y estados visuales**, agrupados por acceso, empleado y RRHH. Se mantienen los identificadores de las vistas para relacionar imágenes y flujos. Las láminas siguientes contienen el catálogo completo en imágenes PNG.

**Vistas 01, 02.** Inicio de sesión; Registro de cuenta.

![Web mockups — 01, 02](../assets/images/cap4/revision-20260911/assets/web/boards/mockups-01.png)

**Vistas 03, 04.** Recuperar acceso; Enlace de recuperación enviado.

![Web mockups — 03, 04](../assets/images/cap4/revision-20260911/assets/web/boards/mockups-02.png)

**Vistas 07, 08.** Acceso · error de credenciales; Acceso restringido a administración.

![Web mockups — 07, 08](../assets/images/cap4/revision-20260911/assets/web/boards/mockups-03.png)

**Vistas 10, 11.** Inicio del empleado; Estado de ánimo registrado.

![Web mockups — 10, 11](../assets/images/cap4/revision-20260911/assets/web/boards/mockups-04.png)

**Vistas 13, 14.** Encuestas diarias · responder; Encuesta respondida.

![Web mockups — 13, 14](../assets/images/cap4/revision-20260911/assets/web/boards/mockups-05.png)

**Vistas 15, 17.** Comentarios anónimos; Encuestas · sin contenido.

![Web mockups — 15, 17](../assets/images/cap4/revision-20260911/assets/web/boards/mockups-06.png)

**Vistas 18, 19.** Actividades semanales · votación; Actividad · voto registrado.

![Web mockups — 18, 19](../assets/images/cap4/revision-20260911/assets/web/boards/mockups-07.png)

**Vistas 20, 21.** Actividades · sin contenido; Crear reporte confidencial.

![Web mockups — 20, 21](../assets/images/cap4/revision-20260911/assets/web/boards/mockups-08.png)

**Vistas 22, 23.** Reporte · seleccionar área; Reporte · validación de campos.

![Web mockups — 22, 23](../assets/images/cap4/revision-20260911/assets/web/boards/mockups-09.png)

**Vistas 24, 25.** Reporte enviado e historial; Mis reportes · historial.

![Web mockups — 24, 25](../assets/images/cap4/revision-20260911/assets/web/boards/mockups-10.png)

**Vistas 26, 30.** Mis reportes · vacío; Historial de conversaciones.

![Web mockups — 26, 30](../assets/images/cap4/revision-20260911/assets/web/boards/mockups-11.png)

**Vistas 31, 32.** Conversaciones · vacío; Conversación de apoyo.

![Web mockups — 31, 32](../assets/images/cap4/revision-20260911/assets/web/boards/mockups-12.png)

**Vistas 33, 34.** Nueva conversación; Editar nombre de conversación.

![Web mockups — 33, 34](../assets/images/cap4/revision-20260911/assets/web/boards/mockups-13.png)

**Vistas 35, 37.** Eliminar conversación; Chat · asistente escribiendo.

![Web mockups — 35, 37](../assets/images/cap4/revision-20260911/assets/web/boards/mockups-14.png)

**Vistas 38, 40.** Chat · error de conexión; Resumen de bienestar RRHH.

![Web mockups — 38, 40](../assets/images/cap4/revision-20260911/assets/web/boards/mockups-15.png)

**Vistas 41, 42.** Gestión de encuestas; Gestión · comentarios y respuestas.

![Web mockups — 41, 42](../assets/images/cap4/revision-20260911/assets/web/boards/mockups-16.png)

**Vistas 43, 44.** Nueva encuesta; Gestión de actividades y resultados.

![Web mockups — 43, 44](../assets/images/cap4/revision-20260911/assets/web/boards/mockups-17.png)

**Vistas 45, 48.** Nueva actividad; Gestión · contenido vacío.

![Web mockups — 45, 48](../assets/images/cap4/revision-20260911/assets/web/boards/mockups-18.png)

**Vistas 49, 50.** Gestión · actividad cerrada; Bandeja de reportes RRHH.

![Web mockups — 49, 50](../assets/images/cap4/revision-20260911/assets/web/boards/mockups-19.png)

**Vistas 51, 52.** Reportes · filtro en revisión; Reporte · detalle y estado.

![Web mockups — 51, 52](../assets/images/cap4/revision-20260911/assets/web/boards/mockups-20.png)

**Vistas 53, 60.** Reportes · sin resultados; Perfil empleado.

![Web mockups — 53, 60](../assets/images/cap4/revision-20260911/assets/web/boards/mockups-21.png)

**Vistas 61, 62.** Configuración empleado; Configuración · tema oscuro empleado.

![Web mockups — 61, 62](../assets/images/cap4/revision-20260911/assets/web/boards/mockups-22.png)

**Vistas 70, 71.** Perfil rrhh; Configuración rrhh.

![Web mockups — 70, 71](../assets/images/cap4/revision-20260911/assets/web/boards/mockups-23.png)

**Vistas 72, 67.** Configuración · tema oscuro rrhh; Configuración guardada.

![Web mockups — 72, 67](../assets/images/cap4/revision-20260911/assets/web/boards/mockups-24.png)

**Vistas 80, 81.** Carga de contenido; Error de carga.

![Web mockups — 80, 81](../assets/images/cap4/revision-20260911/assets/web/boards/mockups-25.png)

### 4.6.4. Web Applications User Flow Diagrams

Los objetivos se formulan desde la intención de la persona. Cada diagrama presenta un happy path y un unhappy path explícitos, unidos por una decisión Sí/No. Se selecciona un caso de error concreto por objetivo; las demás condiciones del recorrido se asumen válidas en este escenario. La ruta de error indica qué impide cumplir el objetivo y cómo reintentarlo. Los mockups muestran la vista de interacción y el resultado; cuando no existe un mockup específico del error, la condición se describe fuera de la interfaz, sin inventar una pantalla. Los errores se describen como estados de interfaz y no como nuevas pantallas que necesariamente existan. Las acciones opcionales se explican en el pie y no condicionan el logro principal.

#### G00. Acceder al espacio correspondiente a mi rol

**User Persona:** Andrés / Beatriz, según la cuenta. **Actor:** Empleado / RRHH. **Precondición:** Cuenta existente y sesión no iniciada.

**Resultado esperado:** Sesión iniciada y navegación correspondiente al rol.

La imagen de error representa una alternativa, no un paso obligatorio. El sistema decide el destino por el rol; no existe un selector de rol en Login.

**Happy path:** Abrir Inicio de sesión e ingresar usuario o correo y contraseña → EMPLOYEE → Inicio del empleado. HR_MEMBER → Resumen de bienestar. → Acceso al espacio de trabajo del rol correcto

**Unhappy path:** Credenciales incorrectas. La sesión no se inicia. Corregir las credenciales y volver a iniciar sesión. El objetivo permanece pendiente hasta que el reintento sea aceptado.

![Web user-flows G00](../assets/images/cap4/revision-20260911/diagrams/web/user-flows/G00.png)

#### G01. Crear una cuenta para utilizar SafeSpace

**User Persona:** Andrés / Beatriz, según la cuenta. **Actor:** Nuevo usuario. **Precondición:** No tener una cuenta utilizable.

**Resultado esperado:** Registro aceptado y retorno a Inicio de sesión.

Web solicita además el nombre visible. El registro exitoso vuelve al acceso; no inicia sesión automáticamente.

**Happy path:** Inicio de sesión → Regístrate → Completar nombre visible, usuario, correo, contraseña y confirmación → Seleccionar Registrar cuenta → Volver a Inicio de sesión con la cuenta creada

**Unhappy path:** Las contraseñas no coinciden. El registro no continúa. Corregir la confirmación y volver a registrar la cuenta. El objetivo permanece pendiente hasta que el reintento sea aceptado.

![Web user-flows G01](../assets/images/cap4/revision-20260911/diagrams/web/user-flows/G01.png)

#### G02. Solicitar instrucciones para recuperar mi acceso

**User Persona:** Andrés / Beatriz, según la cuenta. **Actor:** Usuario sin acceso. **Precondición:** Recordar el usuario o correo asociado a la cuenta.

**Resultado esperado:** Solicitud aceptada y aviso condicional mostrado; este frontend no incluye la confirmación con token.

El aviso «si la cuenta existe» no confirma que el correo se haya entregado ni revela la existencia de la cuenta.

**Happy path:** Inicio de sesión → ¿Olvidaste tu contraseña? → Introducir usuario o correo y enviar solicitud → Mostrar aviso: si la cuenta existe, recibirá instrucciones → Solicitud registrada. Restablecimiento fuera del alcance de esta vista web

**Unhappy path:** La solicitud de recuperación falla. No hay envío confirmado. Revisar usuario o correo y volver a solicitar instrucciones. El objetivo permanece pendiente hasta que el reintento sea aceptado.

![Web user-flows G02](../assets/images/cap4/revision-20260911/diagrams/web/user-flows/G02.png)

#### G03. Registrar cómo me siento hoy

**User Persona:** Andrés (El Empleado). **Actor:** Empleado. **Precondición:** Sesión de empleado activa.

**Resultado esperado:** Estado de ánimo del día registrado y selección bloqueada para ese día.

Las tarjetas Métricas de bienestar y Recursos guiados están marcadas Próximamente y no forman parte de este recorrido.

**Happy path:** Abrir Inicio y consultar el estado de ánimo de hoy → Seleccionar Muy mal, Mal, Bien o Muy bien → Estado de ánimo registrado para hoy

**Unhappy path:** El guardado falla. El estado de ánimo no queda confirmado. Volver a seleccionar el estado de ánimo cuando termine la solicitud. El objetivo permanece pendiente hasta que el reintento sea aceptado.

![Web user-flows G03](../assets/images/cap4/revision-20260911/diagrams/web/user-flows/G03.png)

#### G04. Responder una encuesta y aportar contexto

**User Persona:** Andrés (El Empleado). **Actor:** Empleado. **Precondición:** Sesión activa y encuesta publicada disponible.

**Resultado esperado:** Respuesta registrada; los comentarios son opcionales y dependen de la encuesta.

Los comentarios pertenecen a la encuesta; el cliente web permite publicar y dar Me gusta, sin compositor de respuestas anidadas.

**Happy path:** Encuestas → pestaña Encuestas → Escribir una respuesta no vacía y seleccionar Enviar respuesta → Opcional: mostrar comentarios, publicar uno o dar Me gusta → Respuesta registrada; contexto adicional publicado si se eligió y fue aceptado

**Unhappy path:** Falla el envío de la respuesta. La encuesta sigue pendiente. Revisar la respuesta y volver a enviarla. El objetivo permanece pendiente hasta que el reintento sea aceptado.

![Web user-flows G04](../assets/images/cap4/revision-20260911/diagrams/web/user-flows/G04.png)

#### G05. Elegir una actividad del equipo mediante mi voto

**User Persona:** Andrés (El Empleado). **Actor:** Empleado. **Precondición:** Sesión activa y actividad abierta.

**Resultado esperado:** Voto aceptado para la opción seleccionada.

La interfaz muestra Voto registrado al aceptar el envío. No se presupone una actualización automática de los conteos porque este handler no vuelve a consultarlos.

**Happy path:** Encuestas → Actividades semanales → Seleccionar una opción disponible → Seleccionar Votar → Voto registrado en la actividad

**Unhappy path:** Falla el envío del voto. No hay voto confirmado. Revisar la opción seleccionada y volver a votar. El objetivo permanece pendiente hasta que el reintento sea aceptado.

![Web user-flows G05](../assets/images/cap4/revision-20260911/diagrams/web/user-flows/G05.png)

#### G06. Comunicar una situación laboral a RRHH

**User Persona:** Andrés (El Empleado). **Actor:** Empleado. **Precondición:** Sesión activa; conocer los datos de la situación.

**Resultado esperado:** Reporte aceptado e incorporado a Mis reportes.

El anonimato se selecciona para este reporte; no es un modo anónimo global. La validación es una rama alternativa, no una pantalla obligatoria.

**Happy path:** Encuestas → pestaña Reportes → Completar área, título, descripción y prioridad; elegir envío anónimo o identificado → Seleccionar Enviar reporte → Confirmación de envío y nuevo registro en Mis reportes

**Unhappy path:** Faltan campos obligatorios. El reporte no se envía. Completar los campos señalados y volver a enviar el reporte. El objetivo permanece pendiente hasta que el reintento sea aceptado.

![Web user-flows G06](../assets/images/cap4/revision-20260911/diagrams/web/user-flows/G06.png)

#### G07. Obtener orientación y conservar una conversación

**User Persona:** Andrés (El Empleado). **Actor:** Empleado. **Precondición:** Sesión activa y servicio de IA disponible.

**Resultado esperado:** Conversación con respuesta del asistente disponible en el historial.

El camino de error exige reescribir o revisar el mensaje antes de volver a enviarlo; no se presupone reenvío automático. Renombrar y eliminar son operaciones opcionales; eliminar requiere confirmación.

**Happy path:** Chat IA → historial → crear o abrir una conversación → Escribir un mensaje no vacío y seleccionar Enviar → Leer la respuesta y regresar al historial → Conversación disponible para continuar después

**Unhappy path:** El asistente no responde por un error del servicio. Reescribir el mensaje y volver a enviarlo. El objetivo permanece pendiente hasta que el reintento sea aceptado.

![Web user-flows G07](../assets/images/cap4/revision-20260911/diagrams/web/user-flows/G07.png)

#### G08. Publicar una encuesta para escuchar al equipo

**User Persona:** Beatriz (La Gerente). **Actor:** RRHH. **Precondición:** Sesión de RRHH activa.

**Resultado esperado:** Encuesta publicada después de su creación como borrador.

Crear abre un formulario dentro de Gestión. Publicar y cerrar son acciones de la tarjeta; no se añade un diálogo de confirmación inexistente.

**Happy path:** Gestión → Encuestas → Nueva encuesta → Completar título, pregunta, frecuencia y permiso de comentarios → Encuesta creada como borrador → seleccionar Publicar → Encuesta publicada y disponible para los empleados

**Unhappy path:** Falla la publicación. La encuesta no queda publicada. Volver a seleccionar Publicar desde la encuesta en borrador. El objetivo permanece pendiente hasta que el reintento sea aceptado.

![Web user-flows G08](../assets/images/cap4/revision-20260911/diagrams/web/user-flows/G08.png)

#### G09. Crear una votación y cerrar la actividad

**User Persona:** Beatriz (La Gerente). **Actor:** RRHH. **Precondición:** Sesión de RRHH activa.

**Resultado esperado:** Actividad creada, abierta a votación y cerrada mediante una operación aceptada.

Las opciones usan campos separados y se pueden añadir más. El cierre se ejecuta desde la tarjeta y conserva el estado actualizado en la lista local.

**Happy path:** Gestión → Actividades → Nueva actividad → Ingresar título y al menos dos opciones; descripción opcional → Actividad abierta → consultar participación → seleccionar Cerrar → Actividad cerrada; resultados finales visibles

**Unhappy path:** Falla el cierre. La actividad no tiene un cierre confirmado. Comprobar el estado y volver a cerrar la actividad. El objetivo permanece pendiente hasta que el reintento sea aceptado.

![Web user-flows G09](../assets/images/cap4/revision-20260911/diagrams/web/user-flows/G09.png)

#### G10. Revisar un reporte y actualizar su atención

**User Persona:** Beatriz (La Gerente). **Actor:** RRHH. **Precondición:** Sesión activa y reporte existente.

**Resultado esperado:** Estado del reporte actualizado tras confirmación del servicio.

En web, el selector de estado está dentro del modal. La selección envía el cambio sin un botón adicional de Guardar.

**Happy path:** Reportes → Todos, En revisión o Atendidos → Abrir detalle y revisar categoría, descripción, prioridad e identidad declarada → Elegir un estado dentro del modal de detalle → Estado actualizado: Nuevo, En revisión, Atendido o Cerrado

**Unhappy path:** Falla la actualización del reporte. No se confirma el nuevo estado. Volver a seleccionar el estado del reporte. El objetivo permanece pendiente hasta que el reintento sea aceptado.

![Web user-flows G10](../assets/images/cap4/revision-20260911/diagrams/web/user-flows/G10.png)

#### G11. Consultar el resumen de bienestar del equipo

**User Persona:** Beatriz (La Gerente). **Actor:** RRHH. **Precondición:** Sesión de RRHH activa.

**Resultado esperado:** Consultar distribución emocional, empleados activos y tasa de respuesta.

No se añaden filtros de área, período ni navegación a personas: el frontend revisado presenta un resumen agregado. Cero respuestas no equivale a un error.

**Happy path:** Abrir Inicio de RRHH → Revisar distribución emocional y proporción positiva → Consultar empleados activos y tasa de respuesta → Información agregada consultada para orientar el seguimiento

**Unhappy path:** No se puede cargar el resumen de bienestar. Actualizar o volver a abrir Inicio de RRHH. El objetivo permanece pendiente hasta que el reintento sea aceptado.

![Web user-flows G11](../assets/images/cap4/revision-20260911/diagrams/web/user-flows/G11.png)

#### G12. Actualizar mi cuenta y mis preferencias

**User Persona:** Andrés / Beatriz, según la cuenta. **Actor:** Empleado / RRHH. **Precondición:** Sesión activa y acceso a la cuenta propia.

**Resultado esperado:** Datos o preferencias actualizados con respuesta satisfactoria.

Cuenta y preferencias tienen botones Guardar cambios separados. La foto se actualiza desde Perfil con un selector local.

**Happy path:** Abrir Perfil / Configuración → Editar nombre visible, usuario o correo en Cuenta → Opcional: cambiar idioma o tema y guardar Preferencias → Cuenta y preferencias actualizadas según las acciones realizadas

**Unhappy path:** Falla el guardado de la cuenta. No se confirma la actualización. Revisar los datos y volver a guardar. El objetivo permanece pendiente hasta que el reintento sea aceptado.

![Web user-flows G12](../assets/images/cap4/revision-20260911/diagrams/web/user-flows/G12.png)

## 4.7. Web Applications Prototyping

Las vistas web y sus diagramas constituyen una base de prototipado para empleado y RRHH. Las tareas de revisión comprenden acceso, participación, reporte de situaciones, conversaciones, publicación de contenido, consulta de bienestar y gestión de cuenta. El éxito de cada tarea se define por el resultado aceptado, no por llegar a una pantalla intermedia.

El prototipo interactivo y sus conexiones se realizarán en una etapa posterior; las imágenes entregadas no incluyen interacciones ejecutables. Los ensayos deberán cubrir rutas exitosas, campos incompletos, servicio no disponible, listas vacías y cancelación de operaciones cuando la interfaz la permite. No se afirman pruebas realizadas ni métricas de usabilidad sin evidencia.

Video: [Link del video](https://upcedupe-my.sharepoint.com/:v:/g/personal/u202312566_upc_edu_pe/IQD4PEoCLszORI3GQlkqA5pxAVjIaQCSqXUfbvSe87WFTLQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=F3RlDd)

## 4.8. Domain-Driven Software Architecture

SafeSpace se implementa como un monolito modular: las aplicaciones web y Android consumen una API que concentra los casos de uso y persiste la información en Firebase Firestore. La organización del diseño sigue los paquetes del backend: iam, authentication, profile, mood, survey, comment, activity, report, ai, payment, admin y audit. Esta separación documenta sus responsabilidades funcionales y sus dependencias; no implica que sean microservicios independientes.

El paquete `shared` reúne infraestructura técnica reutilizada, como JWT, acceso al usuario autenticado, configuración CORS y manejo de excepciones. Se representa en la arquitectura por sus dependencias, pero **no se considera un bounded context de negocio** y no tiene una sección propia de clases ni de base de datos. Administración y auditoría proporcionan capacidades de soporte al negocio.

### 4.8.1. Software Architecture Context Diagram

El empleado registra su bienestar y participa en encuestas, comentarios y actividades; también comunica situaciones laborales y utiliza la asistencia conversacional. RRHH consulta información de bienestar y gestiona encuestas, actividades y reportes. El administrador mantiene cuentas y recursos administrativos. Google Gemini es un proveedor externo opcional para generar respuestas del asistente.

![Contexto de SafeSpace](../assets/images/cap4/arquitectura-final/c4/contexto.png)

### 4.8.2. Software Architecture Container Diagrams

La aplicación web utiliza React y TypeScript; la aplicación Android utiliza Kotlin y Jetpack Compose. Ambas se comunican con el backend Java y Spring Boot mediante servicios REST y autenticación Bearer JWT. La API ejecuta las reglas de negocio, utiliza Firebase Firestore como persistencia no relacional e integra Gemini cuando está configurado.

![Contenedores de SafeSpace](../assets/images/cap4/arquitectura-final/c4/contenedores.png)

### 4.8.3. Software Architecture Components Diagrams

La vista integrada presenta todos los componentes del backend y sus conexiones en un único diagrama. authentication y profile reutilizan la identidad de iam; mood, survey, comment, activity, report y ai gestionan la participación y el bienestar; payment conserva registros de pagos; admin y audit respaldan la administración y la trazabilidad. shared aparece como infraestructura transversal, fuera de los bounded contexts de negocio.

Las conexiones entre componentes representan dependencias dentro del mismo proceso. Por ejemplo, survey utiliza comment para publicar respuestas como comentarios y comment consulta survey para situar los aportes en una encuesta. No se presupone una independencia que el código actual no implementa.

![Componentes conectados del backend SafeSpace](../assets/images/cap4/arquitectura-final/c4/componentes.png)

## 4.9. Software Object-Oriented Design

El diseño de clases refleja las entidades, enumeraciones, servicios y repositorios principales del backend. Las clases grises pertenecen a otros paquetes y muestran dependencias externas al contexto representado. Se omiten DTO, getters, setters y listas de parámetros para facilitar la lectura. Las dependencias de clases no deben interpretarse como relaciones entre tablas ni como llamadas de red.

### 4.9.1. Class Diagrams

#### Vista completa del backend

La vista completa reúne las principales entidades, enumeraciones, servicios, repositorios e interfaces de los doce paquetes funcionales del backend. `shared` aparece únicamente como soporte técnico transversal y no como bounded context de negocio. Las relaciones muestran dependencias del código dentro del monolito, no relaciones físicas entre tablas ni llamadas entre microservicios.

![Diagrama completo de clases del backend](../assets/images/cap4/arquitectura-final/clases/SafeSpace-class-diagram.svg)

#### Identidad y cuentas (`iam`)

User representa la cuenta, su rol y su habilitación; UserPreferences conserva idioma y tema. Los repositorios permiten recuperar y actualizar estas entidades. Este contexto proporciona una identidad consistente para asociar la participación de los empleados y aplicar los permisos correspondientes a empleados, RRHH y administradores.

![Diagrama de clases de iam](../assets/images/cap4/arquitectura-final/clases/iam.png)

#### Autenticación y recuperación (`authentication`)

AuthService coordina registro e inicio de sesión. PasswordResetService valida la recuperación y PasswordResetToken controla caducidad y uso; PasswordResetNotificationPort abstrae la notificación. Su valor de negocio consiste en permitir el acceso de usuarios registrados y recuperar una cuenta sin crear una identidad nueva ni perder su historial.

![Diagrama de clases de authentication](../assets/images/cap4/arquitectura-final/clases/authentication.png)

#### Perfil y preferencias (`profile`)

ProfileService actualiza los datos de cuenta y las preferencias reutilizando User y UserPreferences de iam. También reemite el token cuando cambia el identificador utilizado por la sesión. Esto permite que cada participante mantenga sus datos y preferencias actualizados sin perder la continuidad de uso.

![Diagrama de clases de profile](../assets/images/cap4/arquitectura-final/clases/profile.png)

#### Bienestar diario (`mood`)

MoodEntry representa el estado de ánimo registrado en una fecha y Mood delimita los valores admitidos. MoodService registra entradas y obtiene el resumen agregado para RRHH. Su valor consiste en convertir registros individuales en información que ayude a observar el bienestar laboral y orientar el seguimiento.

![Diagrama de clases de mood](../assets/images/cap4/arquitectura-final/clases/mood.png)

#### Encuestas (`survey`)

Survey controla el ciclo de publicación y cierre, mientras SurveyAnswer conserva la respuesta del empleado. Los servicios coordinan las operaciones de participación y administración. El valor de negocio es recoger información estructurada del equipo para que RRHH conozca sus percepciones y necesidades.

![Diagrama de clases de survey](../assets/images/cap4/arquitectura-final/clases/survey.png)

#### Comentarios y reacciones (`comment`)

Comment representa un aporte a una encuesta y puede referenciar un comentario padre para formar conversaciones. CommentLikeEntity registra la reacción de un usuario mediante un identificador lógico compuesto. Este contexto complementa las respuestas estructuradas con explicaciones y diálogo que ayudan a comprender las opiniones del equipo.

![Diagrama de clases de comment](../assets/images/cap4/arquitectura-final/clases/comment.png)

#### Actividades y votación (`activity`)

WeeklyActivity agrupa las opciones de una actividad y permite abrir o cerrar la participación. ActivityVote conserva la elección del empleado; los servicios validan el estado de la actividad y la pertenencia de la opción. Su valor de negocio es involucrar al equipo en la elección de iniciativas de bienestar.

![Diagrama de clases de activity](../assets/images/cap4/arquitectura-final/clases/activity.png)

#### Reportes laborales (`report`)

Report representa una situación laboral, su prioridad y su estado de seguimiento. ReportService permite registrar el caso y actualizar su atención según los permisos del usuario. El valor de negocio consiste en ofrecer un canal para comunicar problemas y organizar su revisión por RRHH.

![Diagrama de clases de report](../assets/images/cap4/arquitectura-final/clases/report.png)

#### Asistencia con inteligencia artificial (`ai`)

AiConversation y AiMessage mantienen el historial del empleado. AiAssistantProvider abstrae la generación de respuestas y GeminiAiAdapter implementa la integración opcional con Gemini. El valor de negocio es facilitar una interacción de asistencia con continuidad entre mensajes, manteniendo cada conversación vinculada a su propietario.

![Diagrama de clases de ai](../assets/images/cap4/arquitectura-final/clases/ai.png)

#### Registro de pagos (`payment`)

Payment representa un registro administrativo con beneficiario, comprobante y siguiente fecha de pago. PaymentPlan define la duración mensual o anual y PaymentService coordina el registro. Su valor es respaldar el control administrativo de pagos mediante evidencia documental; el backend no implementa cobros automáticos.

![Diagrama de clases de payment](../assets/images/cap4/arquitectura-final/clases/payment.png)

#### Administración (`admin`)

AdminService coordina la gestión de cuentas y operaciones administrativas sobre recursos existentes. Se apoya en repositorios de otros contextos y en AuditService. Su valor de negocio es permitir que el administrador mantenga las cuentas y el contenido operativo bajo los permisos definidos.

![Diagrama de clases de admin](../assets/images/cap4/arquitectura-final/clases/admin.png)

#### Auditoría (`audit`)

AuditLog conserva el actor, la acción y el recurso afectado; AuditService registra determinadas operaciones administrativas y de pagos. Su valor es aportar trazabilidad para revisar quién realizó una operación y sobre qué recurso. Es una capacidad de soporte al negocio; no registra automáticamente todas las acciones del sistema.

![Diagrama de clases de audit](../assets/images/cap4/arquitectura-final/clases/audit.png)

### 4.9.2. Class Dictionary

| Contexto         | Clases principales                                                                            | Responsabilidad                                                                                                                         |
| :--------------- | :-------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| `iam`            | `User`, `UserPreferences`, `UserRepository`, `UserPreferencesRepository`                      | User representa la cuenta, su rol y su habilitación; UserPreferences conserva idioma y tema.                                            |
| `authentication` | `AuthService`, `PasswordResetService`, `PasswordResetToken`, `PasswordResetNotificationPort`  | AuthService coordina registro e inicio de sesión.                                                                                       |
| `profile`        | `ProfileService`                                                                              | ProfileService actualiza los datos de cuenta y las preferencias reutilizando User y UserPreferences de iam.                             |
| `mood`           | `MoodEntry`, `Mood`, `MoodService`                                                            | MoodEntry representa el estado de ánimo registrado en una fecha y Mood delimita los valores admitidos.                                  |
| `survey`         | `Survey`, `SurveyAnswer`, `SurveyService`, `AdminSurveyService`                               | Survey controla el ciclo de publicación y cierre, mientras SurveyAnswer conserva la respuesta del empleado.                             |
| `comment`        | `Comment`, `CommentLikeEntity`, `CommentService`                                              | Comment representa un aporte a una encuesta y puede referenciar un comentario padre para formar conversaciones.                         |
| `activity`       | `WeeklyActivity`, `ActivityOption`, `ActivityVote`, `ActivityService`, `AdminActivityService` | WeeklyActivity agrupa las opciones de una actividad y permite abrir o cerrar la participación.                                          |
| `report`         | `Report`, `ReportPriority`, `ReportStatus`, `ReportService`                                   | Report representa una situación laboral, su prioridad y su estado de seguimiento.                                                       |
| `ai`             | `AiConversation`, `AiMessage`, `AiChatService`, `AiAssistantProvider`, `GeminiAiAdapter`      | AiConversation y AiMessage mantienen el historial del empleado.                                                                         |
| `payment`        | `Payment`, `PaymentPlan`, `PaymentService`                                                    | Payment representa un registro administrativo con beneficiario, comprobante y siguiente fecha de pago.                                  |
| `admin`          | `AdminService`                                                                                | AdminService coordina la gestión de cuentas y operaciones administrativas sobre recursos existentes.                                    |
| `audit`          | `AuditLog`, `AuditService`, `AuditLogRepository`                                              | AuditLog conserva el actor, la acción y el recurso afectado; AuditService registra determinadas operaciones administrativas y de pagos. |

## 4.10. Database Design

SafeSpace utiliza un modelo de persistencia no relacional en Firebase Firestore. Las colecciones y documentos representan la identidad de los usuarios, sus preferencias, la participación en encuestas y actividades, los reportes y las conversaciones. Las validaciones de la API y los identificadores de los documentos evitan registros duplicados en operaciones como responder encuestas o registrar el ánimo diario. Esta organización permite que la información consultada por RRHH y los usuarios corresponda a registros coherentes.

La distribución por contexto indica responsabilidad funcional sobre los datos, no bases de datos separadas. profile y admin reutilizan información asociada a la identidad del usuario. shared no define almacenamiento de negocio. Las vistas se presentan como un modelo lógico para relacionar los conceptos del dominio con las colecciones y documentos de Firestore; no representan tablas SQL ni migraciones físicas.

### 4.10.1. Relational/Non-Relational Database Diagram

#### Vista general

La vista general presenta las principales entidades y relaciones lógicas del dominio. Las vistas siguientes permiten examinar cada contexto con mayor detalle e incluyen las entidades externas necesarias para comprender sus relaciones. Estas relaciones son conceptuales y no implican claves foráneas propias de una base de datos relacional.

![Diagrama general de base de datos](../assets/images/cap4/arquitectura-final/database/SafeSpace-database.svg)

**Lectura de las capturas:** los diagramas se conservan como una representación lógica de las entidades, identificadores y dependencias del dominio. En la implementación real, Firestore organiza la información mediante colecciones y documentos; por ello, las relaciones mostradas no deben interpretarse como tablas, claves primarias, claves foráneas o restricciones SQL físicas. Las validaciones de consistencia se aplican desde la API y las reglas de acceso de la aplicación.

#### Identidad y cuentas (`iam`)

users centraliza las cuentas y user_preferences representa la configuración asociada a cada usuario mediante su identificador lógico. Esta relación evita duplicar perfiles de preferencias y permite conservar una experiencia personalizada. Las referencias a users en los demás contextos reutilizan esta identidad; no representan nuevas colecciones de usuarios.

![Base de datos de iam](../assets/images/cap4/arquitectura-final/database/iam.svg)

#### Autenticación y recuperación (`authentication`)

password_reset_tokens representa los registros de recuperación asociados a users y conserva el hash del token, su vencimiento y el momento de uso. Estas evidencias permiten rechazar tokens vencidos o reutilizados y mantener la continuidad de acceso a la cuenta. Las credenciales permanecen en users, cuya entidad pertenece a iam.

![Base de datos de authentication](../assets/images/cap4/arquitectura-final/database/authentication.svg)

#### Perfil y preferencias (`profile`)

Este contexto no define una colección de negocio independiente: sus operaciones consultan y actualizan users y user_preferences. La vista muestra esas dependencias de persistencia. Compartir estas entidades evita inconsistencias entre la identidad utilizada para iniciar sesión y los datos que el usuario ve en su perfil.

![Base de datos de profile](../assets/images/cap4/arquitectura-final/database/profile.svg)

#### Bienestar diario (`mood`)

mood_entries conserva usuario, estado de ánimo y fecha. El servicio verifica la combinación user_id y mood_date para evitar duplicar el registro de un mismo día. Con ello, los resúmenes se apoyan en una participación diaria consistente; la ausencia de una entrada no debe interpretarse como un estado de ánimo negativo.

![Base de datos de mood](../assets/images/cap4/arquitectura-final/database/mood.svg)

#### Encuestas (`survey`)

surveys almacena la pregunta, el estado, el tipo y el creador; survey_answers relaciona cada respuesta con su encuesta y usuario. El servicio verifica la combinación survey_id y user_id para evitar respuestas duplicadas de una misma persona. Esto permite interpretar la participación sin contar varias veces al mismo empleado.

![Base de datos de survey](../assets/images/cap4/arquitectura-final/database/survey.svg)

#### Comentarios y reacciones (`comment`)

comments vincula contenido, autor y encuesta, y parent_id conserva la jerarquía de respuestas. comment_likes utiliza los identificadores comment_id y user_id para impedir repetir la misma reacción mediante validaciones del servicio. users y surveys aparecen como referencias lógicas necesarias para contextualizar la conversación.

![Base de datos de comment](../assets/images/cap4/arquitectura-final/database/comment.svg)

#### Actividades y votación (`activity`)

weekly_activities conserva la iniciativa y su creador; activity_options define sus alternativas y activity_votes registra la elección. El servicio verifica activity_id y user_id para mantener un voto vigente por empleado y actividad. La pertenencia de la opción a la actividad también se valida en el servicio.

![Base de datos de activity](../assets/images/cap4/arquitectura-final/database/activity.svg)

#### Reportes laborales (`report`)

reports conserva categoría, título, descripción, prioridad y estado. user_id es opcional y admite reportes sin asociación a una cuenta; el servicio omite esa referencia al crear un reporte anónimo. Esta estructura permite gestionar casos identificados o anónimos dentro del mismo proceso de seguimiento.

![Base de datos de report](../assets/images/cap4/arquitectura-final/database/report.svg)

#### Asistencia con inteligencia artificial (`ai`)

ai_conversations relaciona las conversaciones con users y ai_messages conserva emisor, contenido y fecha dentro de cada conversación. La estructura permite recuperar el historial y mantener el contexto de interacción. Los objetos de solicitud al proveedor no se almacenan como colecciones independientes.

![Base de datos de ai](../assets/images/cap4/arquitectura-final/database/ai.svg)

#### Registro de pagos (`payment`)

payment_records guarda el PDF, sus metadatos, el plan y la siguiente fecha de pago. Las referencias al beneficiario y al registrador son opcionales, y los nombres se conservan como campos del documento. Esto permite mantener la evidencia del registro incluso cuando una cuenta asociada deja de existir.

![Base de datos de payment](../assets/images/cap4/arquitectura-final/database/payment.svg)

#### Administración (`admin`)

admin no define colecciones de negocio propias. La vista muestra users, surveys y weekly_activities como recursos que administra, sin duplicar su almacenamiento. Esta reutilización permite que los cambios administrativos se reflejen en los mismos datos utilizados por empleados y RRHH.

![Base de datos de admin](../assets/images/cap4/arquitectura-final/database/admin.svg)

#### Auditoría (`audit`)

audit_logs conserva acción, tipo e identificador del recurso y fecha. actor_user_id puede omitirse para preservar el registro cuando no existe una cuenta de actor disponible. Esta persistencia respalda la revisión de operaciones sin exigir que la cuenta original continúe activa.

![Base de datos de audit](../assets/images/cap4/arquitectura-final/database/audit.svg)

Las columnas starts_at y ends_at de encuestas y actividades, así como updated_at de reports, pertenecen al esquema físico aunque las entidades Java actuales no las expongan como atributos. Por ello, las vistas de clases y de persistencia reflejan niveles diferentes del diseño.

\newpage
