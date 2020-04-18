const Sequelize = require('sequelize')

const logger = require('../logger')
const config = require('../../config')

const connect = async () => {
  const sequelize = new Sequelize(config.db.postgres.url)
  try {
    const success = await sequelize.authenticate()
    logger.info('Connected to Postgres.')
    return sequelize
  } catch (err) {
    logger.error(`Unable to connect to Postgres: ${err}`)
    throw err
  }
}

module.exports = {
  connect
}
