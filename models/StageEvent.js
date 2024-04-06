"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StageEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StageEvent.init(
    {
      stage_events_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.SMALLINT
      },
      stage_id: {
        allowNull: false,
        type: DataTypes.SMALLINT
      },
      event_id: {
        allowNull: false,
        type: DataTypes.SMALLINT
      }
    },
    {
      sequelize,
      modelName: "StageEvent",
      tableName: "stage_events",
      timestamps: false,
    }
  );
  return StageEvent;
};
