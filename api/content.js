const router = require("express").Router();

module.exports = () => {

  router.get("/quote", (req, res, next) => {
    return res.send("Here is a quote for you!");
  });

  router.get("/image", (req, res, next) => {
    return res.send("Your image will be streamed shortly");
  });

  return router;
}
