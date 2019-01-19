const express = require("express");
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});
// define the home page route
router.get("/", (req, res) => {
  res.render('pages/patrons', {title: 'Hey', message: 'Hello there!'});

});

module.exports = router;
