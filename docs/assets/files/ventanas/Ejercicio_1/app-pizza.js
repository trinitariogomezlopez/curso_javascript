/*
    PARTE_1: Añadir el evento click al botón Enviar para enviar el nombre de la pizza a la página madre.
*/

let btnEnviar = document.querySelector("#enviar");

btnEnviar.addEventListener("click", function () {
    var texto = document.getElementById('campoPizza').value;

    // Enviar el dato a la ventana madre
    window.opener.postMessage({ tipo: 'pizza', valor: texto }, '*');

    window.close();
});

