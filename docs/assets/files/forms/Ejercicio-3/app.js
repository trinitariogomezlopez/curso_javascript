/* ──────────── Función principal: ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
────────────────────TAREA 1: validar todos los campos ──────────────────────────────────────────────────────────────────────────────────────────────────────────────
────────────────────TAREA 2: Si los campos son válidos, asignar los datos introducidos en: res-nombre, res-telefono, res-producto, res-cantidad, res-envio ─────────



/* ──────────── Validaciones: 
────────────────────Nombre: no puede estar vacío ni ser menor a 3 caracteres────────────────────────────────────
────────────────────Teléfono: no puede ser vacío, no puede tener letras y debe tener 9 dígitos──────────────────
────────────────────Producto: no puede estar vacío──────────────────────────────────────────────────────────────
────────────────────Cantidad: no puede estar vacío, no puede tener letras, su valor debe estar entre 1 y 99─────
────────────────────Tipo Envío: no puede ser vacío──────────────────────────────────────────────────────────────*/







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