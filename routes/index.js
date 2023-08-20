var express = require('express');
var router = express.Router();

const post_controller = require('../controllers/postCtrl');

/* GET home page. */
router.get('/', post_controller.index);

router.get('/post/:id', post_controller.post_detail);

router.post('/post/:id', post_controller.post_comment);

module.exports = router;
