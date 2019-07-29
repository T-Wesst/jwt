const express = require('express');
const app = express();
const logger = require('morgan');
const { config } = require('dotenv');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user');
// DATABASE CONNECTION
require('./config/mongoDB');
// ROUTE LOGGER
app.use(logger('dev'));
// Parse JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// load environment variables
config();
// Parse Cookies
app.use(cookieParser(process.env.SECRET));
// ROUTES
app.use('/users', userRoutes);
console.log('a change made');

app.listen(process.env.PORT || 3001);
