const User = require('../../models/user')
module.exports = async function(user) {
  const doc = await User.create(user)
  return doc
}
