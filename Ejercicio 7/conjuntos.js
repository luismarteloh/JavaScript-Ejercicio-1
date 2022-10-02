//Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

//- Un nuevo Set con los nombres de tu familia
let famillyNames = new Set(["Ingrith", "Luis E.", "Eva", "Ivonne", "Fallon", "Luis H."]);
console.log(famillyNames);

//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
famillyNames.add("Luis H.");
console.log(famillyNames);

//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
famillyNames.add("Javascript");
console.log(famillyNames);