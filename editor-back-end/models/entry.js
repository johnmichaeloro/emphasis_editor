const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  title: String,
  description: String
});

mongoose.exports = mongoose.model('Entry', entrySchema);
