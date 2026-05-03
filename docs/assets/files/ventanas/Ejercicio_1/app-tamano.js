/*
    PARTE_1: Añadir el evento click al botón Enviar para enviar el tamaño de la pizza a la página madre.
*/


let btnEnviar = document.querySelector("#enviar");

btnEnviar.addEventListener("click", function () {
    var texto = document.getElementById('campoTamano').value;

    // Enviar el dato a la ventana madre
    window.opener.postMessage({ tipo: 'tamano', valor: texto }, '*');

    window.close();
});
