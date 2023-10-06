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
      allowNull: false,
    },
    skinconcerns:{
      type: DataTypes.STRING
    },
    ingredients: {
      type: DataTypes.STRING,
    },
    // Implementing a user. NEED TO WORK ON THIS !! -ERIC
    // date_created: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   defaultValue: DataTypes.NOW,
    // }
 
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'user',
    //     key: 'id',
    //   },
    // },
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
