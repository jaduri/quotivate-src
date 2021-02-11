require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const api = require("./api/index.js");

const app = express();


app.use(bodyParser.json({
  limit: "2mb"
}));
app.use(express.static(path.resolve(__dirname, "public")));

// app.use((req, res, next) => {
//   res.set("Access-Control-Allow-Origin", ["*"]);
//   res.set("Access-Control-Allow-Headers", ["Content-Type"]);
//   return next();
// });

app.use("/api", api());

app.get("/", (req, res) => {
  return res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.use((req, res, next) => {
  return res.send("<h1>Not Found</h1>");
});

module.exports = app;
