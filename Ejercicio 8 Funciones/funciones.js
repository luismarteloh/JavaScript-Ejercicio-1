//Crea un archivo JS que contenga las siguientes líneas

//- Una función sin parámetros que devuelva siempre "true"
function siempreTrue() {
    return true;
}

const ver = siempreTrue();
console.log(ver);


//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
function miPromesa(){
    setTimeout(saludo, 5000);
}

function saludo(){
    console.log("Hola soy una promesa")  ;
};

miPromesa();

//- Una función generadora de índices pares automáticos
function* generadorIndexPares(){
    let id = 0;
    while (true) {
        id= id + 2;
        yield id;
    }
}

const gen = generadorIndexPares();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)