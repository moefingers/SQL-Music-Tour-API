"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     **/
    await queryInterface.bulkInsert(
      "stages",
      [
        {
          stage_id: 80,
          stage_name: "Main Stage",
        },
        {
          stage_id: 90,
          stage_name: "Rear Stage",
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    
      return queryInterface.bulkDelete(
        'stages',
        {
          stage_id: [80,90]
        },
       {})
    
  },
};

