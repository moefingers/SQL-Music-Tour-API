"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Set_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Set_time.init(
    {
      set_time_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
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
      modelName: "Set_time",
      tableName: "set_time",
      timestamps: false,
    }
  );
  return Set_time;
};
