// Expandir todos los <details> solo al imprimir/generar PDF
window.addEventListener('beforeprint', function () {
  document.querySelectorAll('details').forEach(function (el) {
    el.setAttribute('open', true);
    el._wasOpen = el.hasAttribute('open'); // guardar estado original
  });
});

// Restaurar el estado original después de imprimir
window.addEventListener('afterprint', function () {
  document.querySelectorAll('details').forEach(function (el) {
    if (!el._wasOpen) {
      el.removeAttribute('open');
    }
  });
});