/* ================================================
   MATERIALES DE ASAMBLEA — main.js
   ================================================ */

// Marcar el enlace activo en el nav según la página actual
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.header-nav a');
  const current = window.location.pathname.split('/').pop();

  links.forEach(link => {
    if (link.getAttribute('href').endsWith(current)) {
      link.classList.add('active');
    }
  });
});
