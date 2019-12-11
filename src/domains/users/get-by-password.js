const bcrypt = require('bcryptjs')
const User = require('../../models/user')
module.exports = async function getByPassword({ username, password }) {
  const user = await User.findOne({ username })
  if (!user) return undefined
  const ok = await bcrypt.compare(password, user.password)
  return ok ? user : undefined
}
