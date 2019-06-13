const express = require('express'),
    router = express.Router();

const  PostController = require('../controllers/post');

/* GET home page. */
router.get('/', PostController.getAll_get);

router.get('/:post_id', PostController.getOne_get);

router.post('/comment', PostController.addChat_post);


module.exports = router;