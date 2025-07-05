import '../styles/ConnectionPage.css';

export function ConnectionPage() {
  const container = document.createElement('div');
  container.classList.add('connection-container');
  container.innerHTML = `
    <h2>Conexión con Psicólogo</h2>
    <p>Página de conexión aún en construcción.</p>
  `;
  return container;
}
