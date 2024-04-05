"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     **/
    await queryInterface.bulkInsert(
      "bands",
      [
        {
          band_id: 69,
          name: "Jingle Jongle",
          genre: "Jangle",
          available_start_time: new Date(),
          end_time: new Date(),
        },
        {
          band_id: 420,
          name: "Dingle Dongle",
          genre: "Dangle",
          available_start_time: new Date(),
          end_time: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    
      return queryInterface.bulkDelete(
        'bands',
        {
          band_id: [69, 420]
        },
       {})
    
  },
};
