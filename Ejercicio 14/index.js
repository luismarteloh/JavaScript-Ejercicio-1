const boton = document.getElementById("btn")
const botonJQuery = document.querySelector("#btn")

boton.addEventListener("click", () => {
    alert("click en el botón")
})

botonJQuery.addEventListener("click", () => {
    console.log("Hola, estoy utilizando jQuery")
})