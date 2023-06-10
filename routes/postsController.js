const express = require("express");
const router = express.Router();
const PostsModel = require("../models/postsModels");
const ObjectId = require("mongoose").Types.ObjectId;

router.get("/", (request, response) => {
  PostsModel.find()
    .then((result) => {
      response.send(result);
    })
    .catch((error) => {
      response.send(error);
    });
});

router.post("/", (request, response) => {
  const newModel = new PostsModel({
    author: request.body.author,
    message: request.body.message,
  });

  newModel
    .save()
    .then((result) => {
      response.send(result);
    })
    .catch((erreur) => {
      response.send(erreur);
    });
});

router.put("/:id", (request, response) => {
  if (!ObjectId.isValid(request.params.id)) {
    response.json({
      statut: 400,
      message: "Id inconnu , le id est : " + request.params.id,
    });
  }
  const updateRecord = {
    author: request.body.author,
    message: request.body.message,
  };
  PostsModel.findByIdAndUpdate(
    request.params.id,
    { $set: updateRecord },
    { new: " true" }
  )
    .then((datas) => {
      response.send(datas);
    })
    .catch((erreur) => {
      response.send(erreur);
    });
});

router.delete("/:id", (request, response) => {
  if (!ObjectId.isValid(request.params.id)) {
    response.json({
      statut: 400,
      message: "Id inconnu , le id est : " + request.params.id,
    });
  }
  PostsModel.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.send(result);
    })
    .catch((erreur) => {
      response.send(erreur);
    });
});

module.exports = router;
