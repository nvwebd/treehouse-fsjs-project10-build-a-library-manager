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
  const filter = req.params.filter
    ? { where: { [req.params.filter]: true } }
    : {};

  models.books
    .findAll({})
    .then(allBooks =>
      res.render("pages/books/all_books", {
        title: "Books",
        data: allBooks
      })
    )
    .catch(error => {
      console.error("Error: ", error);
    });
});

router.post("/create", (req, res) => {
  console.log("this is the req.body: ", req.body);
  models.books.create(req.body).then(instance => {});
  res.send("creating a new books");
});

router.get("/book_details/:id", (req, res) => {
  console.log("checking the params: ", req.params);
  models.books
    .findByPk(req.params.id)
    .then(instance => res.render("pages/books/book_detail", { data: instance }))
    .catch(error => console.log("Error getting the Book data: ", error));
});

router.get("/new", (req, res) => {
  console.log("getting new book page!");
  res.render("pages/books/new_book");
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
