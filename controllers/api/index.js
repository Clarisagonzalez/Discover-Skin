const router = require('express').Router();

const userRoutes = require('./userRoutes');
const quizRoutes = require('./quizRoutes');
const resultsRoutes = require('./resultsRoutes');

console.log(quizRoutes);
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use('/users', userRoutes);
router.use('/quiz', quizRoutes);
router.use('/result', resultsRoutes);

module.exports = router;

