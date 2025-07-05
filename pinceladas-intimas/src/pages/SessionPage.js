import '../styles/SessionPage.css';

export function SessionPage() {
  const container = document.createElement('div');
  container.classList.add('session-container');
  container.innerHTML = `
    <h2>Agendar Sesión</h2>
    <p>Página de sesiones aún en construcción.</p>
  `;
  return container;
}
