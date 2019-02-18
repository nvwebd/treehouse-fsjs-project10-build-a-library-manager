"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("loans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      book_id: {
        type: Sequelize.INTEGER
      },
      patron_id: {
        type: Sequelize.INTEGER
      },
      loaned_on: {
        type: Sequelize.DATEONLY
      },
      return_by: {
        type: Sequelize.DATEONLY
      },
      returned_on: {
        type: Sequelize.DATEONLY
      }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable("loans");
  }
};
