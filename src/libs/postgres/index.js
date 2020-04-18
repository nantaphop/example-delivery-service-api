const Sequelize = require('sequelize')

const logger = require('../logger')
const config = require('../../config')

const connect = async () => {
  const sequelize = new Sequelize({
    host: config.db.postgres.host,
    port: config.db.postgres.port,
    username: config.db.postgres.username,
    password: config.db.postgres.password,
    database: config.db.postgres.database,
    dialect: 'postgres'
  })
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
