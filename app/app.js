"ues strict";

const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const hoem = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", hoem);

module.exports = app;
