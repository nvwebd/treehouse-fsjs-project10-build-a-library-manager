const express = require("express");
const router = express.Router();
const models = require("./../db/models");

// define the home page route
router.get("/", (req, res) => {
  const filter = req.params.filter
    ? { where: { [req.params.filter]: true } }
    : {};

  models.loans.findAll().then(loans => {
    console.log(loans[0].dataValues);
    res.render("pages/loans/all_loans", {
      title: "Loans",
      loans
    });
  })
  .catch(error => console.log(error));
});

router.get("/new", (req, res) => {
  res.render("pages/loans/new_loan", { title: 'New Loan'});
});

router.get("/overdue_loans", (req, res) => {

});

router.get("/checked_loans", (req, res) => {

});

module.exports = router;
