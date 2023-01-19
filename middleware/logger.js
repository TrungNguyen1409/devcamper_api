// Logger middleware to log and monitor all API calls in the app
// we will have access to all the attribute of req in the routes


// @desc Logs request to console
const logger = (req, res, next) => {
    console.log(
      `${req.method} ${req.protocol}://${req.get('host')} ${req.originalUrl}`
    );
    next();
  };


module.exports = logger;