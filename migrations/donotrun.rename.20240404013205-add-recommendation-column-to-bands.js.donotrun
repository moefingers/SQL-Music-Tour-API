'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'bands', // table name
      'recommendation', // new field name
      Sequelize.STRING) // data type
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'bands', // table name
      'recommendation' // new field name
      )
  }
};
