const genJwt = require('./gen-jwt')
const getByPassword = require('../users/get-by-password')

module.exports = async function loginWithPassword(credential) {
  const user = await getByPassword(credential)
  if (!user) throw new Error('Invalid Credential')
  console.info(`Loggedin: ${user.username}`)
  const userObj = user.toJSON()
  const payload = { username: userObj.username }
  return genJwt(payload)
}
