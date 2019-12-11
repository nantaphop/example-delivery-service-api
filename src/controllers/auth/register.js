module.exports = function register(app) {
  app.post('/auth/register', require('./register-user'))
  app.post('/auth/login', require('./login'))
}
