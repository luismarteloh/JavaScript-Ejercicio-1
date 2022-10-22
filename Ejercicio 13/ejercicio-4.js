//Crea un archivo JS que contenga las siguientes líneas

//- Una cadena de texto con tu Nombre
const name = "Luis";

//- Otra cadena de texto con tu Apellido
const lastName = "Martelo";

//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
const estudiante = name.concat(" ", lastName);
console.log(estudiante)

//- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
const estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
const estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

//- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
const num = estudiante.length;
console.log(num);

//- Una variable que contenga la primera letra del Nombre
const firstLetterName = name[0]
console.log(firstLetterName);

//- Otra variable que contenga la última letra del Apellido
const endLetterLastName = lastName[lastName.length-1]
console.log(endLetterLastName);

//- Una cadena de texto que elimine los espacios de la variable "estudiante"
const sinEspacios = estudiante.replace(" ", "");
console.log(sinEspacios)

//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
const contiene = estudiante.includes(name);
console.log(contiene)
