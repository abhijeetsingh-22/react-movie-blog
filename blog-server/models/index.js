const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect(
  process.env.MONGODB_URI,
  { keepAlive: true, useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Database connected');
  }
);

module.exports.User = require('./user');
module.exports.Movie = require('./movie');
