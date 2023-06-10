const express = require("express");
const bodyParser = require("body-parser");

// Les routes de posts
const postsRoutes = require("./routes/postsController");

// Appel a la connexion a la base de donnees
require("./config/db");

const app = express();

// Les middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/posts", postsRoutes);

// Server
app.listen(5000);
