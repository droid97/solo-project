'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      name: {
        allowNull:false,
        type: Sequelize.STRING
      },
      address: {
        allowNull:false,
        type: Sequelize.STRING
      },
      city: {
        allowNull:false,
        type: Sequelize.STRING
      },
      state: {
        allowNull:false,
        type: Sequelize.STRING
      },
      country: {
        allowNull:false,
        type: Sequelize.STRING
      },
      price: {
        allowNull:false,
        type: Sequelize.DECIMAL
      },
      title: {
        allowNull:false,
        type: Sequelize.STRING
      },
      description: {
        allowNull:false,
        type: Sequelize.STRING
      },
      imageUrl: {
        allowNull:false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Properties');
  }
};
