//paths
const express = require("express");
const app = express();
const page1 = require("./homePage.js");

const HTTP_PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  app.send({ page1 });
});

app.listen(HTTP_PORT, () => {
  console.log(`server is running in: http://localhost:${HTTP_PORT}`);
});
