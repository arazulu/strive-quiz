require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// Setup default port
const PORT = process.env.PORT || 3000;

// Create express app
const app = express();

// Implement middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

if (process.env.NODE_ENV && process.env.NODE_ENV !== "development") {
  app.get("*", (req, res) => {
    res.sendFile("build/index.html", { root: __dirname });
  });
}

// Implement route for '/api' endpoint
// app.use("/api", homeRouter);

// // Implement route for '/users' endpoint
// // ! Note:
// // '/users' will prefix all post routes
// // with '/users' => '/all' will become '/users/all'
// app.use("/users", usersRouter);
const quizRouter = require("./routes/quiz");
app.use("/", quizRouter);

// Implement route for errors
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).send("Something broke!");
});

// Start express app
app.listen(PORT, function () {
  console.log(`Server is running on: ${PORT}`);
});
