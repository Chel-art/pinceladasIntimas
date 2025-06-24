import { HomePage } from './pages/HomePage.js';
import { ExercisePage } from './pages/ExercisePage.js';
import './styles/main.css';

const appElement = document.querySelector('#app');

// Un router simple para cambiar de página
const routes = {
  '/': HomePage,
  '/exercise': ExercisePage,
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

// Para que veas la nueva página de ejercicios, la cargamos directamente.
// Más adelante, puedes añadir un botón en la HomePage que llame a navigateTo('/exercise');
window.navigateTo('/exercise');