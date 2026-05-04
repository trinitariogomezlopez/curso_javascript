/* ──────────── Función principal: ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
────────────────────TAREA 1: validar todos los campos ──────────────────────────────────────────────────────────────────────────────────────────────────────────────
────────────────────TAREA 2: Si los campos son válidos, asignar los datos introducidos en: res-nombre, res-telefono, res-producto, res-cantidad, res-envio ─────────
─────────────────────────────Y mostrar los resultados: document.getElementById('resultado').style.display = 'block' ────────────────────────────────────────────────
─────────────────────────────Sino, ocultar los resultados: document.getElementById('resultado').style.display = 'none' ─────────────────────────────────────────────*/


/* ──────────── Validaciones: 
────────────────────Nombre: no puede estar vacío ni ser menor a 3 caracteres────────────────────────────────────
────────────────────Teléfono: no puede ser vacío, no puede tener letras y debe tener 9 dígitos──────────────────
────────────────────Producto: no puede estar vacío──────────────────────────────────────────────────────────────
────────────────────Cantidad: no puede estar vacío, no puede tener letras, su valor debe estar entre 1 y 99─────
────────────────────Tipo Envío: no puede ser vacío──────────────────────────────────────────────────────────────*/


// ── Función principal ──
function validarFormulario() {

    let okNombre = validarNombre();
    let okTelefono = validarTelefono();
    let okProducto = validarProducto();
    let okCantidad = validarCantidad();
    let okEnvio = validarEnvio();

    if (okNombre && okTelefono && okProducto && okCantidad && okEnvio) {

        // Leer los valores
        let nombre = document.getElementById('nombre').value;
        let telefono = document.getElementById('telefono').value;
        let producto = document.getElementById('producto').value;
        let cantidad = document.getElementById('cantidad').value;

        // Leer el radio marcado
        let opciones = document.querySelectorAll('.envio');
        let envio = '';
        let i = 0;

        while(i < opciones.length) {
            if (opciones[i].checked) {
                envio = opciones[i].value;
            }

            i++;
        }

        // Escribir en la caja de resultado
        document.getElementById('res-nombre').textContent = nombre;
        document.getElementById('res-telefono').textContent = telefono;
        document.getElementById('res-producto').textContent = producto;
        document.getElementById('res-cantidad').textContent = cantidad + ' unidades';
        document.getElementById('res-envio').textContent = envio;

        // Mostrar la caja
        document.getElementById('resultado').style.display = 'block';

    } else {

        document.getElementById('resultado').style.display = 'none';
    }
}


/* ──────────────────────────────── VALIDAR NOMBRE─────────────────────────────────────────────────────────────
───────────── Regla: El nombre no puede ser vacío y debe más de 3 caracteres ──────────────────────────────────*/

function validarNombre() 
{
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

/* ──────────────────────────────── VALIDAR TELÉFONO─────────────────────────────────────────────────────────────
───────────── Regla: El teléfono no puede ser vacío, debe ser un número y debe tener exactamente 9 dígitos ──────*/

function validarTelefono() {
    let inputTelefono = document.querySelector('#telefono');
    let telefono = inputTelefono.value;

    let divError = document.getElementById('err-telefono');
    let divOk = document.getElementById('ok-telefono');

    if (telefono === '') {
         mostrarError(inputTelefono, divError, divOk, 'El teléfono es obligatorio.');
        return false;
    }
    if (isNaN(telefono)) {
        mostrarError(inputTelefono, divError, divOk, 'El teléfono solo puede contener números.');
        return false;
    }

    if (telefono.length !== 9) {
        mostrarError(inputTelefono, divError, divOk, 'El teléfono debe tener exactamente 9 dígitos. Tiene ' + telefono.length + '.');
        return false;
    }

    mostrarOk(inputTelefono, divError, divOk, '✔ Correcto.');
    
    return true;
}


/* ──────────────────────────────── VALIDAR PRODUCTO─────────────────────────────────────────────────────────────
──────────────────────── Regla: El producto no puede ser vacío ──────────────────────────────────────────────────*/

// ── VALIDAR PRODUCTO ──
function validarProducto() {
    let inputProducto = document.querySelector('#producto');
    let producto = inputProducto.value;

    let divError = document.getElementById('err-producto');
    let divOk = document.getElementById('ok-producto');

    if (producto === '') {
        mostrarError(inputProducto, divError, divOk, 'Por favor, seleccione un producto.');
        return false;
    }
    mostrarOk(inputProducto, divError, divOk, '✔ Correcto.');
    return true;
}


/* ──────────────────────────────── VALIDAR CANTIDAD─────────────────────────────────────────────────────────────
──────────── Regla: La cantidad no puede ser vacío, debe ser un número y tener un valor entre 1 y 99 ────────────*/

function validarCantidad() {
    let inputCantidad = document.querySelector('#cantidad');
    let cantidad = inputCantidad.value;

    let divError = document.getElementById('err-cantidad');
    let divOk = document.getElementById('ok-cantidad');

    if (cantidad === '') {
        mostrarError(inputCantidad, divError, divOk, 'La cantidad es obligatoria.');
        return false;
    }
    if (isNaN(cantidad)) {
        mostrarError(inputCantidad, divError, divOk, 'La cantidad debe ser un número.');
        return false;
    }
    var numero = parseInt(cantidad);
    if (numero < 1) {
        mostrarError(inputCantidad, divError, divOk, 'La cantidad mínima es 1.');
        return false;
    }
    if (numero > 99) {
        mostrarError(inputCantidad, divError, divOk, 'La cantidad máxima por pedido es 99.');
        return false;
    }

    mostrarOk(inputCantidad, divError, divOk, '✔ Correcto.');
    return true;
}


// ── VALIDAR ENVÍO (radio buttons) ──
/* ──────────────────────────────── VALIDAR ENVÍO ───────────────────────
───────────────────────── Regla: El envío no puede ser vacío ────────────*/

function validarEnvio() {
    let opciones = document.querySelectorAll('.envio');
    let divError = document.getElementById('err-envio');
    let divOk = document.getElementById('ok-envio');

    let marcado = false;
    let i = 0;

    while(i < opciones.length){
        if (opciones[i].checked) {
            marcado = true;
        }

        i++;
    }
    

    if (marcado === false) {
        divError.textContent = '⚠ Por favor, seleccione el tipo de envío.';
        divError.style.display = 'block';
        divOk.style.display = 'none';
        return false;
    }
    else{
        divOk.textContent = '✔ Tipo de envío seleccionado.';
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