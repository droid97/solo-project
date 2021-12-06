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



module.exports = app;
