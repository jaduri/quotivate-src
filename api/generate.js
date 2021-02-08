const router = require("express").Router();

module.exports = () => {

  router.post("/", (req, res, next) => {
    return res.send("Composite generated");
  });

  return router;
}
