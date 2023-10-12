const userInfo = require('./userInfo');
const quizData = require('./quizData');
const productInfo = require('./productInfo');
const research = require('./skincareData');
const forum = require('./forum');
const skincareData = require('./skincareData');

productInfo.belongsTo(quizData, {
  foreignKey: 'skin_id'
});

module.exports = { userInfo, quizData, productInfo, forum, skincareData};