"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate({ Stage, StageEvent, MeetGreet, SetTime }) {

        // event belongs to many stages
        Event.belongsToMany(Stage, {
            foreignKey: "event_id",
            as: "stages", 
            through: StageEvent
        })

        // event has many meetgreets
        Event.hasMany(MeetGreet, {
            foreignKey: "event_id",
            as: "meet_greets"
        })
        //event has many settimes
        Event.hasMany(SetTime, {
            foreignKey: "event_id",
            as: "set_times"
        })
    }
}

  Event.init(
    {
      event_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.SMALLINT
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      date: {
        allowNull: false,
        type: DataTypes.DATE
      },
      start_time: {
        allowNull: false,
        type: DataTypes.DATE
      },
      end_time: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      modelName: "Event",
      tableName: "events",
      timestamps: false,
    }
  );
  return Event;
};
