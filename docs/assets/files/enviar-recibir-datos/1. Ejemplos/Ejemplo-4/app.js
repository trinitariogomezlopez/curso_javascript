/*
-------------------------------- RECUPERAR LA INFORMACIÓN DE UN PRODUCTO ------------------------------
-------------------------------------------------------------------------------------------------------
*/

let url = "https://69e4a52ecfa9394db8da3fd2.mockapi.io/api/v1/comanda";

let btn = document.getElementById('load-btn');


function mostrarRegistro(item) {
    document.getElementById('f-plato').textContent = item.plato;
    document.getElementById('f-id').textContent = item.id;
    document.getElementById('f-precio').textContent = parseFloat(item.precioBase) + '€';
    document.getElementById('f-extras').textContent = parseFloat(item.extras) +  '€';
    document.getElementById('f-cantidad').textContent = item.cantidad;
    document.getElementById('f-total').textContent = parseFloat(item.total) + '€';
}

btn.addEventListener('click', function() {
    let idInput = document.getElementById('id-input').value;
    let url = "https://69e4a52ecfa9394db8da3fd2.mockapi.io/api/v1/comanda/" + idInput;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            mostrarRegistro(data);
        })
        .catch(error => {
            console.error('Error:', error);
        })
});