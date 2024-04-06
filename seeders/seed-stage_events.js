"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     **/
    await queryInterface.bulkInsert(
      "stage_events",
      [
        {
          stage_events_id: 81,
          stage_id: 80,
          event_id: 1
        },
        {
          stage_events_id: 97,
          stage_id: 90,
          event_id: 7
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    
      return queryInterface.bulkDelete(
        'stage_events',
        {
          stage_events_id: [81,97]
        },
       {})
    
  },
};

