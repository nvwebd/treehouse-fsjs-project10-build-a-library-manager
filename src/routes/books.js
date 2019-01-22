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
  models.books
    .findAll({})
    .then(allBooks => {
      console.log("these are all the books: ", allBooks);
      res.render("pages/books/all_books", {
        title: "Books",
        data: allBooks
      });
    })
    .catch(error => {
      console.error("Error: ", error);
    });
});

router.get("/overdue", (req, res) => {
  console.log("Fetching all OVERDUE books!");
  res.render("pages/books/overdue_books", { title: "Overdue Books" });
});

router.get("/checked", (req, res) => {
  console.log("Fetching all CHECKED books!");
  res.render("pages/books/checked_books", { title: "Checked Books" });
});

router.get("/new", (req, res) => {
  console.log("Creating a NEW_BOOK!");
  res.render("pages/books/new_book", { title: "New Book" });
});

module.exports = router;
