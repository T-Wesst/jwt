const { User } = require('../../models');
module.exports = {
  login: function(req, res) {
    res.send('login route');
  },
  logout: function(req, res) {
    res.send('log out route');
  },
  signup: function(req, res) {
    res.send('signup route');
  }
};
