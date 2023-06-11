const router = require("express").Router();
const controller = require("../controllers/messageController");

router.get("/", controller.allMessages);

router.post("/", controller.insertMessage);

router.put("/:id", controller.updateMessage);

router.delete("/:id", controller.deleteMessage);

module.exports = router;
