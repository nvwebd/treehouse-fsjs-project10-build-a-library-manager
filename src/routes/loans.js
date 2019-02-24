const express = require("express");
const router = express.Router();
const models = require("./../db/models");
const sequelize = require("sequelize");
const Op = sequelize.Op;
const formErrorCreator = require("./../utils/formErrorFormatter");
const dateFormater = require("./../utils/dateFormater");

/**
 * get all loans route
 */
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
        activeNavTab: "loans",
        loans
      });
    })
    .catch(error => {
      const err = {
        manualError: true,
        stack: error,
        link: "/loans"
      };
      next(err);
    });
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
      activeNavTab: "loans",
      books,
      patrons,
      loanedOnValue,
      returnByValue
    });
  })
  .post((req, res) => {
  /**
   * set loaned_on and return_by to null if they are empty
   * @type {any}
   */
  const loanData = {
      ...req.body,
      loaned_on: req.body.loaned_on === "" ? null : req.body.loaned_on,
      return_by: req.body.return_by === "" ? null : req.body.return_by
    };

  /**
   * create a new loan
   */
  models.loans
      .create(loanData)
      .then(() => {
        res.redirect("/loans");
      })
      .catch(async error => {
        const errors = formErrorCreator(error);
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
          activeNavTab: "loans",
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
  /**
   * save book ID
   */
  const bookId = req.params.id;
  /**
   * find the loan for the book and update it as returned
   * @type {TInstance | Model}
   */
    const loan = await models.loans.findOne({
      where: { book_id: bookId },
      include: [
        {
          model: models.books,
          attributes: ["id", "title"]
        },
        { model: models.patrons, attributes: ["first_name", "last_name"] }
      ]
    });

    res.render("pages/books/return_book", {
      title: "Return Book",
      activeNavTab: "loans",
      errors: {},
      loan,
      returned_on: dateFormater()
    });
  })
  .post(async (req, res) => {
  /**
   * save id
   */
    const bookId = req.params.id;

    models.loans.findOne({ where: { book_id: bookId } }).then(instance => {
      instance
        .update(req.body)
        .then(() => {
          res.redirect("/loans");
        })
        .catch(async error => {
          const bookId = req.params.id;
          const loan = await models.loans.findOne({
            where: { book_id: bookId },
            include: [
              {
                model: models.books,
                attributes: ["id", "title"]
              },
              { model: models.patrons, attributes: ["first_name", "last_name"] }
            ]
          });
          res.render("pages/books/return_book", {
            title: "Return Book",
            activeNavTab: "loans",
            loan,
            prevValues: {
              return_by: formData
            },
            errors: formErrorCreator(error)
          });
        });
    });
  });

/**
 * get all overdue loans
 */
router.get("/overdue_loans", (req, res) => {
  /**
   * get all loans where return_by is less than todays date and returned_on is null
   */
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
        activeNavTab: "loans",
        loans
      });
    })
    .catch(error => {
      const err = {
        manualError: true,
        stack: error,
        link: "/loans/overdue_loans"
      };
      next(err);
    });
});

/**
 * get all checked loans
 */
router.get("/checked_loans", (req, res) => {
  /**
   * find all loans where loaned_on and returned_on are null
   */
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
        activeNavTab: "loans",
        loans
      });
    })
    .catch(error => {
      const err = {
        manualError: true,
        stack: error,
        link: "/loans/checked_loans"
      };
      next(err);
    });
});

module.exports = router;
