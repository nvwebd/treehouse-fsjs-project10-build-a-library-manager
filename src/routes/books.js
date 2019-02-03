const express = require("express");
const router = express.Router();
const models = require("./../db/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const formErrorCreator = errorArray => {
  const errors = {};

  errorArray.errors.map(
    error => (errors[error.path] = { message: error.message })
  );

  return errors;
};

const dateFormater = () => {
  const nowDate = new Date();
  const day =
    nowDate.getDate() < 10 ? `0${nowDate.getDate()}` : `${nowDate.getDate()}`;
  const month =
    nowDate.getMonth() < 10
      ? `0${nowDate.getMonth()}`
      : `${nowDate.getMonth()}`;
  const year = `${nowDate.getFullYear()}`;

  return `${year}-${month}-${day}`;
};

// define the home page route - show all books with filtering and pagination
router.get("/", (req, res) => {
  models.books
    .findAll({})
    .then(books => {
      res.render("pages/books/all_books", {
        title: "Books",
        books
      });
    })
    .catch(error => {
      console.error("Error: ", error);
    });
});

router.get("/return_book", (req, res) => {
  res.render("pages/books/return_book", { title: "Return Book" });
});

router.get("/book_details/:id", async (req, res) => {
  const id = req.params.id;
  const book = await models.books.findByPk(id);
  const loans = await models.loans.findAll({
    where: { book_id: id },
    include: [
      { model: models.patrons, attributes: ["id", "first_name", "last_name"] }
    ]
  });

  res.render("pages/books/book_detail", { title: "Book Details", book, loans });
});

router.put("/edit")

router.get("/new", (req, res) => {
  res.render("pages/books/new_book", {
    title: "New Book",
    previousValues: {},
    errors: {}
  });
});

router.post("/new", (req, res) => {
  const newBookData =
    req.body.first_published === ""
      ? { ...req.body, first_published: null }
      : req.body;

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
  models.loans
    .findAll({
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
      include: [{ model: models.books }]
    })
    .then(loans => {
      res.render("pages/books/overdue_books", {
        title: "Overdue Books",
        loans
      });
    })
    .catch(error => {
      console.log("ERROR fetching all overdue books: ", error);
    });
});

router.get("/checked_books", (req, res) => {
  console.log("Fetching all CHECKED books!");
  models.loans
    .findAll({
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
      include: [{ model: models.books }]
    })
    .then(checkedBooks => {
      res.render("pages/books/checked_books", {
        title: "Checked Books",
        checkedBooks
      });
    })
    .catch(error => {
      console.log("ERROR getting checked books: ", error);
    });
});

module.exports = router;
