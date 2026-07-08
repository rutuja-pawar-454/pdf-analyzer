import { toast } from "react-toastify";
import { useState, useRef } from "react";

import Header from "./components/Header";
import PdfInput from "./components/PdfInput";
import AnalysisResult from "./components/AnalysisResult";

import "./styles/App.css";

import api from "./services/api";

function App() {

  const [result, setResult] = useState(null);
const [loading, setLoading] = useState(false);
const [hasAnalyzed, setHasAnalyzed] = useState(false);
const [loadingText, setLoadingText] = useState("");
const [error, setError] = useState("");
const isAnalyzing = useRef(false);

 const handleAnalyze = async (pdfUrl) => {

    setResult(null);

    // Prevent multiple requests
    if (isAnalyzing.current) return;

    isAnalyzing.current = true;

    if (!pdfUrl.trim()) {
        toast.error("Please enter a PDF URL.");
        isAnalyzing.current = false;
        return;
    }

    try {
        new URL(pdfUrl);
    } catch {
        toast.error("Please enter a valid URL.");
        isAnalyzing.current = false;
        return;
    }



if (!pdfUrl.toLowerCase().endsWith(".pdf")) {
  toast.error("Please enter a valid PDF URL.");
   isAnalyzing.current = false;
  return;
}


    try {
      setLoading(true);
      setHasAnalyzed(true);
      setError("");
      setLoadingText("Downloading PDF...");
      setTimeout(() => {
    setLoadingText("Extracting text...");
}, 800);

setTimeout(() => {
    setLoadingText("Sending to Gemini AI...");
}, 1800);

setTimeout(() => {
    setLoadingText("Generating summary...");
}, 3200);
      const response = await api.post("/analyze", {
        pdfUrl,
      });

      const analysis = response.data.analysis;

      setResult(analysis);
      setLoading(false);
      setLoadingText("");

    } catch (error) {

    console.error(error);

    if (!error.response) {

        toast.error("Cannot connect to the server.");

    } else {

        toast.error(
            error.response.data.message ||
            "Something went wrong. Please try again."
        );

    }
    setResult(null);
    setLoading(false);
    setLoadingText("");

    

}

 finally {
    isAnalyzing.current = false;
}



  };
return (

  <div className="container">

    <Header />

    {!hasAnalyzed ? (

      <div className="home-layout">

        <div className="home-card">

          <PdfInput
            onAnalyze={handleAnalyze}
            loading={loading}
          />

        </div>

      </div>

    ) : (

      <div className="dashboard">

        <div className="left-panel">

          <div className="input-card">

            <h2>Analyze PDF</h2>

            <p className="input-description">
              Paste a publicly accessible PDF URL below and let Google Gemini generate an AI-powered summary.
            </p>

            <PdfInput
              onAnalyze={handleAnalyze}
              loading={loading}
            />

            <p className="input-note">
              Supports public PDF links (arXiv, research papers, reports, etc.)
            </p>

          </div>

        </div>

        <div className="right-panel">

          {loading ? (

            <div className="loading-card">

              <div className="loader"></div>

              <h2>Analyzing your PDF...</h2>

              <p>{loadingText}</p>

            </div>

          ) : (

              result && <AnalysisResult result={result} />
          )}

        </div>

      </div>

    )}

  </div>

);

}

export default App;