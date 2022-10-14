const logger = require("./logger");

function error() {
    throw new Error("Esta funcion lanza siempre un error")
}

try {
    error();
    console.log("funcion ejecutada correctamente");

} catch (e) {
    logger.error(`El error capturado es: ${e}`); //queda en el registro
    console.log(`${e}`);  //se muestra en consola

} finally {
    logger.info("la funcion 'error' se ejecutó");
}