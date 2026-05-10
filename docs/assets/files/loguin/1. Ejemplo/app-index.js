    // ── COMPROBAR SESIÓN ──
    // Si no hay sesión guardada en localStorage, mandamos al login inmediatamente
    if (localStorage.getItem('sesion') !== 'activa') {
      window.location.href = 'login.html';
    }

    // Mostrar el nombre del usuario en la cabecera
    document.getElementById('nombre-usuario').textContent = localStorage.getItem('usuario');

    // ── CERRAR SESIÓN ──
    let btnCerrarSesion = document.querySelector("#cerrar-sesion");

    btnCerrarSesion.addEventListener("click", function(){
        localStorage.removeItem('sesion');   // Borra la sesión
        localStorage.removeItem('usuario');  // Borra el nombre
        window.location.href = 'login.html'; // Vuelve al login
    });

    