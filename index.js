require('dotenv').config()
const express = require('express')
const app = express()

require('./src/controllers/system/register')(app)

const server = app.listen(process.env.PORT || 3000, () => {
    console.info(`listening at ${server.address().port}`)
})