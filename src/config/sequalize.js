// For another env except local, infomation should be provided by CI server
module.exports = {
  development: {
    username: process.env.POSTGRES_USERNAME || 'delivery',
    password: process.env.POSTGRES_PASSWORD || 'password',
    database: process.env.POSTGRES_DB || 'delivery',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: process.env.POSTGRES_PORT || 5432,
    dialect: 'postgres'
  }
}
