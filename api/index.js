const router = require("express").Router();
const content = require("./content");
const download = require("./download");
const feedback = require("./feedback");
const generate = require("./generate");

module.exports = () => {

  router.use("/content", content());
  router.use("/download", download());
  router.use("/feedback", feedback());
  router.use("/generate", generate());

  return router;
}
