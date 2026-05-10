
let usuarioAdmin = "admin";
let passwordAdmin = "1234";

if (localStorage.getItem('sesion') === 'activa') {
    window.location.href = 'index.html';
}

let btnLogin = document.querySelector("#btn-login");

btnLogin.addEventListener("click", function () {
    let usuario = document.getElementById('usuario').value;
    let password = document.getElementById('password').value;

    let url = "https://69e4a52ecfa9394db8da3fd2.mockapi.io/api/v1/usuario?nombre=" + usuario + "&password=" + password + "";

    if (usuario === "" || password === "") {
        // Mostrar mensaje de error
        document.getElementById('msg-field-error').style.display = 'block';

    }
    else {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                login(data);
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('msg-login-error').style.display = 'block';
            })
    }
});


function login(data) {
    document.getElementById('msg-login-error').style.display = 'none';
    document.getElementById('msg-field-error').style.display = 'none';

    if (data.lenght === 0) {
        // Mostrar mensaje de error
        document.getElementById('msg-login-error').style.display = 'block';
    }
    else {
        // Guardar la sesión en localStorage
        // localStorage.setItem(clave, valor) guarda un dato en el navegador
        localStorage.setItem('sesion', 'activa');
        localStorage.setItem('usuario', data[0].nombre);

        // Redirigir a la página principal
        window.location.href = 'index.html';
    }
}

