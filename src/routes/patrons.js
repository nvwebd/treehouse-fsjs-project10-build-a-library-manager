const express = require("express");
const router = express.Router();
const Patrons = require("../db/models").patrons;

// define the home page route
router.get("/", (req, res) => {
  Patrons.findAll({}).then(instances => {
    res.render("pages/patrons/all_patrons", {
      title: "Patrons",
      patrons: instances
    });
  });
});

router.get("/new", (req, res) => {
  res.render("pages/patrons/new_patron");
});

module.exports = router;
