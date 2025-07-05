# CodeViz Research Context

> **Note**: This file contains research context from CodeViz. Most recent contexts are at the bottom.

---

## Research Query

🧭 FLUJO DE NAVEGACIÓN EMOCIONAL (USUARIO)
1. 🟢 Inicio / Landing Page
Objetivo: Explicar el valor de la app, invitar al usuario a registrarse.

CTA: "Regístrate" | "Inicia sesión"

Enlaces: “¿Qué es una Rueda Emocional?” | “Conecta con profesionales”

No se usa base de datos aquí aún.

2. 🔐 Registro / Inicio de sesión
Datos: name, email, password, role (USER | PSYCHOLOGIST)

Tablas implicadas:
✅ User

Acciones:

Registro de nuevo usuario

Inicio de sesión seguro con JWT o sesiones

3. 🎡 Selección de Emoción (Rueda Emocional Interactiva)
Objetivo: Registrar una emoción mediante la rueda SVG.

Tablas implicadas:
✅ Emotion
✅ DiaryEntry

Acciones del usuario:

Selecciona una emoción → Se muestra en el centro

Elige su intensidad

Opcional: añade notas

Resultado: Se guarda en DiaryEntry con emotionId, userId, notes, entryDate.

4. 📔 Diario emocional
Objetivo: Mostrar el historial del usuario con fechas y emociones.

Tablas implicadas:
✅ DiaryEntry
✅ Emotion

Interacción:

Visualizar entradas pasadas

Filtrar por emoción, fecha o notas

5. 🧠 Conexión con Psicólogo
Objetivo: Solicitar contacto con un profesional.

Tablas implicadas:
✅ User (solo los Role = PSYCHOLOGIST)
✅ Connection

Flujo:

Usuario solicita conexión

Psicólogo aprueba o rechaza

6. 💬 Mensajes y acompañamiento
Objetivo: Comunicación básica entre usuario y psicólogo

Tablas implicadas:
✅ Message
✅ Connection

Opciones:

Ver mensajes (tipo chat)

Enviar mensaje a psicólogo

Notificaciones

7. 📅 Agendar sesión
Objetivo: Permitir sesiones (videollamada futura, o simplemente agendada)

Tablas implicadas:
✅ Session

Flujo:

Psicólogo ofrece fecha y hora

Usuario acepta / cancela

8. ⚙️ Perfil de usuario
Objetivo: Ver datos personales, roles, historial, etc.

Tablas implicadas:
✅ User
✅ Connection
✅ Session

🗃️ Tablas utilizadas en cada paso
Paso	Tablas usadas
Registro e inicio	User
Rueda emocional	Emotion, DiaryEntry
Diario emocional	DiaryEntry, Emotion
Conexión con psicólogo	User, Connection
Mensajes	Message, Connection
Agendar sesión	Session
Perfil	User, Session, Connection

🧭 FLUJO SIMPLIFICADO EN DIAGRAMA
plaintext
Copiar
Editar
[Inicio] → [Registro/Login] 
          → [Seleccionar Emoción (Rueda)]
            → [Guardar en Diario]
              → [Ver Diario]
                → [Conectar con Psicólogo]
                  → [Enviar Mensaje] → [Agendar Sesión]
                    → [Perfil Usuario]

*Session: e763df6636e9ff36702d8c878f8560b6 | Generated: 7/5/2025, 8:20:55 PM*

### Analysis Summary

# Flujo de Navegación Emocional (Usuario)

## Arquitectura General

La aplicación **Pinceladas Íntimas** sigue una arquitectura cliente-servidor. El **frontend** se encarga de la interfaz de usuario y la interacción, mientras que el **backend** gestiona la lógica de negocio, la persistencia de datos y la autenticación.

*   **Frontend**: Desarrollado con JavaScript, HTML y CSS, con un punto de entrada principal en [index.html](c:/Users/Chely/Desktop/PROYECTITOS/pinceladasIntimas/pinceladas-intimas/index.html) y la lógica principal en [main.js](c:/Users/Chely/Desktop/PROYECTITOS/pinceladasIntimas/pinceladas-intimas/src/main.js). Las diferentes vistas de la aplicación se encuentran en el directorio [pages](c:/Users/Chely/Desktop/PROYECTITOS/pinceladasIntimas/pinceladas-intimas/src/pages).
*   **Backend**: Implementado en Node.js, con el servidor principal en [index.js](c:/Users/Chely/Desktop/PROYECTITOS/pinceladasIntimas/pinceladas-intimas/backend/index.js) y la configuración de la base de datos en [db.js](c:/Users/Chely/Desktop/PROYECTITOS/pinceladasIntimas/pinceladas-intimas/backend/db.js).

## 1. Inicio / Landing Page

*   **Propósito**: Presentar la aplicación y sus beneficios, invitando al usuario a registrarse o iniciar sesión.
*   **Componentes Internos**:
    *   La página principal de la aplicación, probablemente renderizada a través de [HomePage.js](c:/Users/Chely/Desktop/PROYECTITOS/pinceladasIntimas/pinceladas-intimas/src/pages/HomePage.js).
    *   Estilos asociados en [HomePage.css](c:/Users/Chely/Desktop/PROYECTITOS/pinceladasIntimas/pinceladas-intimas/src/styles/HomePage.css).
*   **Relaciones Externas**: Contiene enlaces o botones que dirigen al usuario a las páginas de registro o inicio de sesión.

## 2. Registro / Inicio de sesión

*   **Propósito**: Permitir a los usuarios crear una nueva cuenta o acceder a una existente.
*   **Tablas Implicadas**: `User` (gestionada por el backend).
*   **Componentes Internos**:
    *   **Frontend**: La interfaz de usuario para el registro y el inicio de sesión se encuentra en [login.js](c:/Users/Chely/Desktop/PROYECTITOS/pinceladasIntimas/pinceladas-intimas/src/pages/login.js).
    *   **Backend**: La lógica para el registro de nuevos usuarios y el inicio de sesión seguro (posiblemente con JWT) se manejará en [index.js](c:/Users/Chely/Desktop/PROYECTITOS/pinceladasIntimas/pinceladas-intimas/backend/index.js), interactuando con la base de datos a través de [db.js](c:/Users/Chely/Desktop/PROYECTITOS/pinceladasIntimas/pinceladas-intimas/backend/db.js).
*   **Acciones del Usuario**:
    *   Ingresar `name`, `email`, `password`.
    *   Seleccionar `role` (USER | PSYCHOLOGIST).
    *   Hacer clic en "Regístrate" o "Inicia sesión".
*   **Relaciones Externas**: El frontend envía las credenciales al backend para su validación y autenticación.

## 3. Selección de Emoción (Rueda Emocional Interactiva)

*   **Propósito**: Permitir al usuario registrar una emoción y su intensidad.
*   **Tablas Implicadas**: `Emotion`, `DiaryEntry` (gestionadas por el backend).
*   **Componentes Internos**:
    *   **Frontend**: La interfaz de la rueda emocional interactiva, que probablemente utiliza los archivos SVG como [rueda_emociones.svg](c:/Users/Chely/Desktop/PROYECTITOS/pinceladasIntimas/pinceladas-intimas/public/rueda_emociones.svg) o [rueda_emociones_nivel_3.svg](c:/Users/Chely/Desktop/PROYECTITOS/pinceladasIntimas/pinceladas-intimas/public/rueda_emociones_nivel_3.svg). La lógica de interacción y el envío de datos se implementarán en un componente JavaScript, posiblemente dentro de [ExercisePage.js](c:/Users/Chely/Desktop/PROYECTITOS/pinceladasIntimas/pinceladas-intimas/src/pages/ExercisePage.js).
    *   **Backend**: La lógica para guardar la entrada en `DiaryEntry` (con `emotionId`, `userId`, `notes`, `entryDate`) se manejará en [index.js](c:/Users/Chely/Desktop/PROYECTITOS/pinceladasIntimas/pinceladas-intimas/backend/index.js).
*   **Acciones del Usuario**:
    *   Seleccionar una emoción en la rueda.
    *   Elegir la intensidad.
    *   Añadir notas opcionales.
*   **Relaciones Externas**: El frontend envía los datos de la emoción seleccionada al backend para su almacenamiento.

## 4. Diario emocional

*   **Propósito**: Mostrar el historial de emociones registradas por el usuario.
*   **Tablas Implicadas**: `DiaryEntry`, `Emotion` (gestionadas por el backend).
*   **Componentes Internos**:
    *   **Frontend**: La visualización del diario emocional se realizará en un componente JavaScript, posiblemente dentro de [userdashboard.js](c:/Users/Chely/Desktop/PROYECTITOS/pinceladasIntimas/pinceladas-intimas/src/pages/userdashboard.js) o una página dedicada.
    *   **Backend**: La lógica para recuperar las entradas del diario, con opciones de filtrado por emoción, fecha o notas, se implementará en [index.js](c:/Users/Chely/Desktop/PROYECTITOS/pinceladasIntimas/pinceladas-intimas/backend/index.js).
*   **Interacción**:
    *   Visualizar entradas pasadas.
    *   Filtrar por emoción, fecha o notas.
*   **Relaciones Externas**: El frontend solicita al backend las entradas del diario, posiblemente con parámetros de filtrado.

## 5. Conexión con Psicólogo

*   **Propósito**: Permitir al usuario solicitar contacto con un psicólogo.
*   **Tablas Implicadas**: `User` (filtrando por `Role = PSYCHOLOGIST`), `Connection` (gestionadas por el backend).
*   **Componentes Internos**:
    *   **Frontend**: Interfaz para buscar y solicitar conexión con psicólogos.
    *   **Backend**: Lógica para gestionar las solicitudes de conexión y el estado de aprobación/rechazo en [index.js](c:/Users/Chely/Desktop/PROYECTITOS/pinceladasIntimas/pinceladas-intimas/backend/index.js).
*   **Flujo**:
    *   Usuario solicita conexión.
    *   Psicólogo aprueba o rechaza (a través de su propio panel, no especificado en este flujo de usuario).
*   **Relaciones Externas**: El frontend envía solicitudes de conexión al backend.

## 6. Mensajes y acompañamiento

*   **Propósito**: Facilitar la comunicación entre el usuario y el psicólogo.
*   **Tablas Implicadas**: `Message`, `Connection` (gestionadas por el backend).
*   **Componentes Internos**:
    *   **Frontend**: Interfaz de chat para ver y enviar mensajes.
    *   **Backend**: Lógica para almacenar y recuperar mensajes, y posiblemente para notificaciones, en [index.js](c:/Users/Chely/Desktop/PROYECTITOS/pinceladasIntimas/pinceladas-intimas/backend/index.js).
*   **Opciones**:
    *   Ver mensajes (tipo chat).
    *   Enviar mensaje a psicólogo.
    *   Notificaciones (implementación futura).
*   **Relaciones Externas**: El frontend envía mensajes al backend y los recupera para su visualización.

## 7. Agendar sesión

*   **Propósito**: Permitir la programación de sesiones entre el usuario y el psicólogo.
*   **Tablas Implicadas**: `Session` (gestionada por el backend).
*   **Componentes Internos**:
    *   **Frontend**: Interfaz para visualizar y gestionar sesiones.
    *   **Backend**: Lógica para crear, actualizar y eliminar sesiones en [index.js](c:/Users/Chely/Desktop/PROYECTITOS/pinceladasIntimas/pinceladas-intimas/backend/index.js).
*   **Flujo**:
    *   Psicólogo ofrece fecha y hora (a través de su propio panel).
    *   Usuario acepta / cancela.
*   **Relaciones Externas**: El frontend interactúa con el backend para la gestión de sesiones.

## 8. Perfil de usuario

*   **Propósito**: Mostrar y permitir la edición de datos personales, roles e historial del usuario.
*   **Tablas Implicadas**: `User`, `Connection`, `Session` (gestionadas por el backend).
*   **Componentes Internos**:
    *   **Frontend**: La página de perfil de usuario, probablemente en [userdashboard.js](c:/Users/Chely/Desktop/PROYECTITOS/pinceladasIntimas/pinceladas-intimas/src/pages/userdashboard.js) o una página dedicada.
    *   **Backend**: Lógica para recuperar y actualizar la información del usuario, conexiones y sesiones en [index.js](c:/Users/Chely/Desktop/PROYECTITOS/pinceladasIntimas/pinceladas-intimas/backend/index.js).
*   **Relaciones Externas**: El frontend solicita y envía datos del perfil al backend.

---

## Research Query

.

*Session: 1d07dd4209ecd0b5d15eeed974974bbd | Generated: 7/5/2025, 8:24:45 PM*

### Analysis Summary

# Pinceladas Intimas Codebase Overview

The **Pinceladas Intimas** project is structured as a full-stack application, primarily divided into a frontend application and a backend API. The project utilizes JavaScript/Node.js for both components, with distinct `package.json` files managing dependencies for the root project, the frontend, and the backend.

## High-Level Architecture

The application follows a client-server architecture. The **Frontend Application** serves as the user interface, handling user interactions and displaying data. It communicates with the **Backend API** to fetch and persist data, which in turn interacts with a database.

```
+---------------------+       +-------------------+       +--------------+
|                     |       |                   |       |              |
|  Frontend           | <---> |  Backend API      | <---> |  Database    |
|  (pinceladas-intimas)|       |  (backend)        |       |              |
|                     |       |                   |       |              |
+---------------------+       +-------------------+       +--------------+
```

### Frontend Application

The **Frontend Application** is located within the [pinceladas-intimas/](pinceladas-intimas/) directory. Its purpose is to provide the user interface and client-side logic for the Pinceladas Intimas application.

**Internal Parts:**
*   **Entry Point:** The main entry point for the web application is [index.html](pinceladas-intimas/index.html), which loads the primary JavaScript application logic from [src/main.js](pinceladas-intimas/src/main.js).
*   **Core Logic:** The core JavaScript application logic resides in the [src/](pinceladas-intimas/src/) directory.
    *   [main.js](pinceladas-intimas/src/main.js): Likely the main application bootstrap file.
    *   [counter.js](pinceladas-intimas/src/counter.js): A utility or component for counter functionality.
*   **Pages:** User interface views are organized within the [src/pages/](pinceladas-intimas/src/pages/) directory.
    *   [HomePage.js](pinceladas-intimas/src/pages/HomePage.js): Represents the main landing page.
    *   [ExercisePage.js](pinceladas-intimas/src/pages/ExercisePage.js): Handles exercise-related views and logic.
    *   [login.js](pinceladas-intimas/src/pages/login.js): Manages user authentication and login.
    *   [userdashboard.js](pinceladas-intimas/src/pages/userdashboard.js): Displays the user's personalized dashboard.
*   **Styling:** CSS files define the visual presentation of the application.
    *   [style.css](pinceladas-intimas/src/style.css): General application styles.
    *   [src/styles/](pinceladas-intimas/src/styles/) contains page-specific or modular styles:
        *   [ExercisePage.css](pinceladas-intimas/src/styles/ExercisePage.css)
        *   [HomePage.css](pinceladas-intimas/src/styles/HomePage.css)
        *   [main.css](pinceladas-intimas/src/styles/main.css)
*   **Assets:** Static assets like images and SVGs are stored in the [public/](pinceladas-intimas/public/) directory.
    *   [rueda_emociones.png](pinceladas-intimas/public/rueda_emociones.png), [rueda_emociones.svg](pinceladas-intimas/public/rueda_emociones.svg), [rueda_emociones_nivel_3.svg](pinceladas-intimas/public/rueda_emociones_nivel_3.svg): Image assets, likely related to an "emotions wheel".
    *   [vite.svg](pinceladas-intimas/public/vite.svg): Vite build tool logo.
    *   [index.js](pinceladas-intimas/public/index.js): Potentially a public-facing JavaScript file or a build output.
*   **Dependencies:** Managed by [pinceladas-intimas/package.json](pinceladas-intimas/package.json) and [pinceladas-intimas/package-lock.json](pinceladas-intimas/package-lock.json).

**External Relationships:**
The frontend communicates with the **Backend API** (described below) to perform operations such as user authentication, data retrieval, and data submission. This interaction typically occurs via HTTP requests.

### Backend API

The **Backend API** is located within the [pinceladas-intimas/backend/](pinceladas-intimas/backend/) directory. Its purpose is to provide data and services to the frontend application, handle business logic, and manage interactions with the database.

**Internal Parts:**
*   **Server Entry Point:** [index.js](pinceladas-intimas/backend/index.js) is the main file that initializes and starts the backend server, defining API routes and handling incoming requests.
*   **Database Connection:** [db.js](pinceladas-intimas/backend/db.js) is responsible for establishing and managing the connection to the database.
*   **Dependencies:** Managed by [pinceladas-intimas/backend/package.json](pinceladas-intimas/backend/package.json) and [pinceladas-intimas/backend/package-lock.json](pinceladas-intimas/backend/package-lock.json).

**External Relationships:**
The backend API receives HTTP requests from the **Frontend Application**. It processes these requests, interacts with the database via [db.js](pinceladas-intimas/backend/db.js) to retrieve or store data, and sends back appropriate responses to the frontend.

## Project Configuration and Dependencies

The root directory [c:/Users/Chely/Desktop/PROYECTITOS/pinceladasIntimas/](c:/Users/Chely/Desktop/PROYECTITOS/pinceladasIntimas/) contains overall project configuration and documentation.

*   **Root Dependencies:** [package.json](package.json) and [package-lock.json](package-lock.json) in the root directory manage project-level dependencies and scripts, if any.
*   **Documentation:**
    *   [README.md](README.md): Provides general information about the project.
    *   [CLAUDE.md](CLAUDE.md): Likely contains specific documentation or notes related to Claude (an AI assistant).
*   **Version Control:** The [.git/](.git/) directory manages the Git version control system for the project.
*   **Development Environment:** The [.vscode/](.vscode/) directory contains configuration files for Visual Studio Code, such as [launch.json](.vscode/launch.json) for debugging.

