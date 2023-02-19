const path = require("path");
const express = require("express");
const nunjucks = require('nunjucks');
const db = require("./db");
const app = express();
const port = process.env.PORT || 5090;
app.use(express.static(path.join(__dirname, "..", "public")));
nunjucks.configure('public', {
    autoescape: true,
    express: app
});
app.get("/", async function (request, response, next) {
  await db.connect(function (result) {
    console.log("result: ", result)
  });
  response.render("index.html");
  next();
});
app.listen(port);

console.log(`Application is listening on port ${port}`);
