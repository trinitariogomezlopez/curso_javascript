
let btnLeerDatosTexto = document.querySelector("#leer-datos-texto");
let btnLeerDatosNumero = document.querySelector("#leer-datos-numero");
let btnLeerDatosFecha = document.querySelector("#leer-datos-fecha");
let btnLeerDatosSeleccion = document.querySelector("#leer-datos-seleccion");
let btnLeerDatosOtros = document.querySelector("#leer-datos-otros");

/* ────────────────────── MOSTRAR DATOS DE TIPO TEXTO ────────────────────────────
──────────────────────────────────────────────────────────────────────────────────*/
btnLeerDatosTexto.addEventListener("click", function(){
    let texto = document.getElementById('texto').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let area = document.getElementById('area').value;

    console.group('📋 DATOS DEL FORMULARIO');

    console.log('--- Textos ---');
    console.log('Texto:      ', texto);
    console.log('Email:      ', email);
    console.log('Contraseña: ', password);
    console.log('Área texto: ', area);
});



/* ────────────────────── MOSTRAR DATOS DE TIPO NÚMERO ────────────────────────────
──────────────────────────────────────────────────────────────────────────────────*/
btnLeerDatosNumero.addEventListener("click", function(){
    let numero = document.getElementById('numero').value;

    console.group('📋 DATOS DEL FORMULARIO');

    console.log('--- Números ---');
    console.log('Número: ', numero);
});


/* ────────────────────── MOSTRAR DATOS DE TIPO FECHA ────────────────────────────
──────────────────────────────────────────────────────────────────────────────────*/
btnLeerDatosFecha.addEventListener("click", function(){
    let fecha = document.getElementById('fecha').value;

    console.group('📋 DATOS DEL FORMULARIO');

    console.log('--- Fechas y horas ---');
    console.log('Fecha: ', fecha);
});



/* ────────────────────── MOSTRAR DATOS DE TIPO SELECCIÓN ────────────────────────────
─────────────────────────────────────────────────────────────────────────────────────*/
btnLeerDatosSeleccion.addEventListener("click", function(){
    let i = 0;

    // Elemento 'select'
    let opcionLista = document.getElementById('lista').value;

    // Elemento 'checkbox'
    let checksMarcados = "";
    let checks = document.querySelectorAll('.check');
    while(i < checks.length) {
        if (checks[i].checked) {
            checksMarcados = checksMarcados + " - " + checks[i].value;
        }

        i++;
    }

    // Elemento 'radio'
    let radioOption = document.querySelector('input[name="radio"]:checked');

    console.group('📋 DATOS DEL FORMULARIO');

    console.log('--- Selección ---');
    console.log('Lista desplegable: ', opcionLista);
    console.log('Radio marcado:     ', radioOption.value);
    console.log('Checks marcados:   ', checksMarcados);
});




/* ────────────────────── MOSTRAR DATOS OTROS ────────────────────────────────────────
─────────────────────────────────────────────────────────────────────────────────────*/
btnLeerDatosOtros.addEventListener("click", function(){
    var color = document.getElementById('color').value;

    console.group('📋 DATOS DEL FORMULARIO');

    console.log('--- Otros ---');
    console.log('Color: ', color);
});




