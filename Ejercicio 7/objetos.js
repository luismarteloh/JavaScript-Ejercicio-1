//Crea un archivo llamado objetos.js que contenga las siguientes líneas

//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
let personalInfo = {
    name: "Luis",
    lastName: "Martelo",
    age: 37,
    height: 178,
    developer: true,
}

//- Una variable que obtenga tu edad a partir del objeto anterior
let myAge = personalInfo.age;
console.log(myAge);

//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
let array = [
    personalInfo, 
    {
        name: "David",
        lastName: "Martinez",
        age: 29,
        height: 174,
        developer: false,
    },
    {
        name: "Luisa",
        lastName: "Lastra",
        age: 28,
        height: 160,
        developer: false,
    },
];
console.log(array);

//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
let newArray = array.sort((a, b) => b.age - a.age);
console.log(newArray);
