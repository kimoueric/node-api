const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/node-api")
  .then((succes) => {
    console.log("On est connecte a la base de donnees");
  })
  .catch((erreur) => {
    console.log("Nous n'avons pas pu nous connecter a la base de donnees");
  });

module.exports = mongoose;
