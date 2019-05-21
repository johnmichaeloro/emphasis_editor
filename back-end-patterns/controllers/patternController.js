const express = require('express');
const router = express.Router();
const Patterns = require('../models/patterns');

router.get('/', async (req, res, next) => {
  console.log('this is get all patterns');
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
  console.log(req.body, 'this is req.body');
  try{
    //API call to Emphasis would go here.
    //I would need to send req.body.text
    //I would want to send the req.body.text to string parser first
    // I would make API calls with each block of text
    // When I receive the 
    const createdPattern = await Patterns.create(req.body);
    res.json({
      status: 200,
      data: createdPattern
    });
    // You receive the text from the front end
    // You send it to the Api and receive the data
    // you use the data and text with Sentences.js to create an...
    // array of sentences (that contain both color and text for the given sentence)
    // You send that array to the front end and put it on the page in a series of spans...
    // that have their color as a class name.
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
router.use((req, res, next)=>{
  console.log("here!!!");
  console.log(req.method);
  next();
})
router.put('/:id', async (req, res) => {
  console.log('inside put route');
  try{
    const updatedPattern = await Patterns.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      status: 200,
      data: updatedPattern
    });
  } catch(err) {
    res.send(err)
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
