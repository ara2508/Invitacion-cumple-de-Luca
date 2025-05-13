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
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 12 18" fill="none">
<path d="M4 18C2.9 18 1.95833 17.6083 1.175 16.825C0.391667 16.0417 0 15.1 0 14C0 12.9 0.391667 11.9583 1.175 11.175C1.95833 10.3917 2.9 10 4 10C4.38333 10 4.73733 10.0457 5.062 10.137C5.38733 10.229 5.7 10.3667 6 10.55V2C6 1.45 6.196 0.979 6.588 0.587C6.97933 0.195667 7.45 0 8 0H10C10.55 0 11.021 0.195667 11.413 0.587C11.8043 0.979 12 1.45 12 2C12 2.55 11.8043 3.02067 11.413 3.412C11.021 3.804 10.55 4 10 4H8V14C8 15.1 7.60833 16.0417 6.825 16.825C6.04167 17.6083 5.1 18 4 18Z" fill="#40502C"/>
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
