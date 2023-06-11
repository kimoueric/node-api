const express = require("express");
const messageRoutes = require("./routes/messageRoutes");
const bodyParser = require("body-parser");
require("./config/db");

const app = express();

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use("/messages", messageRoutes);

app.listen(5500, (erreur) => {
  if (erreur) throw erreur;
  console.log("Nous tournons bien sur le port 5500");
});
