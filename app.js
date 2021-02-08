const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const api = require("./api/index.js");

const app = express();

app.use(bodyParser.json());

app.use("/api", api());

app.get("/", (req, res) => {
  return res.send(path.resolve(__dirname, "public", "index.html"));
});

app.use((req, res, next) => {
  return res.send("<h1>Not Found</h1>");
});
