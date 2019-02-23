const express = require("express");
const router = express.Router();
const models = require("./../db/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const pagination = require("./../utils/pagination");
const searchBuilder = require("./../utils/searchBuilder");

const formErrorCreator = errorArray => {
  const errors = {};

  errorArray.errors.map(
    error => (errors[error.path] = { message: error.message })
  );

  return errors;
};

// define the home page route
router.get("/", async (req, res) => {
  const search = req.query.search || "";

  const patrons = await models.patrons.findAndCountAll({
    offset: req.query.page * 10 || null,
    limit: 10,
    order: [["id", "DESC"]],
    where: req.query.search
      ? { [Op.or]: searchBuilder({ searchType: "patrons", search }) }
      : null
  });

  res.render("pages/patrons/all_patrons", {
    title: "Patrons",
    activeNavTab: "patrons",
    count: patrons.count,
    pagination: pagination({
      page: req.query.page || 1,
      paginationType: "patrons",
      rowCount: patrons.count
    }),
    patrons: patrons.rows,
    searchType: "/patrons",
    search
  });
});

router
  .route("/patron_details/:id")
  .get(async (req, res) => {
    const id = req.params.id;
    const patron = await models.patrons.findByPk(id);
    const loans = await models.loans.findAll({
      where: { patron_id: id },
      order: [["id", "DESC"]],
      include: [{ model: models.books, attributes: ["id", "title"] }]
    });

    res.render("pages/patrons/patron_detail", {
      patron,
      loans,
      errors: {},
      activeNavTab: "patrons",
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
            activeNavTab: "patrons",
            patron: await models.patrons.findByPk(id),
            loans: await models.loans.findAll({
              where: { patron_id: id },
              include: [{ model: models.books, attributes: ["id", "title"] }]
            })
          });
        });
    });
  });

router
  .route("/new")
  .get(async (req, res) => {
    res.render("pages/patrons/new_patron", {
      activeNavTab: "patrons",
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
          activeNavTab: "patrons",
          title: "New Patron",
          prevValues,
          errors: formErrorCreator(error)
        });
      });
  });

module.exports = router;
