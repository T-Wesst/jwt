const express = require('express');
const app = express();
const logger = require('morgan');
const userRoutes = require('./routes/user');
// DATABASE CONNECTION
require('./config/mongoDB');
// ROUTE LOGGER
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ROUTES
app.use('/users', userRoutes);

app.listen(process.env.PORT || 3001);
