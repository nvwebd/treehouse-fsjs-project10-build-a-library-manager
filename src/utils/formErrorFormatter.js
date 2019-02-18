module.exports = errorArray => {
  const errors = {};

  errorArray.errors.map(
    error => (errors[error.path] = { message: error.message })
  );

  return errors;
};
