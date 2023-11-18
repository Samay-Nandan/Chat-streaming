const { config } = require("dotenv");
config();

module.exports = { PORT, SERVER_IP, OPENAI_API_KEY } = process.env;
