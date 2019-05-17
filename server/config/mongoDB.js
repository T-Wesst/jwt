const mongoose = require('mongoose');
const url = process.env.DATABASEURL || 'mongodb://localhost/jwt';
mongoose.set('debug', true);
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  keepAlive: true
});
