const express = require("express");
const router = express.Router();
const models = require("./../db/models");
const pagination = require("./../utils/pagination");

const formErrorCreator = errorArray => {
  const errors = {};

  errorArray.errors.map(
    error => (errors[error.path] = { message: error.message })
  );

  return errors;
};

// define the home page route
router.get("/", async (req, res) => {
  const patrons = await models.patrons.findAndCountAll({
    offset: req.query.page * 10 || null,
    limit: 10
  });

  res.render("pages/patrons/all_patrons", {
    title: "Patrons",
    pagination: pagination({
      page: req.query.page || 1,
      paginationType: "patrons",
      rowCount: patrons.count
    }),
    patrons: patrons.rows
  });
});

router
  .route("/patron_details/:id")
  .get(async (req, res) => {
    const id = req.params.id;
    const patron = await models.patrons.findByPk(id);
    const loans = await models.loans.findAll({
      where: { patron_id: id },
      include: [{ model: models.books, attributes: ["id", "title"] }]
    });

    res.render("pages/patrons/patron_detail", {
      patron,
      loans,
      errors: {},
      title: "Patron Details"
    });
  })
  .post(async (req, res) => {
    const id = req.params.id;
    models.patrons.findByPk(id).then(instance => {
      instance
        .update(req.body)
        .then(() => res.redirect("/patrons"))
        .catch(async error => {
          res.render("pages/patrons/patron_detail", {
            title: "Patron Details",
            previousValues: req.body,
            errors: formErrorCreator(error),
            patron: await models.patrons.findByPk(id),
            loans: await models.loans.findAll({
              where: { patron_id: id },
              include: [{ model: models.books, attributes: ["id", "title"] }]
            })
          });
        });
    });
  });

router.route("/new")
.get(async (req, res) => {
  res.render("pages/patrons/new_patron", {
    prevValues: {},
    errors: {},
    title: "New Patron"
  });
})
.post(async (req, res) => {
  models.patrons
  .create(req.body)
  .then(() => {
    res.redirect("/patrons");
  })
  .catch(error => {
    const prevValues = req.body;
    res.render("pages/patrons/new_patron", {
      title: "New Patron",
      prevValues,
      errors: formErrorCreator(error)
    });
  });
});

module.exports = router;
