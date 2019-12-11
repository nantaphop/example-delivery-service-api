const haveAnyRoles = require('../../../middlewares/have-any-roles')

module.exports = function register(app) {
  app.get('/admin/users', haveAnyRoles(['admin']), require('./list-users'))
}
