const Order = require('./order')
const OrderItem = require('./order-item')

OrderItem.belongsTo(Order)
Order.hasMany(OrderItem, { as: 'items' })
