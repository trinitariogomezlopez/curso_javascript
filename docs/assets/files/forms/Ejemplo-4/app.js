/* ──────────── Función principal: valida todos los campos ────────────
──────────────────────────────────────────────────────────────────────*/
let btnEnviar = document.querySelector("#btn-enviar");

btnEnviar.addEventListener("click", function() {

    // Validamos cada campo y guardamos si hay errores
    let okNombre = validarNombre();
    let okEmail = validarEmail();

    // Si todos son correctos, mostramos el mensaje de éxito
    if (okNombre === true && okEmail === true) {
        document.getElementById('exito').style.display = 'block';
    } else {
        document.getElementById('exito').style.display = 'none';
    }
});


/* ────────────────────── VALIDAR NOMBRE ────────────────────────────
─────────────────────────────────────────────────────────────────────
──────Regla: no puede estar vacío y debe tener al menos 3 letras────*/

function validarNombre() {
    let inputNombre = document.querySelector('#nombre');
    let nombre = inputNombre.value;

    let divError =  document.getElementById('err-nombre');
    let divOk =  document.getElementById('ok-nombre');

    // Comprobar si el nombre es vacío
    if (nombre === '') {
        mostrarError(inputNombre, divError, divOk, 'El nombre es obligatorio. No puede dejarlo en blanco.');
        return false;
    }

    // Comprobar si el nombre tiene menos de 3 letras
    if (nombre.length < 3) {
        mostrarError(inputNombre, divError, divOk, 'El nombre es demasiado corto. Escriba al menos 3 letras.');
        return false;
    }

    mostrarOk(inputNombre, divError, divOk, '✔ Nombre correcto.');
    return true;
}



/* ────────────────────── VALIDAR EMAIL ────────────────────────────
─────────────────────────────────────────────────────────────────────
──────Regla: debe contener @ y un punto después de la @────*/

function validarEmail() {
    let inputEmail = document.querySelector('#email');
    let nombre = inputEmail.value;

    let divError =  document.getElementById('err-email');
    let divOk =  document.getElementById('ok-email');

    // Comprobar si el email es vacío
    if (nombre === '') {
        mostrarError(inputEmail, divError, divOk, 'El correo electrónico es obligatorio.');
        return false;
    }

    // Comprobamos que tenga @ y al menos un punto después
    if (nombre.indexOf('@') === -1 || nombre.indexOf('.') === -1) {
        mostrarError(inputEmail, divError, divOk, 'El correo no es válido. Debe contener @ y un punto. Ejemplo: ana@correo.com');
        return false;
    }

    mostrarOk(inputEmail, divError, divOk, '✔ Correo electrónico correcto.');
    return true;
}


/* ────────────────────── FUNCIONES AUXILIARES ────────────────────────────────
────────────────────────────────────────────────────────────────────────────────*/

/*─────────────────────────────────────────────────────────────────────────
──────Muestra el mensaje de error y pone el borde rojo────────────────────*/

function mostrarError(campo, divError, divOk, mensaje) {
    campo.classList.remove('correcto');
    campo.classList.add('error');

    divError.textContent = '⚠ ' + mensaje;
    divError.style.display = 'block';

    divOk.style.display = 'none';
}

/*─────────────────────────────────────────────────────────────────────────
────────────Muestra el mensaje de OK y pone el borde verde───────────────*/

function mostrarOk(campo, divError, divOk, mensaje) {
    campo.classList.remove('error');
    campo.classList.add('correcto');

    divOk.textContent = mensaje;
    divOk.style.display = 'block';

    divError.style.display = 'none';
}

