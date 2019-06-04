const mongoose = require('mongoose');
const PatternType = require('./patternTypes');
const User = require('./user');
const Schema = mongoose.Schema;


const patternSchema = new Schema({
  user_id: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  title: {type: String, required: true},
  author: {type: String. required: true},
  publication: {type: String, required: true},
  year: {type: Number, required: true},
  url: String,
  pattern: [{
    type: Schema.Types.ObjectId,
    ref: 'PatternType'
  }],
  text: [{
    text: {type: String, required: true},
    analysis: Schema.Types.Mixed,
    data: Schema.Types.Mixed
  }],
  commentary: {type: String, required: true}
});

module.exports = mongoose.model('Patterns', patternSchema);
