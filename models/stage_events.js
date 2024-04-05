"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Stage_event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stage_event.init(
    {
      stage_events_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
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
      modelName: "Stage_event",
      tableName: "stage_events",
      timestamps: false,
    }
  );
  return Stage_event;
};
