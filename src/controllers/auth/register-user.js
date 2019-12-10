const createUser = require('../../domains/users/create-user')
module.exports = async function registerUser(req, res, next) {
  const user = await createUser(req.body).catch(next)
  res.send(user)
}
