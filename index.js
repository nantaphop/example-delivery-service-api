require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()

const MONGO_CONNECTION = process.env.MONGO_CONNECTION
const PORT = process.env.PORT || 3000

console.info('Connecting to Mongodb')
const mongoOpts = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(MONGO_CONNECTION, mongoOpts, (err) => {
    console.info('Connected to Mongodb')
})

require('./src/controllers/system/register')(app)

const server = app.listen(PORT, () => {
    console.info(`listening at ${server.address().port}`)
})