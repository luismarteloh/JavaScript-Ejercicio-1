//Crea un archivo JS que contenga las siguientes líneas

//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaCompra = ["Arroz", "Papa", "Azucar", "Pollo", "Cerdo", "fresas"];
console.log(listaCompra);

//- Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de Girasol");
console.log(listaCompra);

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop();
console.log(listaCompra);

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let peliculasFavoritas = [
    {
        titulo: "El Cisne Negro",
        director: "Darren Aronofsky",
        fecha: new Date(2010, 11, 03),
    },
    {
        titulo: "El Cadaver de la Novia",
        director: "Tim Burton",
        fecha: new Date(2005, 08, 16),
    },
    {
        titulo: "Encanto",
        director: "Byron Howard",
        fecha: new Date(2021, 10, 24),
    },
]
console.log(peliculasFavoritas)

//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let peliculasPosteriores = peliculasFavoritas.filter(e => e.fecha > new Date(2010, 0, 01));
console.log(peliculasPosteriores)

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
let directores = peliculasFavoritas.map(e => e.director);
console.log(directores);

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
let titulos = peliculasFavoritas.map(e => e.titulo);
console.log(titulos);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let directoresYTitulos = directores.concat(titulos);
console.log(directoresYTitulos)

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
let directoresYTitulos2 = [...directores, ...titulos];
console.log(directoresYTitulos2)