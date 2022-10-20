// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una clase llamada "Estudiante" que tenga:
class Estudiante {
    #nombre
    #asignaturas
    constructor(nombre){

// - Una variable llamada nombre
        this.#nombre = nombre

// - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
        this.#asignaturas = ["Javascript", "HTML", "CSS"]
    }
    
// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
    obtenDatos(){
        return {
            nombre: this.#nombre, 
            asignaturas: this.#asignaturas
        }
    }
}

// - Crea una nueva instancia de "Estudiante"
const estudianteUno = new Estudiante("pepe");

console.log(estudianteUno);

// - Haz la llamada al método obtenDatos
console.log(estudianteUno.obtenDatos());