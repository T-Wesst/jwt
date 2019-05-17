const { User } = require('../../models');

module.exports = {
  login: async (req, res) => {
    try {
      let user = await User.findOne({ username: req.body.username });
      try {
        let matchedPassword = await user.comparePassword(req.body.password);
        if (matchedPassword) {
          res.redirect('/users/authorized');
        } else {
          res.send('Sorry the username or password is incorrect');
        }
      } catch (err) {
        if (err) throw err;
      }
    } catch (err) {
      if (err) throw err;
    }
  },
  logout: function(req, res) {
    res.send('log out route');
  },
  signup: async (req, res) => {
    try {
      let user = await User.create(req.body);
      res.redirect('/users/authorized');
    } catch (err) {
      if (err) throw err;
    }
  },
  authorized: async (req, res) => {
    try {
      res.send(
        'you are authorized! Dropping Database...Beep...Boop...Bop Goodbye'
      );
      User.deleteMany({}, err => {
        console.log('collection removed');
      });
    } catch (err) {
      if (err) throw err;
    }
  }
};
