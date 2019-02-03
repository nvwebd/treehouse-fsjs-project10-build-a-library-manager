const express = require("express");
const router = express.Router();
const models = require("./../db/models");

// TODO: extract to a util module
// TODO: create a promise based function - returns promise
const formErrorCreator = errorArray => {
  const errors = {};

  errorArray.errors.map(
    error => (errors[error.path] = { message: error.message })
  );

  return errors;
};

// TODO: extract to an util file
const dateFormater = () => {
  const nowDate = new Date();

  const day =
    nowDate.getDate() < 10 ? `0${nowDate.getDate()}` : `${nowDate.getDate()}`;

  const month =
    nowDate.getMonth() < 10
      ? `0${nowDate.getMonth() + 1}`
      : `${nowDate.getMonth() + 1}`;

  const year = `${nowDate.getFullYear()}`;

  return `${year}-${month}-${day}`;
};

// define the home page route
router.get("/", (req, res) => {
  const filter = req.params.filter
    ? { where: { [req.params.filter]: true } }
    : {};

  models.loans
    .findAll({
      include: [
        {
          model: models.books,
          attributes: ["id", "title"]
        },
        {
          model: models.patrons,
          attributes: ["id", "first_name", "last_name"]
        }
      ]
    })
    .then(loans => {
      res.render("pages/loans/all_loans", {
        title: "Loans",
        loans
      });
    })
    .catch(error => console.log(error));
});

router.get("/new", async (req, res) => {
  const books = await models.books.findAll({ attributes: ["id", "title"] });
  const patrons = await models.patrons.findAll({
    attributes: ["id", "first_name", "last_name"]
  });

  const loanedOnValue = dateFormater();
  const returnByValue = "test";

  res.render("pages/loans/new_loan", {
    title: "New Loan",
    errors: {},
    prevValues: {},
    books,
    patrons,
    loanedOnValue,
    returnByValue
  });
});

// TODO: sort the Invalid Date problem and true date parsing
router.post("/new", (req, res) => {
  const createData = {
    ...req.body,
    loaned_on: req.body.loaned_on === "" ? null : req.body.loaned_on,
    return_by: req.body.return_by === "" ? null : req.body.return_by
  };

  models.loans
    .create(createData)
    .then(() => {
      res.redirect("/loans");
    })
    .catch(async error => {
      const errors = formErrorCreator(error);
      const books = await models.books.findAll({ attributes: ["id", "title"] });
      const patrons = await models.patrons.findAll({
        attributes: ["id", "first_name", "last_name"]
      });

      const prevValues = {
        ...createData,
        book_id: parseInt(createData.book_id),
        preton_id: parseInt(createData.patron_id)
      };

      console.log(prevValues);

      res.render("pages/loans/new_loan", {
        title: "New Loan",
        errors,
        prevValues,
        books,
        patrons
      });
    });
});

router.get("/overdue_loans", (req, res) => {});

router.get("/checked_loans", (req, res) => {});

module.exports = router;
