const mongoose = require('mongoose');

const { Schema } = mongoose;

const MessageSchema = new Schema({

  name: String,
  message: String,
  sent: { type: Date, default: Date.now },

});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
