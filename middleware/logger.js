// @desc    Logs request to console
const logger = (req, res, next) => {
  // whichever route uses this middleware will has access to the "hello" variable from the req parameters
  // req.hello = "Hello World";
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
};

module.exports = logger;
