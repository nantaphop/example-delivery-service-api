const loginWithPassword = require('../../domains/auth/login-with-password')
module.exports = async function login(req, res, next) {
  const token = await loginWithPassword(req.body).catch(next)
  res.json({ token })
}
