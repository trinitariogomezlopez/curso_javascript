/* ──────────── Función principal: ────────────────────────────────────────────────────────────────────────────────────────────────────────────────
────────────────────TAREA 1: validar todos los campos ─────────────────────────────────────────────────────────────────────────────────────────────
────────────────────TAREA 2: Si los campos son válidos, asignar los datos introducidos en: res-nombre, res-email, res-asunto, res-mensaje ─────────
─────────────────────────────Y mostrar los resultados con: document.querySelector('#resultado').style.display = 'block' ───────────────────────────────
─────────────────────────────Sino, ocultar los resultados: document.querySelector('#resultado').style.display = 'none' ───────────────────────────*/


/* ──────────── Validaciones: 
────────────────────Nombre: no puede estar vacío ni ser menor a 3 caracteres───────────────────────────────────────────────
────────────────────Email: debe tener un formato correcto──────────────────────────────────────────────────────────────────
────────────────────Asunto: no puede estar vacío───────────────────────────────────────────────────────────────────────────
────────────────────Mensaje: no puede estar vacío ni ser menor a 10 caracteres────────────────────────────────────────────*/




// ── Función principal ──
function validarFormulario() {

    let okNombre = validarNombre();
    let okEmail = validarEmail();
    let okAsunto = validarAsunto();
    let okMensaje = validarMensaje();

    if (okNombre && okEmail && okAsunto && okMensaje) {

        // Leer los valores de los campos
        let nombre = document.querySelector('#nombre').value;
        let email = document.querySelector('#email').value;
        let asunto = document.querySelector('#asunto').value;
        let mensaje = document.querySelector('#mensaje').value;

        // Escribirlos en la caja de resultado
        document.querySelector('#res-nombre').textContent = nombre;
        document.querySelector('#res-email').textContent = email;
        document.querySelector('#res-asunto').textContent = asunto;
        document.querySelector('#res-mensaje').textContent = mensaje;

        // Mostrar la caja de resultado
        document.querySelector('#resultado').style.display = 'block';

    } else {

        // Ocultar la caja si hay errores
        document.querySelector('#resultado').style.display = 'none';
    }
}


/* ──────────────────────────────── VALIDAR NOMBRE─────────────────────────────────────────────────────────────
───────────── Regla: El nombre no puede ser vacío y debe más de 3 caracteres ──────────────────────────────────*/
function validarNombre() {
    let inputNombre = document.querySelector('#nombre');
    let nombre = inputNombre.value;

    let divError = document.getElementById('err-nombre');
    let divOk = document.getElementById('ok-nombre');

    if (nombre === '') {
        mostrarError(inputNombre, divError, divOk, 'El nombre es obligatorio.');
        return false;
    }
    if (nombre.length < 3) {
        mostrarError(inputNombre, divError, divOk, 'El nombre debe tener al menos 3 letras.');
        return false;
    }

    mostrarOk(inputNombre, divError, divOk, '✔ Correcto.');
    return true;
}


/* ──────────────────────────────── VALIDAR EMAIL─────────────────────────────────────────────────────────────
───────────── Regla: El email no puede ser vacío y debe tener un formato correcto ────────────────────────────*/
function validarEmail() {
    let inputEmail = document.querySelector('#email');
    let email = inputEmail.value;

    let divError = document.getElementById('err-email');
    let divOk = document.getElementById('ok-email');

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


/* ──────────────────────────────── VALIDAR ASUNTO────────────────────────────────────────────────────────────
───────────── Regla: El texto no puede ser vacío. ────────────────────────────────────────────────────────────*/
function validarAsunto() {

    let inputAsunto = document.querySelector('#asunto');
    let asunto = inputAsunto.value;

    let divError = document.getElementById('err-asunto');
    let divOk = document.getElementById('ok-asunto');

    if (asunto === '') {
        mostrarError(inputAsunto, divError, divOk, 'El asunto es obligatorio.');
        return false;
    }

    mostrarOk(inputAsunto, divError, divOk, '✔ Correcto.');
    return true;
}


/* ──────────────────────────────── VALIDAR Mensaje───────────────────────────────────────────────────────────
──────────────────────────────────────────────────────────────────────────────────────────────────────────────
───────────── Regla: El texto no puede ser vacío ni tener menos de 10 caracteres. ────────────────────────────*/
function validarMensaje() {
    let inputMensaje = document.querySelector('#mensaje');
    let mensaje = inputMensaje.value;

    let divError = document.getElementById('err-mensaje');
    let divOk = document.getElementById('ok-mensaje');

    if (mensaje === '') {
        mostrarError(inputMensaje, divError, divOk, 'El mensaje es obligatorio.');
        return false;
    }

    if (mensaje.length < 10) {
        mostrarError(inputMensaje, divError, divOk, 'El mensaje es demasiado corto. Escriba al menos 10 caracteres.');
        return false;
    }

    mostrarOk(inputMensaje, divError, divOk, '✔ Correcto.');
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