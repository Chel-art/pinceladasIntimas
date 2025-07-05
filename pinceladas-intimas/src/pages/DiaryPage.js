import '../styles/DiaryPage.css';

export function DiaryPage() {
  const container = document.createElement('div');
  container.classList.add('diary-container');
  container.innerHTML = `
    <h2>Diario Emocional</h2>
    <p>Esta página mostrará el historial de tus entradas emocionales.</p>
  `;
  return container;
}
