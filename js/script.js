function actualizarContador() {
    const fechaEvento = new Date("2025-06-01T12:30:00"); // Fecha del evento
    const ahora = new Date();
    const diferencia = fechaEvento - ahora;
  
    // Si el evento ya pasó
    if (diferencia <= 0) {
      document.getElementById("dias-restantes").textContent = 0;
      document.getElementById("horas").textContent = "00";
      document.getElementById("minutos").textContent = "00";
      document.getElementById("segundos").textContent = "00";
      return;
    }
  
    // Calcular días restantes
    const diasRestantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  
    // Calcular horas, minutos y segundos restantes
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);
  
    // Actualizar los valores en el HTML
    document.getElementById("dias-restantes").textContent = diasRestantes;
    document.getElementById("horas").textContent = String(horas).padStart(2, "0");
    document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
    document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
  }
  
  // Actualizar cada segundo
  setInterval(actualizarContador, 1000);
  actualizarContador(); // Primera ejecución inmediata

  const musica = document.getElementById('musica');
  const boton = document.getElementById('btn-musica');
  let reproduciendo = false;
  
  // SVG del ícono musical
const iconoMusica = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="#40502c">
  <path d="M13.41 2.16L7.53 4.01A2.38 2.38 0 0 0 6 6.28v7.83c-.77-.52-2.23-.26-3.1.56-1.13 1.05-1.13 2.62 0 3.67s2.72 1.12 3.85.07c.69-.64 1.09-1.49 1.09-2.38V9.5l8-2.5v5.47c-.77-.52-2.23-.26-3.1.56-1.13 1.05-1.13 2.62 0 3.67s2.72 1.12 3.85.07c.69-.64 1.09-1.49 1.09-2.38V4.06a1.5 1.5 0 0 0-1.87-1.9z"/>
</svg>
`;
  
  // Ícono de pausa simple (⏸️), también con color
  const iconoPause = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
<path d="M0 17H4.66667V0H0V17ZM9.33333 0V17H14V0H9.33333Z" fill="#40502C"/>
</svg>`;
  
  // Mostrar ícono inicial
  boton.innerHTML = iconoMusica;
  
  boton.addEventListener('click', () => {
    if (reproduciendo) {
      musica.pause();
      boton.innerHTML = iconoMusica;
    } else {
      musica.play();
      boton.innerHTML = iconoPause;
    }
    reproduciendo = !reproduciendo;
  });
