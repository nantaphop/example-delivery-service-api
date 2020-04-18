module.exports = {
  server: {
    port: process.env.PORT
  },
  db: {
    mongodb: {
      url: process.env.MONGO_CONNECTION
    },
    postgres: {
      url: process.env.POSTGRES_CONNECTION
    }
  },
  security: {
    token: {
      secret: process.env.TOKEN_SECRET,
      expiredIn: process.env.TOKEN_EXPIRED_IN
    }
  }
}
