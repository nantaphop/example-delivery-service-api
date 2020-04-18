const Order = require('../../models/order')
const OrderItem = require('../../models/order-item')
const { transaction } = require('../../libs/postgres')

module.exports = async function createOrder(user, body) {
  const result = await transaction(async t => {
    const order = await Order.create({ createdBy: user.username }, { transaction: t })
    const items = await Promise.all(
      body.items.map(item => OrderItem.create({ ...item, orderId: order.id }, { transaction: t }))
    )
    return order
  })
  return result
}
