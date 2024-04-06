"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    static associate({ Event, StageEvent, SetTime }) {
      // events
      Stage.belongsToMany(Event, {
        foreignKey: "stage_id",
        as: "events",
        through: "StageEvent"
      })

      //stage has many settimes
      Stage.hasMany(SetTime, {
        foreignKey: "stage_id",
        as: "set_times"
      })

      
    }
  }
  

  Stage.init(
    {
      stage_id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
      },
      stage_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Stage",
      tableName: "stages",
      timestamps: false,
    }
  );
  return Stage;
};
