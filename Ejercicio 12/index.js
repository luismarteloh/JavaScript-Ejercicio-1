function fibonacci(num) {

    if(num <= 0){
        return "El numero debe ser mayor a cero";
    }
    if(num <= 2){
        return 1;
    }
    if(num > 2){
        let i = 3;
        let array = [1, 1, 2]
        while (i != num) {
            array.push(array[array.length-2] + array[array.length-1])
            i++
        }
        return array;
    }
}

fibonacci(6);