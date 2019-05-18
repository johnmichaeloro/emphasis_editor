const mongoose = require('mongoose');

const patternSchema = new mongoose.Schema({
  title: String,
  author: String,
  publication: String,
  year: String,
  url: String,
  pattern: String,
  description: String,
  text: String,
  commentary: String
});

module.exports = mongoose.model('Pattern', patternSchema);
