const express = require("express");
const router = express.Router();
const models = require("./../db/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const formErrorCreator = require("./../utils/formErrorFormatter");
const dateFormater = require("./../utils/dateFormater");
const pagination = require("./../utils/pagination");
const searchBuilder = require("./../utils/searchBuilder");

/**
 * /books route
 */
router.get("/", (req, res, next) => {
  /**
   * save search string
   * @type {*|string}
   */
  const search = req.query.search || "";

  /**
   * create query object
   * @type {{offset: *, limit: number, order: string[][]}}
   */
  const query = {
    limit: 10,
    offset: req.query.page ? req.query.page * 10 : null,
    order: [["id", "DESC"]]
  };

  /**
   * check if a page number is sent with the request
   * if true add offset to the query object
   */
  if (req.query.length !== 0 && req.query.page) {
    query.offset = req.query.page * query.limit;
  }

  /**
   * check if a search string was sent with the request
   * if true build the search query for the model
   */
  if (req.query.search) {
    query.where = {
      [Op.or]: searchBuilder({
        searchType: "books",
        search
      })
    };
  }

  /**
   * call the DB with sequelize to get the data needed for page rendering
   */
  models.books
    .findAndCountAll(query)
    .then(books => {
      res.render("pages/books/all_books", {
        title: "Books",
        count: books.count,
        pagination: pagination({
          page: req.query.page || 1,
          paginationType: "books",
          rowCount: books.count
        }),
        books: books.rows,
        activeNavTab: "books",
        activeTab: "all",
        searchType: "/books",
        search
      });
    })
    .catch(error => {
      const err = {
        manualError: true,
        stack: error,
        link: "/books"
      };
      next(err);
    });
});

/**
 * /book_details/:id route
 */
router
  .route("/book_details/:id")
  .get(async (req, res) => {
    /**
     * save the id
     */
    const id = req.params.id;
    /**
     * get data for the model
     * @type {Model}
     */
    const book = await models.books.findByPk(id);
    /**
     * get the data
     * @type {Array<Model>|TInstance[]}
     */
    const loans = await models.loans.findAll({
      where: { book_id: id },
      include: [
        { model: models.patrons, attributes: ["id", "first_name", "last_name"] }
      ]
    });

    res.render("pages/books/book_detail", {
      title: "Book Details",
      errors: {},
      prevValues: {},
      activeNavTab: "books",
      book,
      loans
    });
  })
  .post(async (req, res) => {
    /**
     * setting to null if it's empty
     */
    const formData =
      req.body.first_published === ""
        ? { ...req.body, first_published: null }
        : { ...req.body, first_published: parseInt(req.body.first_published) };

    models.books.findByPk(req.params.id).then(instance => {
      /**
       * book: save the id and title
       * @type {{id: Number, title: String}}
       */
      const book = {
        id: instance.dataValues.id,
        title: instance.dataValues.title
      };

      /**
       * adding previous values if a error ocurred
       * @type {any}
       */
      const prevValues = { ...req.body, title: instance.dataValues.title };

      /**
       * update the instance
       */
      instance
        .update(formData)
        .then(() => res.redirect("/books"))
        .catch(async error => {
          res.render("pages/books/book_detail", {
            title: "Book Details",
            book,
            prevValues,
            errors: formErrorCreator(error),
            activeNavTab: "books",
            loans: await models.loans.findAll({
              where: { book_id: req.params.id },
              include: [
                {
                  model: models.patrons,
                  attributes: ["id", "first_name", "last_name"]
                }
              ]
            })
          });
        });
    });
  });

/**
 * /books/new route
 */
router
  .route("/new")
  .get(async (req, res) => {
    res.render("pages/books/new_book", {
      title: "New Book",
      activeNavTab: "books",
      previousValues: {},
      errors: {}
    });
  })
  .post(async (req, res) => {
    /**
     * set first_published to the req string or set to null
     * @type {any}
     */
    const bookData = {
      ...req.body,
      first_published:
        req.body.first_published === "" ? null : req.body.first_published
    };

    models.books
      .create(bookData)
      .then(() => res.redirect("/books"))
      .catch(error => {
        res.render("pages/books/new_book", {
          title: "New Book",
          activeNavTab: "books",
          previousValues: req.body,
          errors: formErrorCreator(error)
        });
      });
  });

router.get("/overdue_books", (req, res) => {
  /**
   * save or set default search string
   * @type {*|string}
   */
  const search = req.query.search || "";

  /**
   * build the query to be sent to the backend
   * @type {{include: {model: *, where: *}[], offset: (number|null), limit: number, model: *, attributes: string[], where: {}}}
   */
  let query = {
    model: models.loans,
    attributes: ["book_id", "patron_id"],
    where: {
      [Op.and]: {
        return_by: {
          [Op.lt]: dateFormater()
        },
        returned_on: {
          [Op.eq]: null
        }
      }
    },
    include: [
      {
        model: models.books,
        where: req.query.search
          ? { [Op.or]: searchBuilder({ searchType: "books", search }) }
          : null
      }
    ],
    offset: req.query.page * 10 || null,
    limit: 10
  };

  /**
   * fetch the query data from the DB
   */
  models.loans
    .findAndCountAll(query)
    .then(loans => {
      res.render("pages/books/overdue_books", {
        title: "Overdue Books",
        activeTab: "overdue",
        activeNavTab: "books",
        count: loans.count,
        loans: loans.rows,
        pagination: pagination({
          page: req.query.page || 1,
          paginationType: "books/overdue_books",
          rowCount: loans.count
        }),
        searchType: "/books/overdue_books",
        search
      });
    })
    .catch(error => {
      const err = {
        manualError: true,
        stack: error,
        link: "/books/overdue_books"
      };
      next(err);
    });
});

router.get("/checked_books", (req, res) => {
  /**
   * save search string or set to empty string
   * @type {*|string}
   */
  const search = req.query.search || "";

  models.loans
    .findAndCountAll({
      model: models.loans,
      where: {
        [Op.and]: {
          loaned_on: {
            [Op.not]: null
          },
          returned_on: {
            [Op.eq]: null
          }
        }
      },
      include: [
        {
          model: models.books,
          where: req.query.search
            ? { [Op.or]: searchBuilder({ searchType: "books", search }) }
            : null
        }
      ],
      offset: req.query.page * 10 || null,
      limit: 10
    })
    .then(checkedBooks => {
      res.render("pages/books/checked_books", {
        title: "Checked Books",
        activeTab: "checked",
        activeNavTab: "books",
        count: checkedBooks.count,
        checkedBooks: checkedBooks.rows,
        pagination: pagination({
          page: req.query.page || 1,
          paginationType: "books/checked_books",
          rowCount: checkedBooks.count
        }),
        searchType: "/books/checked_books"
      });
    })
    .catch(error => {
      const err = {
        manualError: true,
        stack: error,
        link: "/books/checked_books"
      };
      next(err);
    });
});

module.exports = router;
