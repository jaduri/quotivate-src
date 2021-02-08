const express = require("express");
const port = process.env.PORT || 8080;
const app = require("./app");

const server = express();

server.use("/", app);

server.listen(port, (err) => {
  if(err) console.error(err);
  console.log(`Listening onn ${port}`)
});
