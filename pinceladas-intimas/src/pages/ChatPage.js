import '../styles/ChatPage.css';

export function ChatPage() {
  const container = document.createElement('div');
  container.classList.add('chat-container');
  container.innerHTML = `
    <h2>Mensajes</h2>
    <p>Página de chat aún en construcción.</p>
  `;
  return container;
}
