'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING
      },
      password: {
        type: DataTypes.VIRTUAL,
      },
      age: {
        type: Sequelize.INTEGER
      },
      sex: {
        type: Sequelize.INTEGER
      },
      intro: {
        type: Sequelize.TEXT
      },
      min: {
        type: Sequelize.INTEGER
      },
      max: {
        type: Sequelize.INTEGER
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};