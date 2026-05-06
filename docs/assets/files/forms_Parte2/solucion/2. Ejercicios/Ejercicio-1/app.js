// SELECT
document.getElementById('sel-menu').onchange = function () {
    document.getElementById('panel-degustacion').classList.remove('visible');
    document.getElementById('panel-diario').classList.remove('visible');
    document.getElementById('panel-infantil').classList.remove('visible');

    if (this.value === 'degustacion') document.getElementById('panel-degustacion').classList.add('visible');
    if (this.value === 'diario') document.getElementById('panel-diario').classList.add('visible');
    if (this.value === 'infantil') document.getElementById('panel-infantil').classList.add('visible');
};

// RADIO
var radios = document.querySelectorAll('input[name="mesa"]');
for (var i = 0; i < radios.length; i++) {
    radios[i].onchange = function () {
        document.getElementById('panel-interior').classList.remove('visible');
        document.getElementById('panel-terraza').classList.remove('visible');
        document.getElementById('panel-privado').classList.remove('visible');

        if (this.value === 'interior') document.getElementById('panel-interior').classList.add('visible');
        if (this.value === 'terraza') document.getElementById('panel-terraza').classList.add('visible');
        if (this.value === 'privado') document.getElementById('panel-privado').classList.add('visible');
    };
}

// ENVIAR
function enviarFormulario() {

    // Leer datos personales
    var nombre = document.getElementById('nombre').value.trim();
    var dni = document.getElementById('dni').value.trim();
    var fechaInicio = document.getElementById('fecha-inicio').value;
    var fechaFin = document.getElementById('fecha-fin').value;

    var sel = document.getElementById('sel-menu');
    var menuTexto = sel.options[sel.selectedIndex].text;
    var menuValor = sel.value;

    var detalleMenu = '';
    if (menuValor === 'degustacion') detalleMenu = document.getElementById('alergias-deg').value.trim() || 'Sin alergias indicadas';
    if (menuValor === 'diario') detalleMenu = document.getElementById('alergias-dia').value.trim() || 'Sin alergias indicadas';
    if (menuValor === 'infantil') detalleMenu = 'Edad: ' + (document.getElementById('edad-nino').value.trim() || 'no indicada');

    var mesaTexto = '';
    var mesaValor = '';
    var radiosM = document.querySelectorAll('input[name="mesa"]');
    for (var i = 0; i < radiosM.length; i++) {
        if (radiosM[i].checked) {
            mesaValor = radiosM[i].value;
            mesaTexto = radiosM[i].nextElementSibling.textContent.trim();
            break;
        }
    }

    var detalleMesa = '';
    if (mesaValor === 'interior') detalleMesa = 'Comensales: ' + (document.getElementById('comensales-int').value.trim() || 'no indicado');
    if (mesaValor === 'terraza') detalleMesa = 'Comensales: ' + (document.getElementById('comensales-ter').value.trim() || 'no indicado');
    if (mesaValor === 'privado') detalleMesa = 'Ocasión: ' + (document.getElementById('ocasion').value.trim() || 'no indicada');

    var error = '';
    if (nombre === '') error = '⚠ Por favor, introduzca su nombre.';
    else if (dni === '') error = '⚠ Por favor, introduzca su DNI.';
    else if (fechaInicio === '') error = '⚠ Por favor, seleccione la fecha de inicio.';
    else if (fechaFin === '') error = '⚠ Por favor, seleccione la fecha de fin.';
    else if (fechaFin < fechaInicio) error = '⚠ La fecha de fin no puede ser anterior a la fecha de inicio.';
    else if (menuValor === '') error = '⚠ Por favor, seleccione un tipo de menú.';
    else if (mesaValor === '') error = '⚠ Por favor, seleccione el tipo de mesa.';

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
    document.getElementById('res-menu').textContent = menuTexto;
    document.getElementById('res-detalle-menu').textContent = detalleMenu;
    document.getElementById('res-mesa').textContent = mesaTexto;
    document.getElementById('res-detalle-mesa').textContent = detalleMesa;

    document.getElementById('resultado').style.display = 'block';
    document.getElementById('resultado').scrollIntoView({ behavior: 'smooth' });
}