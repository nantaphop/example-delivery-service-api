const bcrypt = require('bcryptjs')
const User = require('../../models/user')
module.exports = async function(user) {
  if (!user.password) throw new Error('password is required')
  const hashPassword = await bcrypt.hash(user.password, 10)
  const userDoc = { ...user, password: hashPassword }
  const doc = await User.create(userDoc)
  return doc
}
