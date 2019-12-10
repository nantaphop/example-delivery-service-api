require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const MONGO_CONNECTION = process.env.MONGO_CONNECTION
const PORT = process.env.PORT || 3000

// Config Middleware for req
app.use(bodyParser.json())

// Config route handlers
require('./src/controllers/system/register')(app)
require('./src/controllers/auth/register')(app)

console.info('Connecting to Mongodb')
const mongoOpts = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(MONGO_CONNECTION, mongoOpts, err => {
  if (err) console.error(`Can't connect to mongodb`, err)
  else console.info('Connected to Mongodb')
})
const server = app.listen(PORT, () => {
  console.info(`listening at ${server.address().port}`)
})
