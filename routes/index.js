var express = require('express');
var router = express.Router();
const messages = require('../data/messages')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages.messages });
});

module.exports = router;
