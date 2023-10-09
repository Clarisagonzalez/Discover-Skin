const router = require('express').Router();
const { userInfo, quizData, productInfo} = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  res.render('homepage');
});


router.get('/products', (req, res) => {
  res.render('products');
});


router.get('/quiz', (req, res) => {
  res.render('quiz');
});


router.get('/forum', (req, res) => {
  res.render('forum');
});

// logo image is connected to this. - Eric
router.get('/homepage', (req, res) => {
  res.render('homepage');
});


router.get('/results', (req, res) => {
  res.render('results');
});




router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }


  res.render('login');
});


// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await userInfo.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });
    console.log(userData);

    const user = userData.get({ plain: true });
    console.log('pineapple', user);
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;

// for referencing middleware check drive for mini project code
