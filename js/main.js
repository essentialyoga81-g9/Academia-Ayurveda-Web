/* ============================================================
   Academia Ayurveda — JavaScript principal
   Navegación móvil, año dinámico y formulario de contacto.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Menú móvil ---------- */
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");

  if (toggle && menu) {
    const closeMenu = function () {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("no-scroll");
    };

    toggle.addEventListener("click", function () {
      const isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("no-scroll", isOpen);
    });

    // Cerrar al pulsar un enlace
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    // Cerrar con tecla Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });

    // Cerrar al redimensionar a escritorio
    window.addEventListener("resize", function () {
      if (window.innerWidth > 680) closeMenu();
    });
  }

  /* ---------- Año dinámico en el footer ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Formulario de contacto (demo) ---------- */
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const note = document.getElementById("formNote");
      if (note) note.classList.add("is-visible");
      form.reset();
    });
  }
})();
