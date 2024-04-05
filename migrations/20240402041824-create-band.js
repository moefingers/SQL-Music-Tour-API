'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bands', {
      band_id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      genre: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      available_start_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      end_time: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bands');
  }
};