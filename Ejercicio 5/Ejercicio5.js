//Crea un archivo JS que contenga las siguientes líneas

//- Una variable que contenga tu altura en centímetros (entero)
const heightCm = 178;

//- Una variable que contenga tu altura en metros (número de coma flotante)
const heightM = 1.78;

//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
const weight = 78.2;

//- Una variable que contenga tu altura en metros redondeada hacia arriba
const heightM_up = Math.ceil(heightM);
console.log(heightM_up);

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
const weight_down = Math.floor(weight);
console.log(weight_down);

//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
const max = Number.MAX_VALUE;
console.log(max);

const maxMasUno = max + 1;

const comparacion = (max === maxMasUno);
console.log(comparacion);