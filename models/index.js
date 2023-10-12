const userInfo = require('./userInfo');
const quizData = require('./quizData');
const productInfo = require('./productInfo');
const research = require('./skincareData');
const forum = require('./forum');
const skincareData = require('./skincareData');

// REMINDER WE NEED TO DO THIS! - ERIC
// User.hasMany(SkinType, {
//   foreignKey: 'skinType'
 // });
// SkinType.hasMany(Products, {
//   foreignKey: 'skin_id' 
// });

productInfo.belongsTo(quizData, {
  foreignKey: 'skin_id'
});

module.exports = { userInfo, quizData, productInfo, forum, skincareData};