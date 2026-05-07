/*
-------------------------------- RECUPERAR LA INFORMACIÓN DE UN PRODUCTO ------------------------------
-------------------------------------------------------------------------------------------------------
*/

let url = "https://69e4a52ecfa9394db8da3fd2.mockapi.io/api/v1/comanda";

let btn = document.getElementById('fetch-btn');
let btnBorrar = document.getElementById('delete-btn');


function mostrarRegistro(item) {
    document.getElementById('r-plato').textContent = item.plato;
    document.getElementById('r-id').textContent = item.id;
    document.getElementById('r-precio').textContent = parseFloat(item.precioBase) + '€';
    document.getElementById('r-extras').textContent = parseFloat(item.extras) +  '€';
    document.getElementById('r-cantidad').textContent = item.cantidad;
    document.getElementById('r-total').textContent = parseFloat(item.total) + '€';
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


btnBorrar.addEventListener('click', function() {
    let idInput = document.getElementById('id-input').value;
    let url = "https://69e4a52ecfa9394db8da3fd2.mockapi.io/api/v1/comanda/" + idInput;

    fetch(url, {method: 'DELETE'})
        .then(response => response.json())
        .then(data => {
            alert("Comanda borrada");
        })
        .catch(error => {
            console.error('Error:', error);
        })
});