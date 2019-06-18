const express = require('express'),
  router = express.Router();

const  SubRedditController = require('../controllers/subReddits');
const  PostController = require('../controllers/posts');

/* GET home page. */
router.get('/', SubRedditController.getAll_get);

router.get('/sub/:subReddit_id?', SubRedditController.getOne_get);

router.post('/', SubRedditController.addPost_post);

router.get('/sub/:subReddit_id?/post/:post_id?', PostController.getOnePost_get);

router.post('/comment', PostController.addComment_post);


module.exports = router;