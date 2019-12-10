module.exports = function healthCheck(req, res){
    res.status(200)
    res.json({ ready: true })
}
