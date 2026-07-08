const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const analyzeWithGemini = async (pdfText) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
You are an AI document analyzer.

Analyze the following document and return ONLY valid JSON.

Format:

{
  "documentType": "",
  "title": "",
  "authors": [],
  "summary": "",
  "keyTakeaways": []
}

Document:

${pdfText}
`;

    const result = await model.generateContent(prompt);

    const response = await result.response;

    let text = response.text();

text = text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

return JSON.parse(text);

  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  analyzeWithGemini,
};