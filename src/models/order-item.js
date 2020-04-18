const { DataTypes } = require('sequelize')
const { getSequelize } = require('../libs/postgres')

const Order = require('./order')

const OrderItem = getSequelize().define(
  'order_item',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    item: { type: DataTypes.STRING, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false }
  },
  {}
)

module.exports = OrderItem
