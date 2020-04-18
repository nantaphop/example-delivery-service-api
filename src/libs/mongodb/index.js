const mongoose = require('mongoose')
const config = require('../../config')
const connect = () => {
  return new Promise((resolve, reject) => {
    console.info('Connecting to Mongodb')
    const mongoOpts = { useNewUrlParser: true, useUnifiedTopology: true }

    mongoose.connect(config.db.mongodb.url, mongoOpts, err => {
      if (err) {
        console.error(`Can't connect to mongodb`, err)
        reject(err)
      }
      console.info('Connected to Mongodb')
      resolve()
    })
  })
}
module.exports = {
  connect
}
