/**
 * Build the error object / data to be rendered in the error template
 * @param {Object} errorData - error stacj & link for back button
 * @returns {{title: string, error: {stack: *, link: string, message: string, status: number}}}
 */
module.exports = errorData => {
  console.log("ERROR DATA TO BE GENERATED: ", errorData);
  return {
    title: "ERROR",
    error: {
      message: "Something went wrong!",
      status: 500,
      stack: errorData.stack.name === 'SequelizeDatabaseError' ? 'DataBase Error' : errorData.stack,
      link: `${errorData.link}` // get link from errorData
    }
  };
};
