import { HomePage } from './pages/HomePage.js';
import { AuthPage } from './pages/AuthPage.js';
import { ExercisePage } from './pages/ExercisePage.js';
import { DiaryPage } from './pages/DiaryPage.js';
import { ConnectionPage } from './pages/ConnectionPage.js';
import { ChatPage } from './pages/ChatPage.js';
import { SessionPage } from './pages/SessionPage.js';
import { ProfilePage } from './pages/ProfilePage.js';
import './styles/main.css';

const appElement = document.querySelector('#app');

// Definición de rutas para navegación
const routes = {
  '/': HomePage,                // Landing Page
  '/auth': AuthPage,            // Registro / Login
  '/exercise': ExercisePage,    // Selección de emoción
  '/diary': DiaryPage,          // Diario emocional
  '/connect': ConnectionPage,   // Conexión con psicólogo
  '/chat': ChatPage,            // Mensajes
  '/session': SessionPage,      // Agendar sesión
  '/profile': ProfilePage       // Perfil de usuario
};

// Función para renderizar la página correcta según la URL
const render = () => {
  const path = window.location.pathname;
  const component = routes[path] || HomePage;
  appElement.innerHTML = '';
  appElement.appendChild(component());
};

// Función para navegar a una nueva ruta
window.navigateTo = (path) => {
  window.history.pushState({}, '', path);
  render();
};

// Escuchar los eventos de navegación del navegador (atrás/adelante)
window.addEventListener('popstate', render);

// Renderizar la página inicial
render();

// Inicializar en la página de inicio
// Más adelante, los CTA en HomePage dirigirán al usuario usando navigateTo
// window.navigateTo('/exercise');