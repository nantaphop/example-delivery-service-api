module.exports = function register(app){
    app.get('/system/health', require('./health-check'))
}