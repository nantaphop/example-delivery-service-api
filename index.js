require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const config = require('./src/config')
const mongodb = require('./src/libs/mongodb')
const jwtTokenHandler = require('./src/domains/auth/jwt-token-handler')

const app = express()

const PORT = config.server.port

async function bootstrap() {
  // Config Passport
  passport.use(
    new JwtStrategy(
      {
        secretOrKey: process.env.TOKEN_SECRET,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
      },
      jwtTokenHandler
    )
  )

  // Config Middleware for req
  app.use(bodyParser.json())

  // Config route handlers
  require('./src/controllers/system/register')(app)
  require('./src/controllers/auth/register')(app)

  // Config admin route handlers
  require('./src/controllers/admin/users/register')(app)

  // Config Error Middleware
  app.use(require('./src/middlewares/error-handler'))

  await mongodb.connect()

  const server = app.listen(PORT, () => {
    console.info(`listening at ${server.address().port}`)
  })
}

bootstrap()
