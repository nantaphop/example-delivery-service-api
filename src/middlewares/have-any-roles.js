const _ = require('lodash')
const compose = require('compose-middleware').compose
const authenticated = require('./authenticated')

module.exports = roles =>
  compose(authenticated, function haveAnyRoles(req, res, next) {
    const userRoles = req.user.roles
    const pass = _.intersection(roles, userRoles).length > 0
    if (pass) next()
    else res.status(403).send()
  })
