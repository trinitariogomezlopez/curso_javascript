let btnVer = document.querySelector("#ver");
let btnManipular = document.querySelector("#manipular");

btnVer.addEventListener("click", function () 
{
    /*________________________Obtener el valor del campo de texto___________________
    * ______________________________________________________________________________*/
    let textInput = document.getElementById("textInput");
    console.log("Valor del campo de texto:", textInput.value);

    /*________________________Obtener el valor del radio button seleccionado________
    * ______________________________________________________________________________*/
    let selectedOption = document.querySelector('input[name="options"]:checked');
    console.log("Valor del radio button seleccionado:", selectedOption.value);

 
    /*________________________Obtener el valor del checkbox_________________________
    * ______________________________________________________________________________*/
    let i = 0;
    let checksMarcados = "";
    let checks = document.querySelectorAll('.check');
    while(i < checks.length) {
        if (checks[i].checked) {
            checksMarcados = checksMarcados + "  " + checks[i].value;
        }

        i++;
    }
    console.log("Check marcados:", checksMarcados);


    /*________________________Obtener el valor del select___________________________
    * ______________________________________________________________________________*/
    let selectInput = document.getElementById("selectInput");
    console.log("Valor del select:", selectInput.value);
});



btnManipular.addEventListener("click", function () 
{
    /*________________________Cambiar el valor del campo de texto___________________
    * ______________________________________________________________________________*/
    let textInput = document.getElementById("textInput");
    textInput.value = "Nuevo texto";

    
    /*________________________Cambiar la selección del radio button__________________
    * ______________________________________________________________________________*/
    document.querySelector('input[name="options"][value="opcion2"]').checked = true;

 
    /*________________________Cambiar el estado del checkbox_________________________
    * ______________________________________________________________________________*/
    let checkboxInput1 = document.getElementById("checkboxInput1");
    checkboxInput1.checked = !checkboxInput1.checked;

    let checkboxInput2 = document.getElementById("checkboxInput2");
    checkboxInput2.checked = !checkboxInput2.checked;


    /*________________________Cambiar la selección del select___________________________
    * ______________________________________________________________________________*/
    let selectInput = document.getElementById("selectInput");
    selectInput.value = "3";
});