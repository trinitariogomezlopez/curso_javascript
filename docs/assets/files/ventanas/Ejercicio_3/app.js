
/*
     Parte_1: Añadir un evento click a cada botón para que al pulsarlos aparezca la ventana hija correspondiente.
              El tampo debe ser 620x580 (anchoxalto)
*/


/*
     Parte_2: Mostrar un mensaje TOAST cuando se selecciona una habitación, un destino o un extra.
              El método ya está creada, sólo se debe utilizar para poder mostrar el mensaje.
*/

function mostrarTOAST(msg) {
     let notif = document.getElementById('notif');
     document.getElementById('notif-msg').textContent = msg;
     notif.classList.add('show');
     clearTimeout(notif._t);
     notif._t = setTimeout(() => notif.classList.remove('show'), 3200);
}