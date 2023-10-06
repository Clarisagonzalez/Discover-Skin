const router = require('express').Router();

const userRoutes = require('./userRoutes');
const quizRoutes = require('./quizRoutes');

console.log(quizRoutes);

router.use('/users', userRoutes);
router.use('/quiz', quizRoutes);

module.exports = router;

