const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const csurf = require("csurf");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const routes = require("./routes");
const app = express();
const { environment } = require("./config");
const isProduction = environment === "production";
const { ValidationError } = require("sequelize");

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

if (!isProduction) {
  // enable cors only in development
  app.use(cors());
}

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true,
    },
  })
);

app.use(routes);

app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = "Validation error";
  }
  next(err);
});

app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;