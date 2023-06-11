const messageModel = require("../models/messageModel");
const ObjectId = require("mongoose").Types.ObjectId;

const allMessages = (request, response) => {
  messageModel
    .find()
    .then((documents) => {
      response.send(documents);
    })
    .catch((erreur) => {
      response.send(erreur);
    });
};

const insertMessage = (request, response) => {
  const newMessage = new messageModel({
    auteur: request.body.auteur,
    message: request.body.message,
  });
  newMessage
    .save()
    .then((enregistrement) => {
      response.send(enregistrement);
    })
    .catch((erreur) => {
      response.send(erreur);
    });
};

const updateMessage = (request, response) => {
  if (ObjectId.isValid(request.params.id)) {
    const updateRecord = {
      auteur: request.body.auteur,
      message: request.body.message,
    };
    messageModel
      .findByIdAndUpdate(
        request.params.id,
        { $set: updateRecord },
        { new: true }
      )
      .then((record) => {
        response.send(record);
      })
      .catch((erreur) => {
        response.send(erreur);
      });
  } else response.send("Id non reconnu dans la bd");
};

const deleteMessage = (request, response) => {
  if (ObjectId.isValid(request.params.id)) {
    messageModel
      .findByIdAndRemove(request.params.id)
      .then((record) => {
        response.send(record);
      })
      .catch((erreur) => {
        response.send(erreur);
      });
  } else response.send("Id non reconnu dans la bd");
};

module.exports = {
  allMessages,
  insertMessage,
  updateMessage,
  deleteMessage,
};
