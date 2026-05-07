let API_URL = "https://69e4a52ecfa9394db8da3fd2.mockapi.io/api/v1/comanda";

let btn = document.getElementById('load-btn');
let tbody = document.getElementById('tbody');

/*
-------------------------------- RECUPERAR TODOS LOS PRODUCTOS Y MOSTRARLOS EN UNA TABLA --------------------------------------
-------------------------------------------------------------------------------------------------------------------------------
*/

function completarTabla(datos) {
    let i = 0;
    tbody.innerHTML = '';

    if (datos.length === 0) {
        tbody.innerHTML = '<tr class="empty-row"><td colspan="6">No hay pedidos registrados.</td></tr>';
    }
    else {
        while (i < datos.length) {
            let tr = document.createElement('tr');

            tr.innerHTML = `
                <td class="id">${datos[i].id}</td>
                <td class="plato">${datos[i].plato}</td>
                <td class="number">${parseFloat(datos[i].precioBase).toFixed(2)} €</td>
                <td class="number">${parseFloat(datos[i].extras).toFixed(2)} €</td>
                <td class="number">${parseFloat(datos[i].cantidad)}</td>
                <td class="total">${parseFloat(datos[i].total).toFixed(2)} €</td>
            `;

            tbody.appendChild(tr);

            i++;
        }
    }
}

btn.addEventListener('click', function () {
    fetch("https://69e4a52ecfa9394db8da3fd2.mockapi.io/api/v1/comanda")
        .then(response => response.json())
        .then(data => {
            completarTabla(data);
        })
        .catch(error => {
            console.error('Error:', error);
            tbody.innerHTML = '<tr class="empty-row"><td colspan="6">Error al cargar los datos.</td></tr>';
        })
});