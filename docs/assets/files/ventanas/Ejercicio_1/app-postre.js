/*
    PARTE_1: Añadir el evento click al botón Enviar para enviar el nombre del postre a la página madre.
*/

let btnEnviar = document.querySelector("#enviar");

btnEnviar.addEventListener("click", function () {
    var texto = document.getElementById('campoPostre').value;

    // Enviar el dato a la ventana madre
    window.opener.postMessage({ tipo: 'postre', valor: texto }, '*');

    window.close();
});