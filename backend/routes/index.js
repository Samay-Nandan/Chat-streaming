const express = require("express");
const { chatWithBot } = require("@controllers");
const router = express.Router();

router.post("/chat-with-bot", chatWithBot);

module.exports = router;
