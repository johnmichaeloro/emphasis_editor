const express = require('express');

const router = express.Router();

const Entry = require('../models/entry');

router.get('/', async (req, res, next) => {
  console.log(req.body, ' this is get all');
  try{
    const allEntries = await Entry.find();
    res.json({
      status: 200,
      data: allEntries
    });
  } catch(err){
    res.send(err)
  }
});

router.post('/', async (req, res) => {
  try{
    console.log(req.body, ' this is req.body');
    const createdEntry = await Entry.create(req.body);
    console.log('response happening?');
    res.json({
      status: 200,
      data: createdEntry
    });
  } catch(err){
    console.log(err);
    res.send(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const foundEntry = await Entry.findById(req.params.id);
    res.json({
      status: 200,
      data: foundEntry
    });
  } catch(err){
    res.send(err);
  }
});

router.put('/:id', async (req, res) => {
  try{
    const updatedEntry = await Entry.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      status: 200,
      data: updatedEntry
    });
  } catch(err){
    res.send(err)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedEntry = await Entry.findByIdAndRemove(req.params.id);
      res.json({
        status: 200,
        data: deletedEntry
      });
  } catch(err){
    res.send(err);
  }
});

module.exports = router;
