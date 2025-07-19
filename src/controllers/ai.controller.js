const aiService = require("../services/ai.service");


module.exports.getReview = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).send("Code is required");
  }

  try {
    const response = await aiService.generateContent(code);
    res.send(response);
  } catch (error) {
    console.error("Gemini error:", error);
    res.status(500).send("Something went wrong while generating the response.");
  }
};
