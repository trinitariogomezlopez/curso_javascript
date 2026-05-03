/*
     Parte_1: Añadir un evento click a cada botón para que al pulsarlos aparezca la ventana hija correspondiente.
              El tampo debe ser 420x320 (anchoxalto)
*/

let btnPizza = document.querySelector("#btnPizza");
let btnTamanyo = document.querySelector("#btnTamanyo");
let btnPostre = document.querySelector("#btnPostre");

btnPizza.addEventListener("click", function(){
     /*
          Posición entral de la ventaja hija. Los valores 600 y 400 cson la anchura y altura de la página hija
     */
     let left = (screen.width - 420) / 2;
     let top = (screen.height - 320) / 2;

     /*
          Abrimos la página hija. Especificamos el nombre de la página, la anchura, altura y posición.
     */
     window.open('pizza.html','Pizza',`width=420,height=320,left=${left},top=${top}`)
});

btnTamanyo.addEventListener("click", function(){
     /*
          Posición entral de la ventaja hija. Los valores 600 y 400 cson la anchura y altura de la página hija
     */
     let left = (screen.width - 420) / 2;
     let top = (screen.height - 320) / 2;

     /*
          Abrimos la página hija. Especificamos el nombre de la página, la anchura, altura y posición.
     */
     window.open('tamano.html','Tamño',`width=420,height=320,left=${left},top=${top}`)
});


btnPostre.addEventListener("click", function(){
     /*
          Posición entral de la ventaja hija. Los valores 600 y 400 cson la anchura y altura de la página hija
     */
     let left = (screen.width - 420) / 2;
     let top = (screen.height - 320) / 2;

     /*
          Abrimos la página hija. Especificamos el nombre de la página, la anchura, altura y posición.
     */
     window.open('postre.html','Postre',`width=420,height=320,left=${left},top=${top}`)
});

// Recibir el mensaje enviado desde las ventanas hijas
window.addEventListener('message', function (e) {
    var d = e.data;
    
    if (d.tipo === 'pizza'){
        document.getElementById('val-pizza').textContent = d.valor;
    }

    if (d.tipo === 'tamano') {
        document.getElementById('val-tamano').textContent = d.valor;
    }

    if (d.tipo === 'postre') {
        document.getElementById('val-postre').textContent = d.valor;
    }
});


/*
     Parte_2: Al pulsar sobre el botón `Pagar Pedido', debe aparecer una modal confirmando el pago.
*/
let btnPagar = document.querySelector("#btnPagar");

btnPagar.addEventListener("click", function(){
     document.getElementById('fondoModal').style.display = 'block';
});


let btnCerrar = document.querySelector("#btnCerrar");

btnCerrar.addEventListener("click", function(){
     document.getElementById('fondoModal').style.display = 'none';
});

