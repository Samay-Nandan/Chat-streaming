const { chatStreaming } = require("@config");

const chatWithBot = async (req, res) => {
  const { model, messages } = req.body;
  try {
    const stream = await chatStreaming({ model, messages });
    for await (const { choices } of stream) {
      res.write(choices[0]?.delta?.content || "");
    }
    res.end();
  } catch (error) {
    throw new Error(`Error in chatWithBot: ${error.message}`);
  }
};

module.exports = { chatWithBot };
