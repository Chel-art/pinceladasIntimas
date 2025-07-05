import '../styles/AuthPage.css';

export function AuthPage() {
  const container = document.createElement('div');
  container.classList.add('auth-container');
  container.innerHTML = `
    <h2>Registro / Inicio de Sesión</h2>
    <p>Página de autenticación aún en construcción.</p>
  `;
  return container;
}
