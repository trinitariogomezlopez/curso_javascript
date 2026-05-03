/*
     Parte_1: Añadir un evento click a cada botón para que al pulsarlos aparezca la ventana hija correspondiente.
              El tampo debe ser 500x520 (anchoxalto)
*/

let btnPizza = document.querySelector("#btnPizza");
let btnTamanyo = document.querySelector("#btnTamanyo");
let btnPostre = document.querySelector("#btnPostre");

btnPizza.addEventListener("click", function () {
     /*
          Posición entral de la ventaja hija. Los valores 500 y 520 cson la anchura y altura de la página hija
     */
     let left = (screen.width - 500) / 2;
     let top = (screen.height - 520) / 2;

     /*
          Abrimos la página hija. Especificamos el nombre de la página, la anchura, altura y posición.
     */
     window.open('pizza.html', 'Pizza', `width=500,height=520,left=${left},top=${top}`)
});

btnTamanyo.addEventListener("click", function () {
     /*
          Posición entral de la ventaja hija. Los valores 600 y 400 cson la anchura y altura de la página hija
     */
     let left = (screen.width - 500) / 2;
     let top = (screen.height - 520) / 2;

     /*
          Abrimos la página hija. Especificamos el nombre de la página, la anchura, altura y posición.
     */
     window.open('tamano.html', 'Tamño', `width=500,height=520,left=${left},top=${top}`)
});


btnPostre.addEventListener("click", function () {
     /*
          Posición entral de la ventaja hija. Los valores 600 y 400 cson la anchura y altura de la página hija
     */
     let left = (screen.width - 500) / 2;
     let top = (screen.height - 520) / 2;

     /*
          Abrimos la página hija. Especificamos el nombre de la página, la anchura, altura y posición.
     */
     window.open('postre.html', 'Postre', `width=500,height=520,left=${left},top=${top}`)
});



window.addEventListener('message', function (e) {
     let datos = e.data;

     if (datos.tipo === 'pizza') {
          document.querySelector('#val-pizza').textContent = datos.valor;
          document.querySelector("#fila-pizza").classList.add('recibido');
          mostrarToast("Pizza añadida con éxito");
     }

     if (datos.tipo === 'tamano') {
          document.querySelector('#val-tamano').textContent = datos.valor;
          document.querySelector("#fila-tamano").classList.add('recibido');
          mostrarToast("Tamaño añadido con éxito");
     }

     if (datos.tipo === 'postre') {
          document.querySelector('#val-postre').textContent = datos.valor;
          document.querySelector("#fila-postre").classList.add('recibido');
          mostrarToast("Postre añadido con éxito");
     }
});


/*
     Parte_2: Mostrar un mensaje TOAST cuando se selecciona una pizza, un tamaño o un postre.
*/
function mostrarToast(texto) {
    let toast = document.getElementById('toast-contenedor');
    let mensaje = document.createElement('div');

    mensaje.className = 'toast verde';
    mensaje.innerHTML = '<span class="toast-icono">✅</span>' + texto;

    toast.appendChild(mensaje);

    setTimeout(() => {
        mensaje.classList.add('saliendo');
    }, 3000);
}