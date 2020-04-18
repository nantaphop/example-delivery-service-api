const Sequelize = require('sequelize')
const glob = require('glob')
const path = require('path')

const logger = require('../logger')
const config = require('../../config')

let sequelize

const connect = async () => {
  sequelize = new Sequelize({
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
    const associates = glob.sync('**/models/*.associate.js')
    associates.forEach(a => {
      logger.info(`Setup association: ${a}`)
      require(path.resolve(a))
    })
    return sequelize
  } catch (err) {
    logger.error(`Unable to connect to Postgres: ${err}`)
    throw err
  }
}

module.exports = {
  getSequelize: () => sequelize,
  transaction: f => sequelize.transaction(f),
  connect
}
