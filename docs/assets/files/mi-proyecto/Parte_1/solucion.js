/* ══════════════════════════════════════════
   SESIÓN 1: BOTONES DEL MENÚ DE NAVEGACIÓN
══════════════════════════════════════════ */
/*
    ENUNCIADO: 
            1) Se deben recorrer todos los botones (variable 'botones'). Para cada botón, añadir un evento que se ejecutará cuando se pase el ratón por encima. 
            Cuando se ejecute el evento, se añadirá la clase "resalto" al botón sobre el que se pasa el ratón.

            2) Se deben recorrer todos los botones (variable 'botones'). Para cada botón, añadir un evento que se ejecutará cuando el ratón salga del botón. 
            Cuando se ejecute el evento, se eliminará la clase CSS "resalto" del botón del cual sale el ratón.

            3) Se deben recorrer todos los botones (variable 'botones')y eliminar la clase CSS llamada 'seleccionado' de todos los botones.
            Finalmente, en el botón sobre el que se ha hecho click, se añadirá la clase CSS llamada 'seleccionado'.
*/

let botones = document.querySelectorAll(".menu");

let i = 0, j = 0;
while (i < botones.length) {
    botones[i].addEventListener("mouseover", function () {
        this.classList.add("resalto");
    })
    i++;
}

i = 0;
while (i < botones.length) {
    botones[i].addEventListener("mouseout", function () {
        this.classList.remove("resalto");
    })
    i++;
}

i = 0;
while (i < botones.length) {
    botones[i].addEventListener("click", function () {
        j = 0;
        while (j < botones.length) {
            botones[j].classList.remove("seleccionado");
            j++;
        }
        this.classList.add("seleccionado");
    })
    i++;
}



/* ══════════════════════════════════════════
       SECCIÓN 2: CARRUSEL DE MENSAJES
    ══════════════════════════════════════════ */
const carrusel = document.querySelector('#carrusel');
const flechaIzq = document.querySelector('#flechaIzq');
const flechaDer = document.querySelector('#flechaDer');


let indice = 0;
const totalSlides = 3;

/*
    ENUNCIADO: Asignar un evento a la variable flechaIzq (la variable flechaIzq se corresponde al elemento (botón) con id="flechaIzq") de forma que cuando se haga 
    click al botón, se pase al mensaje anterior. 
    Para pasar de mensaje se debe emplear la propiedad 'style.transform = "translateX(-" + (indice * 100) + "%)" en la variable 'carrusel'.
*/
flechaIzq.addEventListener('click', function () {
    if (indice <= 0) {
        indice = (totalSlides - 1);
    }
    else {
        indice--;
    }

    carrusel.style.transform = "translateX(-" + (indice * 100) + "%)";
});


/*
    ENUNCIADO: Asignar un evento a la variable flechaDer (la variable flechaDer se corresponde al elemento (botón) con id="flechaDer") de forma que cuando se haga 
    click al botón, se pase al mensaje siguiente. 
    Para pasar de mensaje se debe emplear la propiedad 'style.transform = "translateX(-" + (indice * 100) + "%)" en la variable 'carrusel'.
*/
indice = 0;
flechaDer.addEventListener('click', function () {
    if (indice === (totalSlides - 1)) {
        indice = 0;
    }
    else {
        indice++;
    }

    carrusel.style.transform = "translateX(-" + (indice * 100) + "%)";
});


/*
    ENUNCIADO: automatizar el carrusel para que los mensajes pasen cada 5 segundos hacia la derecha;
*/
indice
setInterval(function () {
    if (slideActual === (totalSlides - 1)) {
        slideActual = 0;
    }
    else {
        slideActual++;
    }

    carrusel.style.transform = "translateX(-" + (slideActual * 100) + "%)";
}, 5000);


/* ══════════════════════════════════════════
   SECCIÓN 3: TARJETAS — TOOLTIP CON RATÓN
══════════════════════════════════════════ */
/*
    ENUNCIADO: Recuperar todos los elementos que contengan la clase = "tarjeta". 

                1) Recorrer todas las tarjetas y asignar a cada tarjeta un evento que se ejecutará cuando se pase el ratón por encima de una tarjeta. 
                   Cuando se ejecute el evento se aplicarán los siguientes estilos:
                    this.style.borderColor = '#c8a96e';
                    this.style.transform = 'translateY(-6px)';
                    this.style.boxShadow = '0 10px 30px rgba(200,169,110,0.15)';

                2) Recorrer todas las tarjetas y asignar a cada tarjeta un evento que se ejecutará cuando el ratón salga de la tarjeta. 
                   Cuando se ejecute el evento se aplicarán los siguientes estilos: 
                    this.style.borderColor = 'transparent';
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = 'none';
*/

let tarjetas = document.querySelectorAll('.tarjeta');
i = 0;

while (i < tarjetas.length) 
{
    tarjetas[i].addEventListener('mouseover', function () {
        this.style.borderColor = '#c8a96e';
        this.style.transform = 'translateY(-6px)';
        this.style.boxShadow = '0 10px 30px rgba(200,169,110,0.15)';
    });

    tarjetas[i].addEventListener('mouseout', function () {
        this.style.borderColor = 'transparent';
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });

    i++;
}




/* ══════════════════════════════════════════
   SECCIÓN 4: BOTONES PRINCIPALES
══════════════════════════════════════════ */
/*
    ENUNCIADO: 

                1) Crear un evento y asignarlo a la variable 'btnReservar'. 
                   Cuando se pulse sobre el botón se mostrará en la propiedad 'textContent' de la variable 'mensajeBtn' el siguiente mensaje : ¡Reserva realizada! Nos ponemos en contacto pronto.

                2) Crear un evento y asignarlo a la variable 'btnPortfolio'. 
                   Cuando se pulse sobre el botón se mostrará en la propiedad 'textContent' de la variable 'mensajeBtn' el siguiente mensaje : Abriendo portfolio... ¡Gracias por tu interés!.

                3) Crear un evento y asignarlo a la variable 'btnCancelar'. 
                   Cuando se pulse sobre el botón se mostrará en la propiedad 'textContent' de la variable 'mensajeBtn' el siguiente mensaje : Acción cancelada.
*/

const mensajeBtn = document.querySelector('#mensaje-btn');
const btnReservar = document.querySelector('#btnReservar');
const btnPortfolio = document.querySelector('#btnPortfolio');
const btnCancelar = document.querySelector('#btnCancelar');

btnReservar.addEventListener('click', function () {
    mensajeBtn.textContent = '¡Reserva realizada! Nos ponemos en contacto pronto.';
});

btnPortfolio.addEventListener('click', function () {
    mensajeBtn.textContent = 'Abriendo portfolio... ¡Gracias por tu interés!';
});

btnCancelar.addEventListener('click', function () {
    mensajeBtn.textContent = 'Acción cancelada.';
});




/* ══════════════════════════════════════════
    SECCIÓN 5: DESPLEGABLE
══════════════════════════════════════════ */
/*
    ENUNCIADO: 
                1) Crear un evento y asignarlo a la variable 'desplegable'. 
                   Cuando se pulse sobre el botón se añadirá la clase CSS 'abierto' a la variable 'lista'. Emplear el método 'toggle'.

                2) Crear un evento y asignarlo a la variable 'desplegable'. 
                   Cuando el ratón pase por encima se añadirá la clase CSS 'hover' a la variable 'desplegable'.

                3) Crear un evento y asignarlo a la variable 'desplegable'. 
                   Cuando el ratón salga se eliminará la clase CSS 'hover' a la variable 'desplegable'.

*/

document.querySelector("#link").addEventListener("click", function () {
    let lista = document.querySelector("#lista");
    lista.classList.toggle("abierto");
});

document.querySelector("#link").addEventListener("mouseover", function () {
    this.classList.add("hover");
});

document.querySelector("#link").addEventListener("mouseout", function () {
    this.classList.remove("hover");
});
