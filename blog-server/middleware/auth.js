const jwt = require('jsonwebtoken');

exports.isLoggedin = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (decoded) {
        return next();
      }
      return next({ status: 401, message: 'please log in first' });
    });
  } catch (e) {
    return next({ status: 401, message: 'please log in first' });
  }
};

exports.isCorrectUser = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (decoded && decoded.id == req.params.id) {
        return next();
      } else return next({ status: 401, message: 'Unauthorized' });
    });
  } catch (err) {
    return next({ status: 401, message: 'Unauthorized' });
  }
};
