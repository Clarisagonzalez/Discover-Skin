const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class quizData extends Model {
  getSummary() {
    // Get a summary of the quiz data
  }
}

quizData.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    skin_type: {
      type: DataTypes.STRING,
      defaultValue: "oily",
      allowNull: true,
    },
    eye_concerns:{
      type: DataTypes.STRING,
      defaultValue: "undereye bags and/or inflammation",
      allowNull: true,
    },
    serum_choice: {
      type: DataTypes.STRING,
      defaultValue: "hydration",
      allowNull: true,
    },
    toner_choice: {
      type: DataTypes.STRING,
      defaultValue: "anti-aging",
      allowNull: true,

    },
    spf_ingredient: {
      type: DataTypes.STRING(1234),
      defaultValue: "combination",
      allowNull: true,
    },
    lip_concerns: {
      type: DataTypes.STRING,
      defaultValue: "dullness",
      allowNull: true,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'quizData',
  }
);


module.exports = quizData;
