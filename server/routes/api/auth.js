const express = require('express');
const passport = require('passport');
const User = require('../../models/User');

const router = express.Router();

router.post('/register', (req, res) => {
  const newUser = new User(req.body);

  // Save the user with Passport's register method
  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      return res.send(JSON.stringify({ error: err }));
    }
    return res.send(JSON.stringify(user));
  });
});

router.post('/login', (req, res) => {
  passport.authenticate('local')(req, res, () => {
    if (req.user) {
      return res.send(JSON.stringify(req.user));
    }
    return res.send(JSON.stringify({ error: 'There was an error loggin in' }));
  });
});

module.exports = router;
