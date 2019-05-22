const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patternSchema = new Schema({
  title: String,
  author: String,
  publication: String,
  year: String,
  url: String,
  pattern: String,
  description: String,
  text: [{
    text: String,
    analysis: Schema.Types.Mixed,
    data: Schema.Types.Mixed
  }],
  commentary: String
});

module.exports = mongoose.model('Patterns', patternSchema);
