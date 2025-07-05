import '../styles/HomePage.css';

export function HomePage() {
  const homeElement = document.createElement('div');
  homeElement.classList.add('home-container');

  homeElement.innerHTML = `
  <header class="app-header">
    <h1>Pinceladas Íntimas</h1>
    <p>Una herramienta de autodescubrimiento a través de la escritura y el dibujo bilateral.</p>
  </header>
  <div class="cta">
    <div class="cta-buttons">
      <button class="register" onclick="window.navigateTo('/auth#register')">Regístrate</button>
      <button class="login" onclick="window.navigateTo('/auth#login')">Inicia sesión</button>
    </div>
    <div class="cta-links">
      <a href="javascript:void(0)" onclick="window.navigateTo('/exercise')">¿Qué es una Rueda Emocional?</a>
      <a href="javascript:void(0)" onclick="window.navigateTo('/connect')">Conecta con profesionales</a>
    </div>
  </div>
    <main class="app-main">
      <section class="intro-section">
        <h2>🧠 Por qué funciona desde un punto de vista psicológico</h2>
        <div class="features-grid">
          <div class="feature-card">
            <h3>Estimulación bilateral</h3>
            <p>Al obligarte a usar tu mano no dominante, activas la conexión interhemisférica. Esto rompe patrones rígidos de pensamiento y te ‘desestabiliza’ lo justo para que surjan nuevas ideas y rutas neuronales.</p>
          </div>
          <div class="feature-card">
            <h3>Tolerancia a la frustración</h3>
            <p>Al dibujar o escribir con una mano floja se generan errores; aprender a aceptarlos reduce la autoexigencia y la ansiedad de “hacerlo perfecto”.</p>
          </div>
          <div class="feature-card">
            <h3>Desinhibición creativa</h3>
            <p>Las combinaciones aleatorias de conceptos evitan que te quedes encasillado en tu propia rutina mental. Cada prompt es una invitación a explorar sin juicio: “¿Cómo dibujo un árbol + melancolía + espacio?”</p>
          </div>
          <div class="feature-card">
            <h3>Ritual diario, refuerzo positivo</h3>
            <p>La app te empuja a un hábito diario: registrar texto y dibujo con ambas manos, y así consolidas nuevos patrones de conducta y creatividad.</p>
          </div>
        </div>
      </section>
    </main>
  `;

  return homeElement;
}