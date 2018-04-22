const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = mongoose.Schema({
  email: String,
  username: String,
  password: String,
});

module.exports = mongoose.model('User', User);