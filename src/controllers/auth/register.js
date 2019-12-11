const authenticated = require('../../middlewares/authenticated')

module.exports = function register(app) {
  app.post('/auth/register', require('./register-user'))
  app.post('/auth/login', require('./login'))
  app.get('/auth/whoami', authenticated, require('./whoami'))
}
