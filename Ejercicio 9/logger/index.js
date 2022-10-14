const winston = require('winston');

const logger = winston.createLogger({
  level: 'silly', //nivel mas alto para registrar errores
  format: winston.format.json(),
  //https://www.npmjs.com/package/winston     instruction about winston
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
  ],
});

module.exports = logger;