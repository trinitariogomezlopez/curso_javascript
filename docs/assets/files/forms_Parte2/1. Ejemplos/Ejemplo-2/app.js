
/* ══════════════════════════════════════════════════════════════════════════════════════════════
                                BLOQUE 1 — SELECT Destino del viaje
═══════════════════════════════════════════════════════════════════════════════════════════════════ */
let destino = document.getElementById('sel-destino');

destino.addEventListener("change", function () {
    // Ocultar todos los paneles de destino
    document.getElementById('panel-paris').classList.remove('visible');
    document.getElementById('panel-roma').classList.remove('visible');
    document.getElementById('panel-cancun').classList.remove('visible');

    // Mostrar solo el del destino elegido
    if (this.value === 'paris') {
        document.getElementById('panel-paris').classList.add('visible');
    }

    if (this.value === 'roma') {
        document.getElementById('panel-roma').classList.add('visible');
    }

    if (this.value === 'cancun') {
        document.getElementById('panel-cancun').classList.add('visible');
    }
})



/*  ══════════════════════════════════════════════════════════════════════════════════════════════
                                    BLOQUE 2 — RADIO Tipo de alojamiento
    ═══════════════════════════════════════════════════════════════════════════════════════════════════ */
let i = 0;
let radios = document.querySelectorAll('.alojamiento');

while (i < radios.length) {
    radios[i].addEventListener("change", function () {
        // Ocultar todos los paneles de alojamiento
        document.getElementById('panel-hotel').classList.remove('visible');
        document.getElementById('panel-apartamento').classList.remove('visible');
        document.getElementById('panel-camping').classList.remove('visible');

        // Mostrar solo el alojamiento elegido
        if (this.value === 'hotel') {
            document.getElementById('panel-hotel').classList.add('visible');
        }

        if (this.value === 'apartamento') {
            document.getElementById('panel-apartamento').classList.add('visible');
        }

        if (this.value === 'camping') {
            document.getElementById('panel-camping').classList.add('visible');
        }
    });

    i++;
}


/* ══════════════════════════════════════════════════════════════════════════════════════════════
                                    BOTÓN ENVIAR
═══════════════════════════════════════════════════════════════════════════════════════════════════ */

let btnEnviar = document.querySelector("#enviarFormulario");

btnEnviar.addEventListener("click", function () {
    // ────────────────────── Leer SELECT ───────────────────────────
    // ──────────────────────────────────────────────────────────────
    var selDestino = document.getElementById('sel-destino');
    //var destino = selDestino.options[selDestino.selectedIndex].text;
    var valorDest = selDestino.value;

    document.getElementById('res-destino').textContent = destino;



    // ─────────── Leer el hotel según el destino seleccionado ──────
    // ──────────────────────────────────────────────────────────────
    var hotelDestino = '';
    if (valorDest === 'paris') {
        document.getElementById('res-destino').textContent = "París, Francia";
        document.getElementById('res-hotel-destino').textContent = document.getElementById('hotel-paris').value;
    }

    if (valorDest === 'roma') {
        document.getElementById('res-destino').textContent = "Roma, Italia";
        document.getElementById('res-hotel-destino').textContent = document.getElementById('hotel-roma').value;
    }

    if (valorDest === 'cancun') {
        document.getElementById('res-destino').textContent = "Cancún, México";
        document.getElementById('res-hotel-destino').textContent = document.getElementById('hotel-cancun').value;
    }



    // ────────────────────────── Leer RADIO ────────────────────────
    // ──────────────────────────────────────────────────────────────
    let i = 0;
    let valorAloj = '';
    let radiosMarcados = document.querySelectorAll('.alojamiento');

    while (i < radiosMarcados.length) {
        if (radiosMarcados[i].checked) {
            valorAloj = radiosMarcados[i].value;
        }

        i++;
    }

    // Leer el detalle del alojamiento según el radio marcado
    if (valorAloj === 'hotel') {
        document.getElementById('res-alojamiento').textContent = "🏨 Hotel";
        document.getElementById('res-detalle-aloj').textContent = document.getElementById('num-habitaciones').value + ' habitaciones';
    }

    if (valorAloj === 'apartamento') {
        document.getElementById('res-alojamiento').textContent = "🏠 Apartamento";
        document.getElementById('res-detalle-aloj').textContent = document.getElementById('num-dormitorios').value + ' dormitorios';
    }

    if (valorAloj === 'camping') {
        document.getElementById('res-alojamiento').textContent = "⛺ Camping";
        document.getElementById('res-detalle-aloj').textContent = document.getElementById('num-parcela').value + ' habitaciones';
    }



    // ────────────────────────── Desplazar la página hacia el resultado ────────────────────────
    // ──────────────────────────────────────────────────────────────────────────────────────────
    document.getElementById('resultado').scrollIntoView({ behavior: 'smooth' });
});

