const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TypeSchema = new Schema({
  _id: Schema.Types.ObjectId,
  patternType: {type: String},
  description: {type: String}
});

module.exports = mongoose.model('PatternType', TypeSchema);
