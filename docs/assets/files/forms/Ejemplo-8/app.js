/* ──────────── Función principal: valida todos los campos ────────────
──────────────────────────────────────────────────────────────────────*/
let btnEnviar = document.querySelector("#btn-enviar");

btnEnviar.addEventListener("click", function() {

    // Validamos cada campo y guardamos si hay errores
    let okNombre = validarNombre();
    let okEmail = validarEmail();
    let okTelefono = validarTelefono();
    let okEdad = validarEdad();
    let okProvincia = validarProvincia();
    let okSexo = validarSexo();
    let okTerminos = validarTerminos();

    // Si todos son correctos, mostramos el mensaje de éxito
    if (okNombre === true && okEmail === true && okTelefono === true && okEdad === true && okProvincia === true && okSexo === true && okTerminos === true) {
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

    let divError = document.getElementById('err-nombre');
    let divOk = document.getElementById('ok-nombre');

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


/* ────────────────────── VALIDAR TELÉFONO ────────────────────────────
─────────────────────────────────────────────────────────────────────
───────────── Regla: exactamente 9 dígitos numéricos ──────────────────*/

function validarTelefono() {
    let inputTelefono = document.querySelector('#telefono');
    let telefono = inputTelefono.value;

    let divError = document.getElementById('err-telefono');
    let divOk = document.getElementById('ok-telefono');

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

    let divError = document.getElementById('err-edad');
    let divOk = document.getElementById('ok-edad');

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


/* ────────────────────── VALIDAR PROVINCIA ────────────────────────────
─────────────────────────────────────────────────────────────────────
───────────── Regla: debe seleccionar una opción ──────────────────*/

function validarProvincia() {
    let inputProvincia = document.querySelector('#provincia');
    let provincia = inputProvincia.value;

    let divError = document.getElementById('err-provincia');
    let divOk = document.getElementById('ok-provincia');

    // Comprobar si la provincia es vacía
    if (provincia === '') {
        mostrarError(inputProvincia, divError, divOk, 'Por favor, seleccione una provincia de la lista.');
        return false;
    }

    mostrarOk(inputProvincia, divError, divOk, '✔ Provincia seleccionada.');
    return true;
}



/* ──────────────────────────────── VALIDAR SEXO (radio buttons)────────────────────────────────────────────────
─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
───────────── Regla: Los radio no tienen .value directamente si no hay ninguno marcado. ────────────────────────────
─────────────────────Hay que recorrer todos los que tienen el mismo name y ver si alguno está marcado ──────────────*/

function validarSexo() {
    // Recoge todos los radio con name="sexo"
    let opciones = document.querySelectorAll('.sexo');
    let grupoRadio = document.getElementById('grupo-sexo');

    let divError = document.getElementById('err-sexo');
    let divOk = document.getElementById('ok-sexo');

    // Recorre cada radio y comprueba si está marcado
    let marcado = false;
    let i = 0;
    while (i < opciones.length) {
        if (opciones[i].checked) {
            marcado = true;
        }

        i++;
    }

    if (marcado === false) 
    {
        divError.textContent = '⚠ Por favor, seleccione una opción.';
        divError.style.display = 'block';
        divOk.style.display = 'none';
        return false;
    }
    else {
        divOk.textContent = 'Opción seleccionada correctamente.';
        divOk.style.display = 'block';
        divError.style.display = 'none';
        return true;
    }
}


/* ──────────────────────────────── VALIDAR TÉRMINOS (checkbox)─────────────────────────────────────────────────────────────────────────────────
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
───────────── Regla: Un checkbox solo tiene dos estados: marcado (.checked === true) o no marcado (.checked === false). ────────────────────────────*/
function validarTerminos() 
{
    let checkbox = document.querySelector('#terminos');
    let divError = document.getElementById('err-terminos');
    let divOk = document.getElementById('ok-terminos');

    if (checkbox.checked === false) {
        divError.textContent = '⚠ Debe aceptar los términos y condiciones para continuar.';
        divError.style.display = 'block';
        divOk.style.display = 'none';
        return false;
    }
    else {
        divOk.textContent = '✔ Términos aceptados.';
        divOk.style.display = 'block';
        divError.style.display = 'none';
        return true;
    }
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




