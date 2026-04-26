/* ══════════════════════════════════════════
   SESIÓN 1: BOTONES DEL MENÚ DE NAVEGACIÓN
══════════════════════════════════════════ */
/*
    ENUNCIADO: Recuperar los botones del menú de navegación. Los botones del menú de navegación tienen como clase la class="menu".
               Para cada botón recuperado añadir tres eventos:
                     1) El primer evento se ejecutará cuando se pase el ratón por encima del botón. Cuando se ejecute el evento, se añadirá la clase "resalto"
                        al botón sobre el que se pasa el ratón.
                     2) El segundo evento se ejecutará cuando el ratón salga del botón. Cuando se ejecute el evento, se eliminará la clase "resalto" del botón
                        del cual sale el ratón.
                     3) El tercer evento se ejecutará cuando se haga click sobre el botón. Al hacer click sobre un botón, primero se deberá eliminar la clase
                        CSS llamada 'seleccionado' de todos los botones, a continuación, en el botón sobre el que se ha hecho click, se añadirá la clase 
                        CSS llamada 'seleccionado'.
*/





/* ══════════════════════════════════════════
       SECCIÓN 2: CARRUSEL DE MENSAJES
    ══════════════════════════════════════════ */
const carrusel = document.querySelector('#carrusel');
const flechaIzq = document.querySelector('#flechaIzq');
const flechaDer = document.querySelector('#flechaDer');


let slideActual = 0;
const totalSlides = 3;

/*
    ENUNCIADO: Asignar un evento a la variable flechaIzq (la variable flechaIzq se corresponde al elemento (botón) con id="flechaIzq") de forma que cuando se haga 
    click al botón, se pase al mensaje anterior. Para pasar de mensaje se debe emplear la propiedad 'transform' = "translateX(-" + (slideActual * 100) + "%)".
    La propiedad transform pertenece a style.
*/



/*
    ENUNCIADO: Asignar un evento a la variable flechaDer (la variable flechaDer se corresponde al elemento (botón) con id="flechaDer") de forma que cuando se haga 
    click al botón, se pase al mensaje siguiente. Para pasar de mensaje se debe emplear la propiedad 'transform' = "translateX(-" + (slideActual * 100) + "%)".
    La propiedad transform pertenece a style.
*/



/*
    ENUNCIADO: automatizar el carrusel para que los mensajes pasen cada 5 segundos hacia la derecha;
*/
setInterval(function () {
    
}, 5000);


/* ══════════════════════════════════════════
   SECCIÓN 3: TARJETAS — TOOLTIP CON RATÓN
══════════════════════════════════════════ */
/*
    ENUNCIADO: Recuperar todos los elementos que contengan la clase = "tarjeta". 
               Para cada elemento recuperado añadir dos eventos:
                1) El primer evento se ejecutará cuando se pase el ratón por encima del elemento. Cuando se ejecute el evento se aplicarán los siguientes estilos:
                    this.style.borderColor = '#c8a96e';
                    this.style.transform = 'translateY(-6px)';
                    this.style.boxShadow = '0 10px 30px rgba(200,169,110,0.15)';
                2) El segundo evento se ejecutará cuando el ratón salga del elemento. Cuando se ejecute el evento se aplicarán los siguientes estilos:
                    this.style.borderColor = 'transparent';
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = 'none';
*/

let tarjetas = document.querySelectorAll('.tarjeta');
i = 0;






/* ══════════════════════════════════════════
   SECCIÓN 4: BOTONES PRINCIPALES
══════════════════════════════════════════ */
/*
    ENUNCIADO: Recuperar los botones que tengan los siguientes id: "btnReservar", "btnPortfolio", "btnCancelar". Cada botón se debe almacenar en una variable.
               Recuperar el elemento div que tenga el id="mensaje-btn" para mostrar diferentes mensajes de texto.

               Para cada botón recuperado añadir un evento que se ejecute cuando se haga click sobre él:
                1) Cuando se pulse sobre el botón con id="btnReservar", el div con id="mensaje-btn" mostrará el siguiente mensaje: ¡Reserva realizada! Nos ponemos en contacto pronto.
                2) Cuando se pulse sobre el botón con id="btnPortfolio", el div con id="mensaje-btn" mostrará el siguiente mensaje: Abriendo portfolio... ¡Gracias por tu interés!.
                3) Cuando se pulse sobre el botón con id="btnCancelar", el div con id="mensaje-btn" mostrará el siguiente mensaje: Acción cancelada.
*/






/* ══════════════════════════════════════════
    SECCIÓN 5: DESPLEGABLE
══════════════════════════════════════════ */
/*
    ENUNCIADO: Sobre el botón con id="link", añadir tres eventos:
                1) El primer evento se ejecutará cuando se haga click sobre el botón. Cuando se haga click sobre el botón se realizarán dos acciones:
                        a) Recuperar el elemento con id="lista"
                        b) Añadir al elemento con id="lista" la clase CSS 'abierto'. (Emplear toggle)
                2) El segundo evento se ejecutará cuando se pase el cursor por encima del botón con id="link". En ese caso se añadirá la clase CSS 'hover'
                   al botón.
                3) El tercer evento se ejecutará cuando el cursor salga del botón con id="link". En ese caso se eliminará la clase CSS 'hover'.
                   al botón.

*/


