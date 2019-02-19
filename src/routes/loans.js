const express = require("express");
const router = express.Router();
const models = require("./../db/models");
const sequelize = require("sequelize");
const Op = sequelize.Op;
const formErrorCreator = require("./../utils/formErrorFormatter");
const dateFormater = require("./../utils/dateFormater");

// define the home page route
router.get("/", (req, res) => {
  models.loans
    .findAll({
      model: models.loans,
      include: [{ model: models.books }, { model: models.patrons }]
    })
    .then(loans => {
      res.render("pages/loans/all_loans", {
        title: "Loans",
        activeTab: "all",
        loans
      });
    })
    .catch(error => console.log(error));
});

router
  .route("/new")
  .get(async (req, res) => {
    const books = await models.books.findAll({ attributes: ["id", "title"] });
    const patrons = await models.patrons.findAll({
      attributes: ["id", "first_name", "last_name"]
    });

    const loanedOnValue = dateFormater();
    const returnByValue = dateFormater(7);

    res.render("pages/loans/new_loan", {
      title: "New Loan",
      errors: {},
      prevValues: {},
      books,
      patrons,
      loanedOnValue,
      returnByValue
    });
  })
  .post((req, res) => {
    console.log('req.body: ', req.body);
    models.loans
      .create(req.body)
      .then(() => {
        res.redirect("/loans");
      })
      .catch(async error => {
        const errors = formErrorCreator(error);
        console.log('ERRORS => ', errors);
        const books = await models.books.findAll({
          attributes: ["id", "title"]
        });
        const patrons = await models.patrons.findAll({
          attributes: ["id", "first_name", "last_name"]
        });

        const prevValues = {
          ...req.body,
          book_id: parseInt(req.body.book_id),
          patron_id: parseInt(req.body.patron_id)
        };

        res.render("pages/loans/new_loan", {
          title: "New Loan",
          errors,
          prevValues,
          books,
          patrons
        });
      });
  });

router
  .route("/return_book/:id")
  .get(async (req, res) => {
    const bookId = req.params.id;
    const loan = await models.loans.findOne({
      where: { book_id: bookId },
      include: [
        {
          model: models.books,
          attributes: ["title"]
        },
        { model: models.patrons, attributes: ["first_name", "last_name"] }
      ]
    });

    res.render("pages/books/return_book", {
      title: "Return Book",
      errors: {},
      loan,
      returned_on: dateFormater()
    });
  })
  .post(async (req, res) => {
    const formData = req.body;

    models.loans.findByPk(req.params.id).then(instance => {
      instance
        .update(formData)
        .then(() => {
          res.redirect("/loans");
        })
        .catch(error => {
          res.render("pages/loans/all_loans", {
            title: "Return Book",
            errors: formErrorCreator(error)
          });
        });
    });
  });

router.get("/overdue_loans", (req, res) => {
  models.loans
    .findAll({
      model: models.loans,
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
      include: [{ model: models.books }, { model: models.patrons }]
    })
    .then(loans => {
      res.render("pages/loans/overdue_loans", {
        title: "Overdue Loans",
        activeTab: "overdue",
        loans
      });
    })
    .catch(error => {
      console.log("ERROR fetching all overdue books: ", error);
    });
});

router.get("/checked_loans", (req, res) => {
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
      include: [{ model: models.books }, { model: models.patrons }]
    })
    .then(loans => {
      res.render("pages/loans/checked_loans", {
        title: "Checked Loans",
        activeTab: "checked",
        loans
      });
    })
    .catch(error => {
      console.log("ERROR getting checked books: ", error);
    });
});

module.exports = router;
