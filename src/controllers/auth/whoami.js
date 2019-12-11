module.exports = function whoami(req, res) {
  res.send(req.user)
}
