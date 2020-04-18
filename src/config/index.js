module.exports = {
  server: {
    port: process.env.PORT
  },
  db: {
    mongodb: {
      url: process.env.MONGO_CONNECTION
    },
    postgres: {
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT
    }
  },
  security: {
    token: {
      secret: process.env.TOKEN_SECRET,
      expiredIn: process.env.TOKEN_EXPIRED_IN
    }
  }
}
