"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SetTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ SetTime, Band, Event, Stage }) {
      //settime belongs to band
      SetTime.belongsTo(Band, {
        foreignKey: "band_id",
        as: "bands",
      });
      //set time belongs to event
      SetTime.belongsTo(Event, {
        foreignKey: "event_id",
        as: "events",
      });
      //set time belongs to stage
      SetTime.belongsTo(Stage, {
        foreignKey: "stage_id",
        as: "stages",
      });
    }
  }

  SetTime.init(
    {
      set_time_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.SMALLINT,
      },
      event_id: {
        allowNull: false,
        type: DataTypes.SMALLINT,
      },
      stage_id: {
        allowNull: false,
        type: DataTypes.SMALLINT,
      },
      band_id: {
        allowNull: false,
        type: DataTypes.SMALLINT,
      },
      start_time: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      end_time: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "SetTime",
      tableName: "set_times",
      timestamps: false,
    }
  );
  return SetTime;
};
