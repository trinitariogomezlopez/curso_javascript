
// ══════════════════════════════════════════════════════════════════════
            // EJEMPLO 1 — EVENTO 'change' al elemento SELECT
// ══════════════════════════════════════════════════════════════════════

let idioma = document.querySelector("#sel-idioma");

idioma.addEventListener("change", function () {
    // Primero ocultamos todos los paneles de idioma. 
    // Para ello es necesario eliminar la clase CSS 'visible' de los paneles: panel-es, panel-en, panel-fr
    document.getElementById('panel-es').classList.remove('visible');
    document.getElementById('panel-en').classList.remove('visible');
    document.getElementById('panel-fr').classList.remove('visible');

    // Luego mostramos solo el del idioma elegido
    if (this.value === 'es') {
        document.getElementById('panel-es').classList.add('visible');
    }
    if (this.value === 'en') {
        document.getElementById('panel-en').classList.add('visible');
    }
    if (this.value === 'fr') {
        document.getElementById('panel-fr').classList.add('visible');
    }
});




// ══════════════════════════════════════════════════════════════════════
            // EJEMPLO 2 — EVENTO 'change' al elemento RADIO
// ══════════════════════════════════════════════════════════════════════


let i = 0;
var radios = document.querySelectorAll('.pago'); //Obtenemos todos los radios

while (i < radios.length) {

    //Recorremos cada radio y le asignamos el evento 'change'
    radios[i].addEventListener("change", function () 
    {
        // Ocultar todos los paneles de pago
        // Para ello es necesario eliminar la clase CSS 'visible' de los paneles: panel-tarjeta, panel-transferencia, panel-efectivo
        document.getElementById('panel-tarjeta').classList.remove('visible');
        document.getElementById('panel-transferencia').classList.remove('visible');
        document.getElementById('panel-efectivo').classList.remove('visible');

        // Mostrar el panel a partir del value del radio marcado
        if (this.value === 'tarjeta') {
            document.getElementById('panel-tarjeta').classList.add('visible');
        }
        if (this.value === 'transferencia') {
            document.getElementById('panel-transferencia').classList.add('visible');
        }
        if (this.value === 'efectivo') {
            document.getElementById('panel-efectivo').classList.add('visible');
        }
    });

    i++;
}



// ══════════════════════════════════════════════════════════════════════
            // EJEMPLO 3 — EVENTO 'change' al elemento CHECKBOX
// ══════════════════════════════════════════════════════════════════════

// Comprobamos cada CHECK por separado para mostrar u ocultar el panel correspondiente
let checkEnvio = document.querySelector("#ch-envio");
let checkRegalo = document.querySelector("#ch-regalo");
let checkSeguro = document.querySelector("#ch-seguro");

checkEnvio.addEventListener("change", function () {
    if (this.checked) {
        document.getElementById('panel-envio').classList.add('visible');
    } else {
        document.getElementById('panel-envio').classList.remove('visible');
    }
});

checkRegalo.addEventListener("change", function () {
    if (this.checked) {
        document.getElementById('panel-regalo').classList.add('visible');
    } else {
        document.getElementById('panel-regalo').classList.remove('visible');
    }
});

checkSeguro.addEventListener("change", function () {
    if (this.checked) {
        document.getElementById('panel-seguro').classList.add('visible');
    } else {
        document.getElementById('panel-seguro').classList.remove('visible');
    }
});
