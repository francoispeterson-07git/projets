// Menu mobile : ouvre et ferme la navigation sur téléphone.
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('#menu');

  if (!toggle || !menu) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
  }

  // Clic sur le bouton : ouvrir ou fermer
  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Clic sur un lien du menu : on referme pour voir la section
  menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false);
  });

  // Touche Échap : on referme
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') setOpen(false);
  });
})();
