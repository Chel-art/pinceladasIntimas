import '../styles/ProfilePage.css';

export function ProfilePage() {
  const container = document.createElement('div');
  container.classList.add('profile-container');
  container.innerHTML = `
    <h2>Perfil de Usuario</h2>
    <p>Página de perfil aún en construcción.</p>
  `;
  return container;
}
