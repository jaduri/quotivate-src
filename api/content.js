const router = require("express").Router();
const unirest = require("unirest");

module.exports = () => {

  router.get("/quote", (req, res, next) => {
    const quoteRequest = unirest("GET", "https://andruxnet-random-famous-quotes.p.rapidapi.com/");

    quoteRequest.query({
      "cat": "famous",
      "cound": 1
    });

    quoteRequest.header({
      "x-rapidapi-key": process.env.QUOTE_API_KEY,
    	"x-rapidapi-host": process.env.QUOTE_API_HOST,
    	"useQueryString": true
    })

    quoteRequest.end((response) => {
      if(response.error){
        return response.error
      }
      const { quote, author } = response.body[0];
      return res.json({quote, author});
    })
  });

  router.get("/image", (req, res, next) => {

    const imageRequest = unirest("GET", `https://api.unsplash.com/photos/random/?client_id=${process.env.UNSPLASH_API_KEY}`);

    imageRequest.end((response) => {
      if(response.error){
        return response.error;
      }
      return res.json(response.body.urls);
    });

  });

  return router;
}
