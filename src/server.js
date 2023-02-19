const path = require("path");
const express = require("express");
const db = require("./db");
const app = express();
const port = process.env.PORT || 5090;
app.use(express.static(path.join(__dirname, "..", "dist")));
app.get("/", async function (request, response, next) {
  // await db.connect(function (result) {
  //   console.log("result: ", result)
  // });
  response.send("index.html");
  next();
});
app.listen(port);

console.log(`Application is listening on port ${port}`);
