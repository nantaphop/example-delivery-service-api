module.exports = function register(app) {
  app.post('/auth/register', require('./register-user'))
}
