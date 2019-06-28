const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  content: {type: String, required: true, minlength: 2, maxlength: 10},
  author: {type: String, required: true},
  title: {type: String, required: true},
  topic: {type: String, required: false},
}, {
  strict: 'throw',
  timestamps: true
});

module.exports = mongoose.model('Post', schema);
