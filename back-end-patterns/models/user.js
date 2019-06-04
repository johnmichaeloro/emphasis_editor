const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: Schema.Types.ObjectId,
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true, unique: true},
});

module.exports = mongoose.model('User', UserSchema)
