const form = document.querySelector(".formulario-consuta")
const mas = document.querySelector(".mascara-2")

function mostrarform() {
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mas.style.visibility = "visible"
}

function esconderform() {
    form.style.left = "-316px"
    form.style.transform = "translatex(0)"
    mas.style.visibility = "hidden"
}