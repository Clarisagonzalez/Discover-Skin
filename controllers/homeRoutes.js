const router = require('express').Router();
const { userInfo, quizData, productInfo} = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  res.render('home');
});


router.get('/products', (req, res) => {
  res.render('products');
});


router.get('/quiz', (req, res) => {
  res.render('quiz');
});


router.get('/blog', (req, res) => {
  res.render('blog');
});


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


    const user = userData.get({ plain: true });
    console.log('pineapple');
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;

// project routes -- here for reference
// router.get('/project/:id', async (req, res) => {
//   try {
//     const projectData = await Project.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });


//     const project = projectData.get({ plain: true });


//     res.render('project', {
//       ...project,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
