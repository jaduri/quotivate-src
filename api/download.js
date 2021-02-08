const router = require("express").Router();

module.exports = () => {

  router.get("/", (req, res, next) => {
    return res.send("Your download will begin shortly");
  });

  return router;
}
