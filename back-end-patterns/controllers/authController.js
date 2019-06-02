const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require('../models/user');

router.post('/login', async (req, res) => {
  console.log(req.body, 'this is the user session upon login');
  try{
    User.findOne({username: req.body.username}, (err, foundUser) => {
      if(err){
        console.log(err, 'this was the login error');
      } else if (!foundUser) {
        req.session.loginAttempt = false;
        console.log('failed to login');
        res.send('login failed');
      } else {
        console.log('this is the foundUser in bcrypt', foundUser);
        console.log('Comparing bcrypt password hash.');
        console.log('passwords match');
        res.json({
          status: 200,
          data: 'login successful'
        });
      }
    });
  } catch(err) {
    console.log(err);
  }
});

router.post('/register', async (req, res) => {
  console.log(req.body, 'this is the user session upon registration');
  try{
    const user = await User.create(req.body);
    req.session.logged = true;
    req.session.username = req.body.username;
    res.json({
      status: 200,
      data: 'registration successful'
    });
  } catch(err){
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
