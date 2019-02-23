/*
 * [exports an object of errors with key and value]
 * @param  {[Array]} errorArray [array of all errors returned from sequelize validation]
 * @return {[Object]}            [object of errors]
 */
module.exports = errorArray => {
  const errors = {};

  errorArray.errors.map(
    error =>
      (errors[error.path] = {
        message:
          error.type === "notNull Violation"
            ? "This field cannot be empty!"
            : error.message
      })
  );

  return errors;
};
