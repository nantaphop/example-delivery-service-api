const mongoose = require('mongoose')

const config = require('../../config')
const logger = require('../logger')

const connect = () => {
  return new Promise((resolve, reject) => {
    logger.info('Connecting to Mongodb')
    const mongoOpts = { useNewUrlParser: true, useUnifiedTopology: true }

    mongoose.connect(config.db.mongodb.url, mongoOpts, err => {
      if (err) {
        logger.error(`Can't connect to mongodb`, err)
        reject(err)
      }
      logger.info('Connected to Mongodb')
      resolve()
    })
  })
}
module.exports = {
  connect
}
