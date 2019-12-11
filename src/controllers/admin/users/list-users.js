const listUsers = require('../../../domains/users/list-users')
module.exports = async function listAllUsers(req, res) {
  const users = await listUsers()
  res.send(users)
}
