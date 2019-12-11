const User = require('../../models/user')
module.exports = async function getByUsername({ username }) {
  const user = await User.findOne({ username })
  return user
}
