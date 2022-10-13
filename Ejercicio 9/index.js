const logger = require("./logger");

function error() {
    throw new Error("Esta funcion lanza siempre un error")
    
}

try {
    error();
    console.log("funcion ejecutada correctamente")
} catch (e) {
    logger.error("La funcion se ejecutó pero presentó un error");
    logger.error("La funcion se ejecutó pero presentó un error", e);
} finally {
    logger.info("la funcion 'error' se ejecutó");
}