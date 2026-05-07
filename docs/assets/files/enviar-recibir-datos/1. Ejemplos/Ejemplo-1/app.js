/*
-------------------------------- RECUPERAR LA INFORMACIÓN DE LOS PRODUCOS------------------------------
-------------------------------------------------------------------------------------------------------
*/

let url = "https://69e4a52ecfa9394db8da3fd2.mockapi.io/api/v1/comanda";

let btn = document.getElementById('fetch-btn');

btn.addEventListener('click', function () {
    fetch("https://69e4a52ecfa9394db8da3fd2.mockapi.io/api/v1/comanda")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
});