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
          stage_events_id: 1,
          stage_id: 80,
          event_id: 1
        },
        {
          stage_events_id: 2,
          stage_id: 90,
          event_id: 2
        },
        {
          stage_events_id: 3,
          stage_id: 90,
          event_id: 2
        },
        {
          stage_events_id: 4,
          stage_id: 90,
          event_id: 8
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    
      return queryInterface.bulkDelete(
        'stage_events',
        {
          stage_events_id: [1,2,3,4]
        },
       {})
    
  },
};

