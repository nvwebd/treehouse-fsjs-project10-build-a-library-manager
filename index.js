// TODO: expansion of the Project
/**
 * - check book ids before creating new loan - can't load the same book to two patrons at the same time
 *
 */

const express = require("express");
const path = require("path");
const app = express();
const normalizePort = require("./src/utils/portNormalizer");
const port = normalizePort.normalizePort(process.env.PORT || "3000");
const helmet = require('helmet');
const errorModule = require("./src/utils/errorModule");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "src/views"));

// securing HTTP Headers
app.use(helmet());

// setting the static route link for static files - all the JS files and images
app.use("/static", express.static(path.join(__dirname, "src/public")));

//  parses incoming requests with JSON payloads
app.use(express.json());

// parses incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true }));

// inject routes
const home = require("./src/routes/home");
const books = require("./src/routes/books");
const loans = require("./src/routes/loans");
const patrons = require("./src/routes/patrons");

// set the app to use these routes
app.use("/", home);
app.use("/books", books);
app.use("/loans", loans);
app.use("/patrons", patrons);

app.use((err, req, res, next) => {
  if (err.manualError) {
    res.render('pages/error/error_page', errorModule({
      stack: err.stack,
      link: err.id ? `${err.link}/${err.id}` : `${err.link}`
    }));
  } else {
    next(err)
  }
});

/**
 * when this middleware is triggered then the page was not found
 */
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// starting the server and listening on port 3000
app.listen(port, () =>
  console.log(`Library Manager running on port: ${port} ...`)
);
