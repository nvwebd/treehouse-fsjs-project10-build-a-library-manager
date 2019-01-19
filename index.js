const express = require("express");
const path = require("path");
const app = express();
const normalizePort = require("./src/utils/portNormalizer/index");
const port = normalizePort.normalizePort(process.env.PORT || "3000");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "src/views"));

// setting the static route link for static files - all the JS files and images
app.use("/static", express.static(path.join(__dirname, "src/public")));

// const routes = require("./src/routes");

// inject routes
const books = require("./src/routes/books");
const loans = require("./src/routes/loans");
const patrons = require("./src/routes/patrons");

// set the app to use these routes
app.get("/", function(req, res) {
  res.render("index", { title: "Library Manager" });
});

app.use("/books", books);
app.use("/loans", loans);
app.use("/patrons", patrons);

// error handling middleware - if this triggers then no route was matched
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error resolver - writes a console error when route doesnt exist
// app.use((err, req, res, next) => {
//   res.locals.error = err;
//   res.status(err.status);
//   console.error("There's been an error getting the resource: ", err.message);
//   console.error("Status Code: ", err.status);
//   console.error("Stack Trace: ", err.stack);
//   res.render("error", err);
// });

// starting the server and listening on port 3000
app.listen(port, () =>
  console.log(`Library Manager running on port: ${port} ...`)
);
