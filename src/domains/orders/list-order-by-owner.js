const Order = require('../../models/order')

module.exports = async function listOrderByOwner(user) {
  const result = await Order.findAll({
    where: {
      createdBy: user.username
    },
    include: 'items'
  })

  return result
}
