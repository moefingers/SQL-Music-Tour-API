"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     **/
    await queryInterface.bulkInsert(
      "set_times",
      [
        {
          set_time_id: 10,
          event_id: 1,
          stage_id: 80,
          band_id: 69,
          start_time: new Date(),
          end_time: new Date(),
        },
        {
          set_time_id: 20,
          event_id: 2,
          stage_id: 90,
          band_id: 69,
          start_time: new Date(),
          end_time: new Date(),
        },
        {
          set_time_id: 21,
          event_id: 2,
          stage_id: 80,
          band_id: 69,
          start_time: new Date(),
          end_time: new Date(),
        },
        {
          set_time_id: 22,
          event_id: 2,
          stage_id: 90,
          band_id: 420,
          start_time: new Date(),
          end_time: new Date(),
        },
        {
          set_time_id: 30,
          event_id: 8,
          stage_id: 90,
          band_id: 420,
          start_time: new Date(),
          end_time: new Date(),
        },
        {
          set_time_id: 40,
          event_id: 8,
          stage_id: 90,
          band_id: 420,
          start_time: new Date(),
          end_time: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    
      return queryInterface.bulkDelete(
        'set_times',
        {
          set_time_id: [10,20,21,22,30,40]
        },
       {})
    
  },
};
