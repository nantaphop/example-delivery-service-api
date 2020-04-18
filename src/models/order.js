const { DataTypes } = require('sequelize')
const { getSequelize } = require('../libs/postgres')

const OrderItem = require('./order-item')

const Order = getSequelize().define(
  'order',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    createdBy: { type: DataTypes.STRING }
  },
  {}
)

module.exports = Order
