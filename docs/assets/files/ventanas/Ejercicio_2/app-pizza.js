/*
    PARTE_1: Añadir el evento click al botón Enviar para enviar la pizza a la página madre.
*/

let nombreEleccion = null;

let margarita = document.querySelector("#margarita");
let quesos = document.querySelector("#queso");
let barbacoa = document.querySelector("#barbacoa");
let vegetariana = document.querySelector("#vegetariana");
let napolitana = document.querySelector("#napolitana");

margarita.addEventListener("click", function(){
    elegir(this, 'Pizza Margarita');
});

quesos.addEventListener("click", function(){
    elegir(this, 'Pizza Cuatro Quesos');
});

barbacoa.addEventListener("click", function(){
    elegir(this, 'Pizza Barbacoa');
});

vegetariana.addEventListener("click", function(){
    elegir(this, 'Pizza Vegetariana');
});

napolitana.addEventListener("click", function(){
    elegir(this, 'Pizza Napolitana');
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
    window.opener.postMessage({ tipo: 'pizza', valor: nombreEleccion }, '*');
    window.close()
});
