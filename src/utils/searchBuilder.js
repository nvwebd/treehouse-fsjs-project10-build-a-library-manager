const Sequelize = require("sequelize");
const Op = Sequelize.Op;

/**
 * [exports all columns of the or function to search through a model]
 * @param  {[Object]} searchData [searchType: which table is to be searched, search: the search string]
 * @return {[type]}            [description]
 */
module.exports = ({ ...searchData }) => {
  switch (searchData.searchType) {
    case "books": {
      return [
        { title: { [Op.like]: `%${searchData.search}%` } },
        { author: { [Op.like]: `%${searchData.search}%` } },
        { genre: { [Op.like]: `%${searchData.search}%` } },
        { first_published: { [Op.like]: `%${searchData.search}%` } }
      ];
    }

    case "patrons": {
      return [
        { first_name: { [Op.like]: `%${searchData.search}%` } },
        { last_name: { [Op.like]: `%${searchData.search}%` } },
        { address: { [Op.like]: `%${searchData.search}%` } },
        { email: { [Op.like]: `%${searchData.search}%` } },
        { library_id: { [Op.like]: `%${searchData.search}%` } },
        { zip_code: { [Op.like]: `%${searchData.search}%` } }
      ];
    }

    default:
      return {};
  }
};
