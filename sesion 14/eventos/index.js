
const hTexto = document.getElementById("h-texto") //selecionamos el elemento del DOM que queremos modificar

console.log(hTexto)

hTexto.addEventListener("cambioTexto", evento => {
    console.log(evento.detail)  //esto es el objeto que creamos en la funcion "cambiarTexo"
    hTexto.innerText = evento.detail.texto  //innerText permite definir el texto del elemento seleccionado
    hTexto.style.color = evento.detail.color  //style.color permite definir el color del elemento seleccionado
})

function cambiarTexto(nuevoTexto, color) {  //creamos la funcion que generará el evento que deseamos, en este caso sera para cambiar el texto y el color del elemento selccionado
    const evento = new CustomEvent("cambioTexto", {  //"CustomEvent" nos permite generar dicho evento a gusto
        detail: {    //mediante un objeto marcamos los parametros que deseamos cambiar
            texto: nuevoTexto,
            color
        }
    })
    hTexto.dispatchEvent(evento)    //finalmente despachamos el evento creado y lo asociamos al elemento selecinado
}