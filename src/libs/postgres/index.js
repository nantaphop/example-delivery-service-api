const Sequelize = require('sequelize')

const config = require('../../config')

const connect = async () => {
    const sequelize = new Sequelize(config.db.postgres.url);
    try {
        const success = await sequelize.authenticate()
        console.log('Connected to Postgres.');
        return sequelize
    } catch (err) {
        console.error('Unable to connect to Postgres:', err);
        throw err
    }
}

module.exports = {
    connect
}