const form = document.querySelector(".form-contact-us")
const mask = document.querySelector(".mask-form")

function mostrarform()
{
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mask.style.visibility = "visible"
}

function esconderform()
{
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mask.style.visibility = "hidden"
}