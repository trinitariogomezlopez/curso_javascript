/* ──────────── Función principal: ────────────────────────────────────────────────────────────────────────────────────────────────────────────────
────────────────────TAREA 1: validar todos los campos ─────────────────────────────────────────────────────────────────────────────────────────────
────────────────────TAREA 2: Si los campos son válidos, asignar los datos introducidos en: res-nombre, res-email, res-asunto, res-mensaje ─────────


/* ──────────── Validaciones: 
────────────────────Nombre: no puede estar vacío ni ser menor a 3 caracteres───────────────────────────────────────────────
────────────────────Email: debe tener un formato correcto──────────────────────────────────────────────────────────────────
────────────────────Asunto: no puede estar vacío───────────────────────────────────────────────────────────────────────────
────────────────────Mensaje: no puede estar vacío ni ser menor a 10 caracteres────────────────────────────────────────────*/







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