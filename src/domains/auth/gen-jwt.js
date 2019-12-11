const jwt = require('jsonwebtoken')
const TOKEN_SECRET = process.env.TOKEN_SECRET
const TOKEN_EXPIRED_IN = process.env.TOKEN_EXPIRED_IN

// https://www.npmjs.com/package/jsonwebtoken

module.exports = function genJwt(payload) {
  return jwt.sign(payload, TOKEN_SECRET, { expiresIn: TOKEN_EXPIRED_IN })
}
