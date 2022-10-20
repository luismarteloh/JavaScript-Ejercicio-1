//****Esta es la forma de crear un construtor de objetos con class*******//
class Persona { 
    constructor(name, age, isDeveloper){
        this.name = name
        this.age = age
        this.isDeveloper = isDeveloper
    }

    saludo () {
        console.log(`Hola mi nombre es ${this.name}, tengo ${this.age} años y 
        ${this.isDeveloper ? "soy desarrollador web" : "no soy desarrollador web"}`);

        return `Hola mi nombre es ${this.name}, tengo ${this.age} años y 
        ${this.isDeveloper ? "soy desarrollador web" : "no soy desarrollador web"}`;
    }
}

const pedro = new Persona("pedro", 27, true); //instanciamos un nuevo objeto de nombre pedro
console.log(pedro) //aqui vemos como se creo el objeto pedro que es una instancia de la clase Persona
console.log(pedro.saludo()); //aqui accedemos al metodo del objeto pedro, que se creo de la instacia Persona

class Mascota{   
    _nombre // el gion bajo "_" por convencion entre los programadores, son atributos que no se deben modificar, aunque el lenguaje JavaScript lo permita.

    #tipo // la almoadilla "#" se usa para proteger los datos de los objetos, no se pueden tener acceso a ellos de forma tradicional, es po ello que creamos el metodo "getDatos" y "setEspecie" para podelos mostrar de forma segura y así evitar modificaciones no autorizadas. 
    constructor (name, type, age) {
        this._nombre = name
        this.#tipo = type
        this.edad = age
    }

    getDatos(){  //estos metodos tambien son conocidos como metodos Getter, ya que nos permiten obtener metodos o atributos privados ("#") o protegidos ("_") de los objetos
        return `Nombre: ${this._nombre}, Especie: ${this.#tipo}, Edad: ${this.edad}`
    }

    setEspecie(especie){ //estos metodos tambien son conocidos como metodos Setter, ya que nos permiten modificar metodos o atributos privados ("#") o protegidos ("_") de los objetos
        this.#tipo = especie
    }
}

const neko = new Mascota("Neko", "Gato", 2);
console.log(neko) //Mascota { _nombre:'Neko', edad: 2 } ****Aqui sabemos que "_nombre" no debemos modificarlo jamas****
console.log(neko._nombre) //Neko, 
console.log(neko.tipo) //Undefined    **** "tipo" no aparece por ser un atributo privado ****
console.log(neko.getDatos()) //Nombre: Neko, Especie: Gato, Edad: 2
neko.setEspecie("Perro");
console.log(neko.getDatos()) //Nombre: Neko, Especie: Perro, Edad: 2
//Aunque existan atributos y metodos privados o protegidos, siempre los podremos modificar mediante metodos creados dentro de la misma clase de dicho objeto y asi poder acceder sobretodo a los atributos privados.

/********************************************HERENCIAS EN CLASES*****************************************************************/
class Desarrollador extends Persona {
    constructor(name, age, lenguaje){ //creamos un nuevo constructor con tres atributos
        super(name, age) //reutilizamos los atributos de "Persona" por lo tanto solo necesitaremos crear el nuevo atributo "lenguaje"
        this.lenguaje = lenguaje
        this.isDeveloper = true
    }

    saludo(){
        return `${ super.saludo() } especializado en ${ this.lenguaje }`
        
    }
}

const david = new Desarrollador("David", 30, "Java");
console.log(david) //Desarrollador { name: 'David', age: 30, isDeveloper: true, lenguaje: 'Java' }
console.log(david.saludo()); //Hola mi nombre es David, tengo 30 años y soy desarrollador web especializado en Java