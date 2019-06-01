const express = require('express');
const router = express.Router();
const User = require('../models/user');


router.post('/', async (req, res) => {
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
