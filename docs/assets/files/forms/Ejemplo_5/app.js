/* ──────────── Función principal: valida todos los campos ────────────
──────────────────────────────────────────────────────────────────────*/
let btnEnviar = document.querySelector("#btn-enviar");

btnEnviar.addEventListener("click", function() {

    // Validamos cada campo y guardamos si hay errores
    let okNombre = validarNombre();
    let okEmail = validarEmail();
    var okTelefono = validarTelefono();
    var okEdad = validarEdad();
    
    // Si todos son correctos, mostramos el mensaje de éxito
    if (okNombre === true && okEmail === true && okTelefono === true && okEdad === true ) {
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
    let email = inputEmail.value;

    let divError =  document.getElementById('err-email');
    let divOk =  document.getElementById('ok-email');

    // Comprobar si el email es vacío
    if (email === '') {
        mostrarError(inputEmail, divError, divOk, 'El correo electrónico es obligatorio.');
        return false;
    }

    // Comprobamos que tenga @ y al menos un punto después
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        mostrarError(inputEmail, divError, divOk, 'El correo no es válido. Debe contener @ y un punto. Ejemplo: ana@correo.com');
        return false;
    }

    mostrarOk(inputEmail, divError, divOk, '✔ Correo electrónico correcto.');

    return true;
}


/* ────────────────────── VALIDAR TELÉFONO ────────────────────────────
─────────────────────────────────────────────────────────────────────
───────────── Regla: exactamente 9 dígitos numéricos ──────────────────*/

function validarTelefono() {
    let inputTelefono = document.querySelector('#telefono');
    let telefono = inputTelefono.value;

    let divError =  document.getElementById('err-telefono');
    let divOk =  document.getElementById('ok-telefono');

    // Comprobar si el teléfono es vacío
    if (telefono === '') {
        mostrarError(inputTelefono, divError, divOk, 'El teléfono es obligatorio.');
        return false;
    }

    // isNaN comprueba si NO es un número
    if (isNaN(telefono)) {
        mostrarError(inputTelefono, divError, divOk, 'El teléfono solo puede contener números, sin espacios ni letras.');
        return false;
    }

    // Comprobar si el teléfono tiene exactamente 9 dígitos
    if (telefono.length !== 9) {
        mostrarError(inputTelefono, divError, divOk, 'El teléfono debe tener exactamente 9 dígitos. Tiene ' + telefono.length + '.');
        return false;
    }

    mostrarOk(inputTelefono, divError, divOk, '✔ Teléfono correcto.');

    return true;
}


/* ────────────────────── VALIDAR EDAD ────────────────────────────
─────────────────────────────────────────────────────────────────────
───────────── Regla: número entre 18 y 99 ──────────────────*/

function validarEdad() {
    let inputEdad = document.querySelector('#edad');
    let edad = inputEdad.value;

    let divError =  document.getElementById('err-edad');
    let divOk =  document.getElementById('ok-edad');

    // Comprobar si el teléfono es vacío
    if (edad === '') {
        mostrarError(inputEdad, divError, divOk, 'La edad es obligatoria.');
        return false;
    }

    // isNaN comprueba si NO es un número
    if (isNaN(edad)) {
        mostrarError(inputEdad, divError, divOk, 'La edad debe ser un número. Ejemplo: 35');
        return false;
    }

    let numero = parseInt(edad);

    // Comprobar si la edad es menor a 18 años
    if (numero < 18) {
        mostrarError(inputEdad, divError, divOk, 'Debe ser mayor de 18 años para registrarse.');
        return false;
    }

    // Comprobar si la edad es mayor a 99 años
    if (numero > 99) {
        mostrarError(inputEdad, divError, divOk, 'Por favor, introduzca una edad válida (máximo 99).');
        return false;
    }

    mostrarOk(inputEdad, divError, divOk, '✔ Edad correcta.');
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
