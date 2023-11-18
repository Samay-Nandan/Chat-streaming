const environment = require("./environment");
const openai = require("./openai");

module.exports = Object.assign({}, environment, openai);
