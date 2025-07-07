// Mostrar alertas personalizadas
function mostrarAlertaGlobal(mensaje, tipo = "info") {
  const alerta = document.createElement("div");
  alerta.className = `alerta-global alerta-${tipo}`;
  alerta.textContent = mensaje;
  document.body.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 4000);
}

// Ejemplos de uso (puedes quitarlos luego):
// mostrarAlertaGlobal("Bienvenido a ClimaGuard", "success");
// mostrarAlertaGlobal("Error al cargar datos", "error");
// mostrarAlertaGlobal("Actualización realizada", "info");

// Puedes reutilizar esta función en cualquier parte del sitio
