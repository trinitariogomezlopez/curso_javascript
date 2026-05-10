
let usuarioAdmin = "admin";
let passwordAdmin = "1234";

if (localStorage.getItem('sesion') === 'activa') {
    window.location.href = 'index.html';
}

let btnLogin = document.querySelector("#btn-login");

btnLogin.addEventListener("click", function() {
    let usuario = document.getElementById('usuario').value;
    let password = document.getElementById('password').value;

    document.getElementById('msg-login-error').style.display = 'none';
    document.getElementById('msg-field-error').style.display = 'none';


    if(usuario === "" || password === ""){
        // Mostrar mensaje de error
        document.getElementById('msg-field-error').style.display = 'block';

    }
    else {
        if(usuario !== usuarioAdmin || password !== passwordAdmin){
            // Mostrar mensaje de error
            document.getElementById('msg-login-error').style.display = 'block';
        }
        else{
            // Guardar la sesión en localStorage
            // localStorage.setItem(clave, valor) guarda un dato en el navegador
            localStorage.setItem('sesion', 'activa');
            localStorage.setItem('usuario', usuario);

            // Redirigir a la página principal
            window.location.href = 'index.html';
        }
    }
});


