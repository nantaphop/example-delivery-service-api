const createUser = require('../../domains/users/create-user')
module.exports = async function registerUser(req, res) {
  const user = await createUser(req.body)
  res.send(user)
}
