const logger = require('../libs/logger')
module.exports = async function errorHandler(err, req, res, next) {
  logger.error(err.message)
  logger.error(err.stack)
  res.status(500).send({ error: err.message, stack: err.stack })
}
