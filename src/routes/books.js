const express = require("express");
const router = express.Router();
const models = require("./../db/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const formErrorCreator = require("./../utils/formErrorFormatter");
const dateFormater = require("./../utils/dateFormater");
const pagination = require("./../utils/pagination");

// define the home page route - show all books with filtering and pagination
router.get("/", (req, res) => {
  const query = {
    limit: 10,
    offset: req.query.page ? req.query.page * 10 : null
  };

  if (req.query.length !== 0 && req.query.page) {
    query.offset = req.query.page * query.limit;
  }

  models.books
    .findAndCountAll(query)
    .then(books => {
      res.render("pages/books/all_books", {
        title: "Books",
        pagination: pagination({
          page: req.query.page || 1,
          paginationType: "books",
          rowCount: books.count
        }),
        books: books.rows,
        activeTab: "all"
      });
    })
    .catch(error => {
      console.error("Error: ", error);
    });
});

router
  .route("/book_details/:id")
  .get(async (req, res) => {
    const id = req.params.id;
    const book = await models.books.findByPk(id);
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
      book,
      loans
    });
  })
  .post(async (req, res) => {
    const formData =
      req.body.first_published === ""
        ? { ...req.body, first_published: null }
        : { ...req.body, first_published: parseInt(req.body.first_published) };

    models.books.findByPk(req.params.id).then(instance => {
      const book = {
        id: instance.dataValues.id,
        title: instance.dataValues.title
      };

      const prevValues = { ...req.body, title: instance.dataValues.title };

      instance
        .update(formData)
        .then(() => res.redirect("/books"))
        .catch(async error => {
          res.render("pages/books/book_detail", {
            title: "Book Details",
            book,
            prevValues,
            errors: formErrorCreator(error),
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

router
  .route("/new")
  .get(async (req, res) => {
    res.render("pages/books/new_book", {
      title: "New Book",
      previousValues: {},
      errors: {}
    });
  })
  .post(async (req, res) => {
    models.books
      .create(req.body)
      .then(() => res.redirect("/books"))
      .catch(error => {
        res.render("pages/books/new_book", {
          title: "New Book",
          previousValues: req.body,
          errors: formErrorCreator(error)
        });
      });
  });

router.get("/overdue_books", (req, res) => {
  const query = {
    limit: 10,
    offset: req.query.page ? req.query.page * 10 : null
  };

  if (req.query.length !== 0 && req.query.page) {
    query.offset = req.query.page * query.limit;
  }

  models.loans
    .findAndCountAll({
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
      include: [{ model: models.books }],
      offset: req.query.page * 10 || null,
      limit: 10
    })
    .then(loans => {
      res.render("pages/books/overdue_books", {
        title: "Overdue Books",
        activeTab: "overdue",
        loans: loans.rows,
        pagination: pagination({
          page: req.query.page || 1,
          paginationType: "books/overdue_books",
          rowCount: loans.count
        }),
      });
    })
    .catch(error => {
      console.log("ERROR fetching all overdue books: ", error);
    });
});

router.get("/checked_books", (req, res) => {
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
      include: [{ model: models.books }],
      offset: req.query.page * 10 || null,
      limit: 10
    })
    .then(checkedBooks => {
      res.render("pages/books/checked_books", {
        title: "Checked Books",
        activeTab: "checked",
        checkedBooks: checkedBooks.rows,
        pagination: pagination({
          page: req.query.page || 1,
          paginationType: "books/checked_books",
          rowCount: checkedBooks.count
        }),
      });
    })
    .catch(error => {
      console.log("ERROR getting checked books: ", error);
    });
});

module.exports = router;
