const { application } = require('express');
var express = require('express');
const session = require('express-session');
const app = require('../app');
const { render } = require('../app');
const { route } = require('./users');
var router = express.Router();

var name="admin"
var pass="123"

/* GET home page. */
router.get('/',function(req, res) {
  if(req.session.logedIn){
    res.redirect('/users')
  }
  else{
    res.render('index',{errorMessage:req.session.hello})
    req.session.hello=false;
  }
});

router.post('/',function(req,res){
  let name1=req.body.fname
  let pass1=req.body.pass
  if(name1===name&&pass1===pass){
        req.session.logedIn=true;
        res.redirect('/users')
  }
  else{
    req.session.hello='Invalid user or password'
    res.redirect("/")
  }
});

router.post('/logout',function(req,res){
  // req.session.destroy();

  console.log(req.session);
  delete req.session.logedIn;
  console.log(req.session);
  res.redirect('/');
})

module.exports = router;
