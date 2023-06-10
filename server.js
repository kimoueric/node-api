const express = require("express");
const postsRoutes = require("./routes/postsController");
const app = express();

require("./config/db");

app.use("/", postsRoutes);

app.listen(5000);
