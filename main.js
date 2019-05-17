const logger = require('./src/util/logger')
logger.info('hello node world!')
console.log(`The env var is ${process.env.npm_package_version}`)
// Leaving this outside the /src folder so that creating an npm package is more straight forward
// and seems to be canonical way this is done by the packages I've looked at.