const userInfo = require('./userInfo');
const quizData = require('./quizData');
const productInfo = require('./productInfo')

// REMINDER WE NEED TO DO THIS! - ERIC
// User.hasMany(SkinType, {
//   foreignKey: 'skinType'
 // });
// SkinType.hasMany(Products, {
//   foreignKey: 'skin_id' 
// });

Products.belongsTo(quizData, {
  foreignKey: 'skin_id'
});


module.exports = { userInfo, quizData, productInfo};