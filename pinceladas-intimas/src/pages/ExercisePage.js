import '../styles/ExercisePage.css';

// Descripciones de emociones para la rueda
const descriptions = {
  "Alegría": "Emoción positiva de celebración y satisfacción.",
  "Tristeza": "Emoción de dolor o aflicción profunda.",
  "Miedo": "Respuesta ante peligro real o imaginado.",
  "Ira": "Emoción de indignación o frustración intensa.",
  "Sorpresa": "Reacción ante un estímulo inesperado.",
  "Asco": "Rechazo ante algo desagradable.",
  "Excitación": "Estado de alta energía vinculado al entusiasmo.",
  "Energía": "Sensación de vitalidad y motivación positiva.",
  "Gozo": "Felicidad intensa con disfrute pleno del momento.",
  "Comodidad": "Bienestar tranquilo, sin tensiones.",
  "Reconocimiento": "Sentimiento de ser valorado.",
  "Aprecio": "Gratitud o valoración profunda.",
  "Melancolía": "Tristeza suave por recuerdos.",
  "Desconsuelo": "Tristeza profunda y dolor emocional.",
  "Vacío": "Falta de propósito o conexión.",
  "Aislamiento": "Sensación de separación o soledad.",
  "Remordimiento": "Sentimiento de culpa por acciones pasadas.",
  "Vergüenza": "Incomodidad ante juicio externo.",
  "Ansiedad": "Nerviosismo ante incertidumbre futura.",
  "Incertidumbre": "Falta de claridad o previsibilidad.",
  "Pánico": "Miedo extremo con bloqueo mental.",
  "Parálisis": "Inmovilidad emocional o física por miedo.",
  "Tensión": "Estado de alerta o presión continua.",
  "Alerta": "Atención elevada ante peligro posible."
};

// Lista de prompts creativos
const creativePrompts = [
  "Dibuja la calma y escribe sobre un recuerdo feliz.",
  "Representa la energía y anota tres cosas que te den fuerza.",
  "Ilustra la melancolía y describe cómo se siente en el cuerpo.",
  "Dibuja un refugio y escribe a quién llevarías contigo.",
  "Crea una imagen de crecimiento y anota un pequeño paso que darás hoy.",
  "Pinta un paisaje onírico y escribe una poesía breve sobre él.",
  "Ilustra tu sabor favorito y describe la textura.",
  "Dibuja una metáfora visual de la gratitud y explica su simbolismo.",
  "Crea un autorretrato abstracto y reflexiona sobre tu identidad.",
  "Representa el paso del tiempo y anota un momento significativo de tu pasado.",
  "Dibuja un sonido (sin mostrar instrumento) y escribe cómo te hace sentir.",
  "Crea una escena de fantasía y escribe un diálogo entre los personajes.",
  "Ilustra un sueño que recuerdes y describe su atmósfera.",
  "Dibuja un objeto cotidiano de manera inusual y explica tu elección.",
  "Representa una emoción compleja a través del color y la forma."
];

// Lista de prompts de emociones
const emotionPrompts = [
  "¿Qué emoción sientes ahora? Dibújala.",
  "Representa la alegría sin usar una cara sonriente.",
  "Ilustra el miedo y escribe qué lo causa.",
  "Dibuja la sorpresa y describe una situación inesperada.",
  "Crea una imagen de la tranquilidad y anota qué te la proporciona.",
  "Dibuja la tristeza como un espacio físico y explica su entorno.",
  "Representa la ira usando formas y colores abstractos.",
  "Ilustra la expectativa y escribe qué esperas con ilusión.",
  "Dibuja la compasión y describe a quién le darías consuelo.",
  "Crea un dibujo de la curiosidad y anota sobre qué te gustaría aprender.",
  "Representa la frustración sin usar líneas rectas.",
  "Ilustra la gratitud y escribe tres cosas por las que estás agradecido.",
  "Dibuja la sorpresa buena y describe la experiencia.",
  "Dibuja el entusiasmo y anota qué te impulsa a actuar.",
  "Representa la serenidad y escribe un mantra que te tranquilice."
];

export function ExercisePage() {
  const pageElement = document.createElement('div');
  pageElement.classList.add('exercise-container');

  pageElement.innerHTML = `
    <div class="rueda-emociones-container">
      <h2>Rueda de Emociones Interactiva</h2>
      <p>Pasa el ratón sobre una emoción para ver su descripción</p>
      <div id="svg-tooltip" class="tooltip"></div>
      <svg id="ruedaSvg" width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
        <!-- Estilos de colores y etiquetas aplicados vía CSS externo -->

        <circle cx="300" cy="300" r="200" class="primary"/>
        <circle cx="300" cy="300" r="135" class="secondary"/>
        <circle cx="300" cy="300" r="70" class="tertiary"/>
        <!-- Emociones primarias -->
        <text x="300" y="90" class="label">Alegría</text>
        <text x="450" y="160" class="label">Tristeza</text>
        <text x="510" y="300" class="label">Miedo</text>
        <text x="450" y="440" class="label">Ira</text>
        <text x="300" y="510" class="label">Sorpresa</text>
        <text x="150" y="440" class="label">Asco</text>
        <!-- Emociones secundarias -->
        <text x="300" y="160" class="label">Excitación</text>
        <text x="390" y="200" class="label">Gozo</text>
        <text x="420" y="300" class="label">Energía</text>
        <text x="390" y="400" class="label">Comodidad</text>
        <text x="300" y="440" class="label">Reconocimiento</text>
        <text x="210" y="400" class="label">Aprecio</text>
        <text x="180" y="300" class="label">Melancolía</text>
        <text x="210" y="200" class="label">Desconsuelo</text>
        <!-- Emociones terciarias -->
        <text x="300" y="220" class="label">Vacío</text>
        <text x="350" y="250" class="label">Aislamiento</text>
        <text x="380" y="300" class="label">Vergüenza</text>
        <text x="350" y="350" class="label">Remordimiento</text>
        <text x="300" y="380" class="label">Ansiedad</text>
        <text x="250" y="350" class="label">Incertidumbre</text>
        <text x="220" y="300" class="label">Pánico</text>
        <text x="250" y="250" class="label">Parálisis</text>
        <text x="300" y="270" class="label">Tensión</text>
        <text x="300" y="330" class="label">Alerta</text>
      </svg>
    </div>
    <div class="prompt-section">
      <div class="prompt-controls">
        <button id="creative-prompt-button">Generar Idea Creativa</button>
        <button id="emotion-prompt-button">Generar Emoción</button>
      </div>
      <p id="prompt-text">Elige un tipo de prompt para empezar...</p>
    </div>
    <div id="selected-emotion" class="selected-emotion">Emoción seleccionada: Ninguna</div>
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

  // Interactividad SVG: hover muestra tooltip, click selecciona emoción
  const svgEl = pageElement.querySelector('#ruedaSvg');
  const tooltip = pageElement.querySelector('#svg-tooltip');
  const display = pageElement.querySelector('#selected-emotion');
  svgEl.querySelectorAll('text.label').forEach(text => {
    const label = text.textContent;
    text.addEventListener('mouseenter', e => {
      tooltip.innerHTML = `<strong>${label}</strong><br><em>${descriptions[label] || ''}</em>`;
      tooltip.style.left = `${e.clientX + 10}px`;
      tooltip.style.top = `${e.clientY + 10}px`;
      tooltip.style.display = 'block';
    });
    text.addEventListener('mouseleave', () => tooltip.style.display = 'none');
    text.addEventListener('click', () => display.textContent = `Emoción seleccionada: ${label}`);
  });

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

  // Lógica para la previsualización de imagen
  const imageUpload = pageElement.querySelector('#image-upload');
  const imagePreviewContainer = pageElement.querySelector('#image-preview-container');

  imageUpload.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      imagePreviewContainer.innerHTML = "";
      reader.onload = function (e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.classList.add('image-preview-thumb');
        imagePreviewContainer.appendChild(img);
      }
      reader.readAsDataURL(file);
    }
  });

  // Botón guardar (futuro: guardar emoción, texto e imagen)
  const saveButton = pageElement.querySelector('#save-button');
  saveButton.addEventListener('click', () => {
    const text = pageElement.querySelector('#writing-area').value;

    if (!selectedEmotion) {
      alert("Por favor, selecciona una emoción.");
      return;
    }

    console.log("Guardando entrada:", {
      emotion: selectedEmotion,
      text
      // imagen la puedes subir en otro paso si lo deseas
    });

    // fetch('/api/saveEntry', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ emotion: selectedEmotion, text })
    // });

    alert("Entrada guardada (simulado)");
  });

  return pageElement;
}
