/*
    PARTE_1: Añadir el evento click al botón Enviar para enviar el postre a la página madre.
*/

let nombreEleccion = null;

let tiramisu = document.querySelector("#tiramisu");
let quesos = document.querySelector("#queso");
let helado = document.querySelector("#helado");
let brownie = document.querySelector("#brownie");
let fruta = document.querySelector("#fruta");
let nopostre = document.querySelector("#nopostre");

tiramisu.addEventListener("click", function(){
    elegir(this, 'Tiramisú casero');
});

quesos.addEventListener("click", function(){
    elegir(this, 'Tarta de queso');
});

helado.addEventListener("click", function(){
    elegir(this, 'Helado 3 bolas');
});

brownie.addEventListener("click", function(){
    elegir(this, 'Brownie con nata');
});

fruta.addEventListener("click", function(){
    elegir(this, 'Fruta del tiempo');
});

nopostre.addEventListener("click", function(){
    elegir(this, 'Sin postre');
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
    window.opener.postMessage({ tipo: 'postre', valor: nombreEleccion }, '*');
    window.close()
});
