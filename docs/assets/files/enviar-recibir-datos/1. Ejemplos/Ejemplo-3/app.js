
/*
-------------------------------- ENVIAR LA INFORMACIÓN DE UN PRODUCTO AL SERVIDOR------------------------------
---------------------------------------------------------------------------------------------------------------
*/

let url = "https://69e4a52ecfa9394db8da3fd2.mockapi.io/api/v1/comanda";

document.getElementById('guardar-btn').addEventListener('click', function() {
    let platoNuevo = document.getElementById('plato').value;
    let precioBaseNuevo = document.getElementById('precioBase').value;
    let extrasNuevo = document.getElementById('extras').value;
    let cantidadNuevo = document.getElementById('cantidad').value;
    let totalNuevo = parseFloat(precioBaseNuevo) * parseFloat(cantidadNuevo) + parseFloat(extrasNuevo);

    console.log(totalNuevo);

    fetch("https://69e4a52ecfa9394db8da3fd2.mockapi.io/api/v1/comanda", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
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
        console.log("✅ Pedido creado correctamente:", data);
    })
    .catch(error => {
        console.error("❌ Error al crear el pedido:", error);
    });
});