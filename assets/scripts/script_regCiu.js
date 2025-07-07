document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = form.querySelector('input[type="text"]').value.trim();
    const correo = form.querySelector('input[type="email"]').value.trim();
    const contraseña = form.querySelector('input[type="password"]').value.trim();

    if (!nombre || !correo || !contraseña) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (!correo.includes("@") || !correo.includes(".")) {
      alert("Ingresa un correo electrónico válido.");
      return;
    }

    alert("¡Registro ciudadano exitoso!");
    form.reset();
  });
});
