var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.session.logedIn){
     res.render('user');
  }
  else{
    res.redirect('/')
  }
});

module.exports = router;
