import '../styles/ExercisePage.css';

// Lista de prompts creativos
const creativePrompts = [
  "Dibuja la calma y escribe sobre un recuerdo feliz.",
  "Representa la energía y anota tres cosas que te den fuerza.",
  "Ilustra la melancolía y describe cómo se siente en el cuerpo.",
  "Dibuja un refugio y escribe a quién llevarías contigo.",
  "Crea una imagen de crecimiento y anota un pequeño paso que darás hoy."
];

// Lista de prompts de emociones
const emotionPrompts = [
  "¿Qué emoción sientes ahora? Dibújala.",
  "Representa la alegría sin usar una cara sonriente.",
  "Ilustra el miedo y escribe qué lo causa.",
  "Dibuja la sorpresa y describe una situación inesperada.",
  "Crea una imagen de la tranquilidad y anota qué te la proporciona."
];

export function ExercisePage() {
  const pageElement = document.createElement('div');
  pageElement.classList.add('exercise-container');

  pageElement.innerHTML = `
    <div class="prompt-section">
      <div class="prompt-controls">
        <button id="creative-prompt-button">Generar Idea Creativa</button>
        <button id="emotion-prompt-button">Generar Emoción</button>
      </div>
      <p id="prompt-text">Elige un tipo de prompt para empezar...</p>
    </div>
    <div class="workspace">
      <div class="upload-area">
        <label>Sube tu Dibujo (Hecho con mano no dominante)</label>
        <input type="file" id="image-upload" accept="image/*" />
        <div class="image-preview" id="image-preview-container">
          <span class="image-preview-text">Aquí verás la imagen de tu dibujo</span>
        </div>
      </div>
      <div class="text-area">
        <label>Tus Palabras (Mano dominante)</label>
        <textarea id="writing-area" rows="15" placeholder="Escribe aquí tus pensamientos..."></textarea>
      </div>
    </div>
    <button id="save-button">Guardar Entrada</button>
  `;

  // Lógica para los botones de prompts
  const creativeButton = pageElement.querySelector('#creative-prompt-button');
  const emotionButton = pageElement.querySelector('#emotion-prompt-button');
  const promptText = pageElement.querySelector('#prompt-text');

  creativeButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * creativePrompts.length);
    promptText.textContent = creativePrompts[randomIndex];
  });

  emotionButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * emotionPrompts.length);
    promptText.textContent = emotionPrompts[randomIndex];
  });

  // Lógica para la previsualización de la imagen
  const imageUpload = pageElement.querySelector('#image-upload');
  const imagePreviewContainer = pageElement.querySelector('#image-preview-container');

  imageUpload.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      imagePreviewContainer.innerHTML = ""; // Limpiar el contenedor
      reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.classList.add('image-preview-thumb');
        imagePreviewContainer.appendChild(img);
      }
      reader.readAsDataURL(file);
    }
  });

  return pageElement;
}