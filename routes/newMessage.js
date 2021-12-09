var express = require('express');
var router = express.Router();
const messages = require('../data/messages');

/* GET users listing. */
router.get('/', (req,res)=>{
  res.render('newMessage', {title:"Add Message"})
})

router.post('/', function(req, res, next) {
  messages.updateMessages({"text":req.body.text, "user":req.body.user, "added": new Date()});
  res.redirect('/')
});

module.exports = router;
