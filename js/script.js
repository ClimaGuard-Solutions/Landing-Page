document.addEventListener("DOMContentLoaded", () => {
  const boton = document.querySelector('.contactar');

  boton.addEventListener('click', () => {
    const nombre = document.querySelector('.nombre').value.trim();
    const correo = document.querySelector('.correo').value.trim();
    const mensaje = document.querySelector('.mensaje-confirmacion');

    if (nombre !== "" && correo !== "") {
      mensaje.style.display = 'block';

      // Ocultar después de 5 segundos
      setTimeout(() => {
        mensaje.style.display = 'none';
      }, 5000);
    } else {
      alert("Por favor, completa ambos campos.");
    }
  });
});
