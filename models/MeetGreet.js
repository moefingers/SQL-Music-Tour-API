"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
    static associate({ Band, Event }) {
      // meetgreet belongs to band
      MeetGreet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "bands"
      })
      // meetgreet belongs to event
      MeetGreet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "events"
      })
    }
  }
  
  MeetGreet.init(
    {
      meet_greet_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.SMALLINT
      },
      event_id: {
        allowNull: false,
        type: DataTypes.SMALLINT
      },
      band_id: {
        allowNull: false,
        type: DataTypes.SMALLINT
      },
      meet_start_time: {
        allowNull: false,
        type: DataTypes.DATE
      },
      meet_end_time: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      modelName: "MeetGreet",
      tableName: "meet_greets",
      timestamps: false,
    }
  );
  return MeetGreet;
};
