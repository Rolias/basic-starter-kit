const {createLogger, format, transports} = require('winston')

// const levels = { 
//   error: 0, 
//   warn: 1, 
//   info: 2, 
//   verbose: 3, 
//   debug: 4, 
//   silly: 5 
// };

/**
 * get the winston logger that writes to the console
 */
const logger = createLogger({
  level: 'debug',
  format: format.combine(
    format.colorize(),
    format.simple()
  ),
  // You can also comment out the line above and uncomment the line below for JSON format
  // format: format.json(),
  transports: [new transports.Console()],
})


module.exports = logger