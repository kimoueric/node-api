const express = require("express");
const router = express.Router();

const PostsModel = require("../models/postsModels");

router.get("/", (request, response) => {
  PostsModel.find()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
