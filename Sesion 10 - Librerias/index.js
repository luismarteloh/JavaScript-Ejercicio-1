import axios from "axios";

// Make a request for a user with a given ID
axios.get('https://pokeapi.co/api/v2/pokemon/luis')
  .then(function (response) {
    // handle success
    console.log(response.data); //desglosé el .json de la respuesta
    console.log("Soy Response!!!")
  })
  .catch(function (error) {
    // handle error
    console.log(error.response.data); // desglosé el .json de la respuesta
    console.log("Soy Error!!!") 
  })
  .finally(function () {
    // always executed
    console.log("Soy finally :)!!!!")
  });