/**
 * normalizePort normalizes the application port
 * @param val - String or Number - port to be set
 * @returns {*} - Port number or false if input is not a number
 */
exports.normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
};
