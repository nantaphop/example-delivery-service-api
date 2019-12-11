const User = require('../../models/user')
module.exports = function listUsers(opts) {
  return User.find()
}
