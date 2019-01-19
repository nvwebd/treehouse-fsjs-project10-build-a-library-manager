const express = require("express");
const router = express.Router();
const models = require("./../db/models");

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});
// define the home page route
router.get("/", (req, res) => {
  models.books.findAll().then(allBooks => {
    console.log('these are all the books: ', allBooks);
    res.render("pages/books", {
      title: "Books",
      data: allBooks,
      page: "books"
    });
  });
  // res.send({title: 'Books', page: 'books'})
});
// define the about route
router.get("/about", (req, res) => {
  res.send("About birds");
});

module.exports = router;
