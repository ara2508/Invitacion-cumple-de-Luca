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
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="35" viewBox="0,0,900,210">
<g fill="#40502c" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(9.84615,9.84615)"><path d="M21.5625,0.17188l-11.10937,3.39844c-1.34766,0.38281 -2.4375,1.78516 -2.4375,3.13281v11.55859c0,0 0,0.15625 0,0.16016c0,0 -0.80469,-0.54297 -2.59766,-0.28906c-2.63281,0.375 -4.76953,2.39453 -4.76953,4.51563c0,2.12109 2.13672,3.41797 4.76953,3.04297c2.63672,-0.37109 4.56641,-2.32812 4.56641,-4.44922c0,0 0,-9.06641 0,-10.00781c0,-0.9375 1.12891,-1.34375 1.12891,-1.34375l9.82422,-3.07812c0,0 1.08594,-0.36328 1.08594,0.64063c0,1.00781 0,8.03125 0,8.03125c0,0 0,0.00391 0,0.00781c0,0 -1,-0.57812 -2.79297,-0.35937c-2.63281,0.32031 -4.76953,2.29687 -4.76953,4.41797c0,2.12109 2.13672,3.46094 4.76953,3.14063c2.63281,-0.31641 4.76953,-2.29687 4.76953,-4.41797v-16.36328c0,-1.34375 -1.09375,-2.125 -2.4375,-1.73828z"></path></g></g>
</svg>`;
  
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