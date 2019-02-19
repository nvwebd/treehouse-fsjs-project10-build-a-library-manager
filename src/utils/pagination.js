module.exports = ({...data}) => {
  return {
    type: data.paginationType,
    currentPage: typeof data.page === 'string' ? parseInt(data.page) : data.page,
    pages: Math.floor(data.rowCount / 10 ),
  };
};
