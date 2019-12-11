const getUserByToken = require('../users/get-by-username')
module.exports = async function jwtTokenHandler(jwt_payload, done) {
  try {
    const user = await getUserByToken(jwt_payload)
    if (user) {
      done(undefined, user)
    } else {
      done(undefined, false)
    }
  } catch (err) {
    done(err, undefined)
  }
}
