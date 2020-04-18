'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('order_items', {
      id: Sequelize.DataTypes.INTEGER,
      createdAt: Sequelize.DataTypes.DATE,
      item: Sequelize.DataTypes.STRING,
      quantity: Sequelize.DataTypes.INTEGER,
      orderId: {
        type: Sequelize.INTEGER,
        references: { model: 'orders', key: 'id' }
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('order_items')
  }
}
