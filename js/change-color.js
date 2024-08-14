// CAMBIAR DE COLOR LOS INPUT SELECT - USADO LOS FORMULARIOS EN INDEX.HTML Y CONTACTO.HTML
const carrera = document.getElementById("cmbCarrera");

cambiarColorTexto(carrera);

function cambiarColorTexto(elemento) {
    elemento.addEventListener("change", function() {
        elemento.classList.add("form__input--change");
    });

    if (elemento.value !== '') {
        elemento.classList.add("form__input--change");
    }
}