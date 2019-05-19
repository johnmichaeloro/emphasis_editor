const express = require('express');
const router = express.Router();
const Patterns = require('../models/patterns');

router.get('/', async (req, res, next) => {
  try{
    const allPatterns = await Patterns.find();
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
    const createdPattern = await Patterns.create(req.body);
    res.json({
      status: 200,
      data: createdPattern
    });
  } catch(err) {
    res.send(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try{
    const foundPattern = await Patterns.findById(req.params.id);
    res.json({
      status: 200,
      data: foundPattern
    });
  } catch(err) {
    res.send(err);
  }
});

router.delete('/:id', async (req, res) => {
  try{
    const deletedPattern = await Patterns.findByIdAndRemove(req.params.id);
    res.json({
      status: 200,
      data: deletedPattern
    });
  } catch(err) {
    res.send(err);
  }
});

module.exports = router;
