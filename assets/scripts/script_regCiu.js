const telefonoInput = document.getElementById('telefono');
  telefonoInput.addEventListener('input', () => {
    if (!telefonoInput.value.startsWith('+51 ')) {
      telefonoInput.value = '+51 ';
    }
  });

  function validarFormulario() {
    const correo = document.getElementById('correo').value.trim();
    const contrasena = document.getElementById('contrasena').value;
    const repetir = document.getElementById('repetir').value;
    const mensaje = document.getElementById('mensaje');

    if (!correo.includes('@')) {
      mensaje.textContent = '❌ El correo debe contener @';
      mensaje.style.color = 'red';
      return;
    }

    if (contrasena !== repetir) {
      mensaje.textContent = '❌ Las contraseñas no coinciden';
      mensaje.style.color = 'red';
      return;
    }

    // Mostrar mensaje de éxito
    mensaje.textContent = '✅ Registrado correctamente';
    mensaje.style.color = 'green';

    // Limpiar campos después de 1 segundo (puedes ajustar el tiempo si deseas)
    setTimeout(() => {
      document.getElementById('nombre').value = '';
      document.getElementById('apellido').value = '';
      document.getElementById('correo').value = '';
      document.getElementById('direccion').value = '';
      document.getElementById('telefono').value = '+51 ';
      document.getElementById('contrasena').value = '';
      document.getElementById('repetir').value = '';
    }, 1000);
  }
