const authenticated = require('../../middlewares/authenticated')

module.exports = function register(app) {
  app.post('/orders', authenticated, require('./create-order'))
  app.get('/orders', authenticated, require('./my-orders'))
}
