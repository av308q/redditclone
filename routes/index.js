const express = require('express');
const router = express.Router();

const  SubRedditController = require('../controllers/subReddits');

router.get('/', SubRedditController.getAll_get);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('template', { 
    locals: {
      title: 'Home Page',
      is_logged_in: req.session.is_logged_in,
      userName: req.session.first_name,
      subRedditList: allSubReddits
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

module.exports = router;