/**
 * builds an object for the site pagination
 * @param {object} data - data object for pagination build
 * @returns {{pages: Number, type: String, currentPage: Number}}
 */
module.exports = ({ ...data }) => {
  return {
    type: data.paginationType,
    currentPage:
      typeof data.page === "string" ? parseInt(data.page) : data.page,
    pages: Math.floor(data.rowCount / 10)
  };
};
