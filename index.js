require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const glob = require('glob')
const path = require('path')

const config = require('./src/config')
const mongodb = require('./src/libs/mongodb')
const postgres = require('./src/libs/postgres')

const logger = require('./src/libs/logger')
const jwtTokenHandler = require('./src/domains/auth/jwt-token-handler')

const app = express()

const PORT = config.server.port

async function bootstrap() {
  await mongodb.connect()
  await postgres.connect()

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

  const controllerRegisters = glob.sync('**/controllers/**/register.js')
  controllerRegisters.forEach(register => {
    logger.info(`Register controller: ${register}`)
    require(path.resolve(register))(app)
  })
  app._router.stack.forEach(function(r) {
    if (r.route && r.route.path) {
      logger.info(
        `Available Route: ${Object.keys(r.route.methods)
          .map(s => s.toUpperCase())
          .join('|')} ${r.route.path}`
      )
    }
  })

  // Config Error Middleware
  app.use(require('./src/middlewares/error-handler'))

  const server = app.listen(PORT, () => {
    logger.info(`listening at ${server.address().port}`)
  })
}

bootstrap()
