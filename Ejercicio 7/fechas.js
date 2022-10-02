//Crea un archivo llamado fechas.js que contenga las siguientes líneas

//- La fecha de hoy
let today = new Date();
console.log(today);

//- La fecha de tu nacimiento
let myDateOfBirth = new Date(1985, 03, 18);
console.log(myDateOfBirth);

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let dateComparison = today > myDateOfBirth;
console.log(dateComparison);

//- Una variable que contenga el día de tu nacimiento
let myDayOfBirth = myDateOfBirth.getDate();
console.log(myDayOfBirth);

//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let myMonthOfBirth = myDateOfBirth.getMonth();
console.log(myMonthOfBirth);

//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let myYearOfBirth = myDateOfBirth.getFullYear();
console.log(myYearOfBirth);