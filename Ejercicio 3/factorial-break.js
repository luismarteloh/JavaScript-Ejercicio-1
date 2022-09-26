let factorial = 1
let contador = 1

while (true) {
    factorial = factorial * contador;
    contador++;

    if(contador === 10){
        break;
    }
}

console.log('El factorial de 10 es: ', factorial)