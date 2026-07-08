const axios = require("axios");
const pdf = require("pdf-parse");

const extractPdfText = async (pdfUrl) => {
  try {
    // Download PDF
    const response = await axios.get(pdfUrl, {
      responseType: "arraybuffer",
    });

    // Convert PDF to text
    const data = await pdf(response.data);

    return data.text;
  } catch (error) {
    console.error("PDF Service Error:", error);

    throw error;
}
};

module.exports = {
  extractPdfText,
};