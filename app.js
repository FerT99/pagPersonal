// librerias base
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
// const csrf = require("csurf");

// uso de librerias
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cookies
app.use(
  session({
    secret: "ñlodyfwsvbksfeibvbcvayywpqbcza",
    resave: false, 
    cookie: {maxAge: 2678400000 },
    saveUninitialized: false, 
  })
);
