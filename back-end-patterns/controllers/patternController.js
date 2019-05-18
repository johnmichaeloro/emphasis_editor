const express = require('express');
const router = express.Router();
const Pattern = require('../models/patterns');

router.get('/', async (req, res, next) => {
  try{
    const allPatterns = await Pattern.find();
    res.json({
      status: 200,
      data: allPatterns
    });
  } catch(err) {
    res.send(err);
  };
});

router.post('/', async (req, res) => {
  try{
    const createdPattern = await Pattern.create(req.body);
    res.json({
      status: 200,
      data: createdPattern
    });
  } catch(err) {
    res.send(err);
  }
});

module.exports = router;
