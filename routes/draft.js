var express = require('express');
var router = express.Router();

const draft_controller = require('../controllers/draftCtrl');
const { route } = require('.');

// /* GET home page. */
router.get('/', draft_controller.post_list);

router.get('/create', draft_controller.create_get);

router.post('/create', draft_controller.create_post);

router.get('/edit/:id', draft_controller.update_post_get);

router.post('/edit/:id', draft_controller.update_post_post);



// router.get('/post/:id', post_controller.post_detail);

// router.post('/post/:id', post_controller.post_comment);

module.exports = router;
