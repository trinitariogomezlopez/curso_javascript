/*
    PARTE_1: Añadir el evento click al botón Enviar para enviar el tamaño a la página madre.
*/

let nombreEleccion = null;

let individual = document.querySelector("#individual");
let mediana = document.querySelector("#mediana");
let grande = document.querySelector("#grande");
let familiar = document.querySelector("#familiar");

individual.addEventListener("click", function(){
    elegir(this, 'Individual (25 cm)');
});

mediana.addEventListener("click", function(){
    elegir(this, 'Mediana (33 cm)');
});

grande.addEventListener("click", function(){
    elegir(this, 'Grande (40 cm)');
});

familiar.addEventListener("click", function(){
    elegir(this, 'Familiar (50 cm)');
});



function elegir(opcion, nombre) 
{
    let opciones = document.querySelectorAll(".opcion");
    let i = 0;

    while(i < opciones.length)
    {
        opciones[i].classList.remove("seleccionada");
        i++;
    }

    opcion.classList.add("seleccionada");

    nombreEleccion = nombre;

    document.querySelector('#btnConfirmar').disabled = false;
}



let confirmar = document.querySelector("#btnConfirmar");

confirmar.addEventListener("click", function(){
    confirmar.disabled = true;
    window.opener.postMessage({ tipo: 'tamano', valor: nombreEleccion }, '*');
    window.close()
});
