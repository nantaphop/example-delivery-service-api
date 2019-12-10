require('dotenv').config()
const express = require('express')
const app = express()
app.get('/', (req, res) => res.json({hello: 'world from docker'}))
const server = app.listen(process.env.PORT || 3000, () => {
    console.info(`listening at ${server.address().port}`)
})