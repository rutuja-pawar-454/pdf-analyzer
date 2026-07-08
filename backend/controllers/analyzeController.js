
const { extractPdfText } = require("../services/pdfService");
const { analyzeWithGemini } = require("../services/geminiService");

const analyzePdf = async (req, res) => {
    console.log("Analyze endpoint reached");
  try {
    const { pdfUrl } = req.body;

    if (!pdfUrl) {
      return res.status(400).json({
        success: false,
        message: "PDF URL is required.",
      });
    }

    // Step 1: Extract PDF text
    const pdfText = await extractPdfText(pdfUrl);

    // Step 2: Analyze using Gemini
    const analysis = await analyzeWithGemini(pdfText);

    // Step 3: Send response
    res.json({
      success: true,
      analysis,
    });

  } catch (error) {

    console.error(error);

    let message = "Something went wrong while analyzing the PDF.";

    // PDF not found
    if (error.response?.status === 404) {
        message = "Unable to download the PDF. Please check the URL.";
    }

    // PDF is inaccessible (403)
    else if (error.response?.status === 403) {
        message = "This PDF cannot be accessed publicly.";
    }

    // Gemini quota exceeded (429)
else if (
    error.status === 429 ||
    error.message?.includes("429")
) {
    message = "Gemini API quota exceeded. Please try again later.";
}

    // Gemini error
    else if (error.message?.toLowerCase().includes("gemini")) {
        message = "AI service is temporarily unavailable.";
    }

    res.status(500).json({
        success: false,
        message,
    });

}
};

module.exports = {
  analyzePdf,
};