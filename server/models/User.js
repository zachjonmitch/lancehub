const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const { Schema } = mongoose;

const User = new Schema({
  email: String,
  username: String,
  password: String,
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
