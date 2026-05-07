let url = "https://69e4a52ecfa9394db8da3fd2.mockapi.io/api/v1/comanda/";

let fetchBtn = document.querySelector("#fetch-btn");
let saveBtn = document.querySelector("#save-btn");

/*
-------------------------------- PASO 1: RECUPERAR LA INFORMACIÓN DE UN PRODUCTO --------------------------------------
-----------------------------------------------------------------------------------------------------------------------
*/
fetchBtn.addEventListener('click', function() {
    let id = document.getElementById('id-input').value;
    let url = "https://69e4a52ecfa9394db8da3fd2.mockapi.io/api/v1/comanda/" + id;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('e-plato').value = data.plato;
            document.getElementById('e-precio').value = data.precioBase;
            document.getElementById('e-extras').value = data.extras;
            document.getElementById('e-cantidad').value = data.cantidad;
            document.getElementById('e-total').value = data.total;
        })
        .catch(error => {
            console.error('Error:', error);
        })
});


/*
-------------------------------- PASO 2: ACTUALIZAR LA INFORMACIÓN DE UN PRODUCTO --------------------------------------
------------------------------------------------------------------------------------------------------------------------
*/
saveBtn.addEventListener('click', function() {
    let id = document.getElementById('id-input').value;
    let url = "https://69e4a52ecfa9394db8da3fd2.mockapi.io/api/v1/comanda/" + id;

    let platoNuevo = document.getElementById('e-plato').value;
    let precioBaseNuevo = document.getElementById('e-precio').value;
    let extrasNuevo = document.getElementById('e-extras').value;
    let cantidadNuevo = document.getElementById('e-cantidad').value;
    let totalNuevo = parseFloat(precioBaseNuevo) * parseFloat(cantidadNuevo) + parseFloat(extrasNuevo);

    fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            plato: platoNuevo,
            precioBase: precioBaseNuevo,
            extras: extrasNuevo,
            cantidad: cantidadNuevo,
            total: totalNuevo,
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Registro actualizado:', data);
        alert("Registro actualizado correctamente");
    })
    .catch(error => {
        alert("Error en la actualización");
        setStatus('✗ Error al guardar los cambios.', 'err');
    })
});

