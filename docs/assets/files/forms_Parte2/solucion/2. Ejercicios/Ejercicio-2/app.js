// SELECT
document.getElementById('sel-coche').onchange = function () {
    document.getElementById('panel-utilitario').classList.remove('visible');
    document.getElementById('panel-suv').classList.remove('visible');
    document.getElementById('panel-electrico').classList.remove('visible');

    if (this.value === 'utilitario') document.getElementById('panel-utilitario').classList.add('visible');
    if (this.value === 'suv') document.getElementById('panel-suv').classList.add('visible');
    if (this.value === 'electrico') document.getElementById('panel-electrico').classList.add('visible');
};

// RADIO
var radios = document.querySelectorAll('input[name="seguro"]');
for (var i = 0; i < radios.length; i++) {
    radios[i].onchange = function () {
        document.getElementById('panel-basico').classList.remove('visible');
        document.getElementById('panel-completo').classList.remove('visible');
        document.getElementById('panel-premium').classList.remove('visible');

        if (this.value === 'basico') document.getElementById('panel-basico').classList.add('visible');
        if (this.value === 'completo') document.getElementById('panel-completo').classList.add('visible');
        if (this.value === 'premium') document.getElementById('panel-premium').classList.add('visible');
    };
}

// ENVIAR
function enviarFormulario() {

    // Leer datos personales
    var nombre = document.getElementById('nombre').value.trim();
    var dni = document.getElementById('dni').value.trim();
    var fechaInicio = document.getElementById('fecha-inicio').value;
    var fechaFin = document.getElementById('fecha-fin').value;

    var sel = document.getElementById('sel-coche');
    var cocheTexto = sel.options[sel.selectedIndex].text;
    var cocheValor = sel.value;

    var detalleCoche = '';
    if (cocheValor === 'utilitario') detalleCoche = 'Modelo: ' + (document.getElementById('modelo-util').value.trim() || 'sin preferencia');
    if (cocheValor === 'suv') detalleCoche = 'Plazas: ' + (document.getElementById('num-plazas').value.trim() || 'no indicado');
    if (cocheValor === 'electrico') detalleCoche = 'Km/día: ' + (document.getElementById('autonomia').value.trim() || 'no indicado');

    var seguroTexto = '';
    var seguroValor = '';
    var radiosS = document.querySelectorAll('input[name="seguro"]');
    for (var i = 0; i < radiosS.length; i++) {
        if (radiosS[i].checked) {
            seguroValor = radiosS[i].value;
            seguroTexto = radiosS[i].nextElementSibling.textContent.trim();
            break;
        }
    }

    var detalleSeguro = '';
    if (seguroValor === 'basico') detalleSeguro = 'Antigüedad carnet: ' + (document.getElementById('carnet-basico').value.trim() || 'no indicado');
    if (seguroValor === 'completo') detalleSeguro = 'Antigüedad carnet: ' + (document.getElementById('carnet-completo').value.trim() || 'no indicado');
    if (seguroValor === 'premium') detalleSeguro = 'Conductor extra: ' + (document.getElementById('conductor-extra').value.trim() || 'ninguno');

    var error = '';
    if (nombre === '') error = '⚠ Por favor, introduzca su nombre.';
    else if (dni === '') error = '⚠ Por favor, introduzca su DNI.';
    else if (fechaInicio === '') error = '⚠ Por favor, seleccione la fecha de recogida.';
    else if (fechaFin === '') error = '⚠ Por favor, seleccione la fecha de devolución.';
    else if (fechaFin < fechaInicio) error = '⚠ La fecha de devolución no puede ser anterior a la de recogida.';
    else if (cocheValor === '') error = '⚠ Por favor, seleccione un tipo de coche.';
    else if (seguroValor === '') error = '⚠ Por favor, seleccione la modalidad de seguro.';

    var aviso = document.getElementById('aviso-error');
    if (error !== '') {
        aviso.textContent = error;
        aviso.style.display = 'block';
        document.getElementById('resultado').style.display = 'none';
        return;
    }
    aviso.style.display = 'none';

    document.getElementById('res-nombre').textContent = nombre;
    document.getElementById('res-dni').textContent = dni;
    document.getElementById('res-fecha-inicio').textContent = fechaInicio;
    document.getElementById('res-fecha-fin').textContent = fechaFin;
    document.getElementById('res-coche').textContent = cocheTexto;
    document.getElementById('res-detalle-coche').textContent = detalleCoche;
    document.getElementById('res-seguro').textContent = seguroTexto;
    document.getElementById('res-detalle-seguro').textContent = detalleSeguro;

    document.getElementById('resultado').style.display = 'block';
    document.getElementById('resultado').scrollIntoView({ behavior: 'smooth' });
}