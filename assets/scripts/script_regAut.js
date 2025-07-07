document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = form.querySelector('input[type="text"]:nth-of-type(1)').value.trim();
    const correo = form.querySelector('input[type="email"]').value.trim();
    const contraseña = form.querySelector('input[type="password"]').value.trim();
    const cargo = form.querySelector('input[type="text"]:nth-of-type(2)').value.trim();

    if (!nombre || !correo || !contraseña || !cargo) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (!correo.endsWith(".gob.pe") && !correo.includes("institucional")) {
      alert("Por favor, usa un correo institucional válido.");
      return;
    }

    alert("¡Registro de autoridad exitoso!");
    form.reset();
  });
});