const OpenAI = require("openai");
const { OPENAI_API_KEY } = require("@config/environment");

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

const chatStreaming = async ({ model, messages }) => {
  try {
    return await openai.chat.completions.create({
      model,
      messages,
      stream: true,
    });
  } catch (error) {
    throw new Error(`Error in chatStreaming: ${error.message}`);
  }
};

module.exports = { chatStreaming };
