const express = require('express'),
  router = express.Router();

const  SubRedditController = require('../controllers/subReddits');

/* GET home page. */
router.get('/', SubRedditController.getAll_get);

router.get('/:subReddit_id?', SubRedditController.getOne_get);

router.post('/', SubRedditController.addPost_post);


module.exports = router;