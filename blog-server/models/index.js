const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect(
  'mongodb+srv://master:asingh1999@cluster0-ekrao.mongodb.net/test?retryWrites=true&w=majority',
  { keepAlive: true, useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Database connected');
  }
);

module.exports.User = require('./user');
module.exports.Movie = require('./movie');
