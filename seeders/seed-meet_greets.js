"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     **/
    await queryInterface.bulkInsert(
      "meet_greets",
      [
        {
          meet_greet_id: 1,
          event_id: 1,
          band_id: 69,
          meet_start_time: new Date(),
          meet_end_time: new Date(),
        },
        {
          meet_greet_id: 2,
          event_id: 2,
          band_id: 69,
          meet_start_time: new Date(),
          meet_end_time: new Date(),
        },
        {
          meet_greet_id: 3,
          event_id: 3,
          band_id: 69,
          meet_start_time: new Date(),
          meet_end_time: new Date(),
        },{
          meet_greet_id: 4,
          event_id: 7,
          band_id: 420,
          meet_start_time: new Date(),
          meet_end_time: new Date(),
        },
        {
          meet_greet_id: 5,
          event_id: 8,
          band_id: 420,
          meet_start_time: new Date(),
          meet_end_time: new Date(),
        },
        {
          meet_greet_id: 6,
          event_id: 9,
          band_id: 420,
          meet_start_time: new Date(),
          meet_end_time: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    
      return queryInterface.bulkDelete(
        'meet_greets',
        {
          meet_greet_id: [1,2,3,4,5,6]
        },
       {})
    
  },
};
