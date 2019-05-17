const { User } = require('../../models');

module.exports = {
  login: function(req, res) {
    res.send('login route');
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
      res.send('you are authorized! Goodbye');
      User.deleteMany({}, err => {
        console.log('collection removed');
      });
    } catch (err) {
      if (err) throw err;
    }
  }
};
