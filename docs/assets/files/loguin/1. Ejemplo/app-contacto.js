
// ── COMPROBAR SESIÓN ──
// Si no hay sesión guardada en localStorage, mandamos al login inmediatamente
if (localStorage.getItem('sesion') !== 'activa') {
    window.location.href = 'login.html';
}

// Mostrar el nombre del usuario en la cabecera
document.getElementById('nombre-usuario').textContent = localStorage.getItem('usuario');

// ── CERRAR SESIÓN ──
let btnCerrarSesion = document.querySelector("#btn-cerrar-sesion");

btnCerrarSesion.addEventListener("click", function() {
    localStorage.removeItem('sesion');
    localStorage.removeItem('usuario');
    window.location.href = 'login.html';
});

