const mongoose = require('mongoose');

const { Schema } = mongoose;

const DiscussionSchema = new Schema({

  name: String,
  title: String,
  description: String,
  created: { type: Date, default: Date.now },

});

const Discussion = mongoose.model('Discussion', DiscussionSchema);

module.exports = Discussion;
