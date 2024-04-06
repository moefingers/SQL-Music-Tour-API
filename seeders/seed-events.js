"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     **/
    await queryInterface.bulkInsert(
      "events",
      [
        {
          event_id: 1,
          name: "Jinglefest",
          date: new Date(),
          start_time: new Date(),
          end_time: new Date(),
        },
        {
          event_id: 2,
          name: "Jingledongle",
          date: new Date(),
          start_time: new Date(),
          end_time: new Date(),
        },
        {
          event_id: 3,
          name: "Event 3",
          date: new Date(),
          start_time: new Date(),
          end_time: new Date(),
        },
        {
          event_id: 7,
          name: "Event 7",
          date: new Date(),
          start_time: new Date(),
          end_time: new Date(),
        },
        {
          event_id: 8,
          name: "Dingledays",
          date: new Date(),
          start_time: new Date(),
          end_time: new Date(),
        },
        {
          event_id: 9,
          name: "Event 9",
          date: new Date(),
          start_time: new Date(),
          end_time: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    
      return queryInterface.bulkDelete(
        'events',
        {
          event_id: [1,2,3,7,8,9]
        },
       {})
    
  },
};
