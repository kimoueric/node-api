const messageModel = require("../models/messageModel");
const ObjectId = require("mongoose").Types.ObjectId;

const allMessages = (request, response) => {
  messageModel
    .find()
    .then((documents) => {
      response.send(documents);
    })
    .catch((erreur) => {
      response.status(500).send({ error: "Une erreur est survenue lors de la récupération des messages." });
    });
};

const insertMessage = (request, response) => {
  if (!request.body.auteur || !request.body.message) {
    response.status(400).send({ error: "Le champ auteur et le champ message sont obligatoires." });
    return;
  }

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
      response.status(500).send({ error: "Une erreur est survenue lors de l'enregistrement du message." });
    });
};

const updateMessage = (request, response) => {
  if (!ObjectId.isValid(request.params.id)) {
    response.status(400).send({ error: "ID non reconnu dans la base de données." });
    return;
  }

  if (!request.body.auteur || !request.body.message) {
    response.status(400).send({ error: "Le champ auteur et le champ message sont obligatoires." });
    return;
  }

  const updateRecord = {
    auteur: request.body.auteur,
    message: request.body.message,
  };

  messageModel
    .findByIdAndUpdate(request.params.id, { $set: updateRecord }, { new: true })
    .then((record) => {
      if (record) {
        response.send(record);
      } else {
        response.status(404).send({ error: "Aucun message trouvé avec cet ID." });
      }
    })
    .catch((erreur) => {
      response.status(500).send({ error: "Une erreur est survenue lors de la mise à jour du message." });
    });
};

const deleteMessage = (request, response) => {
  if (!ObjectId.isValid(request.params.id)) {
    response.status(400).send({ error: "ID non reconnu dans la base de données." });
    return;
  }

  messageModel
    .findByIdAndRemove(request.params.id)
    .then((record) => {
      if (record) {
        response.send(record);
      } else {
        response.status(404).send({ error: "Aucun message trouvé avec cet ID." });
      }
    })
    .catch((erreur) => {
      response.status(500).send({ error: "Une erreur est survenue lors de la suppression du message." });
    });
};

module.exports = {
  allMessages,
  insertMessage,
  updateMessage,
  deleteMessage,
};
