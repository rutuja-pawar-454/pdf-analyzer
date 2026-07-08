import { useState } from "react";
import { FaLink } from "react-icons/fa";
import "../styles/PdfInput.css";

function PdfInput({ onAnalyze, loading }) {

  const [pdfUrl, setPdfUrl] = useState("");

  const handleSubmit = () => {

    if (loading) return;

    onAnalyze(pdfUrl);

};

  return (

    <div className="input-container">

      <div className="input-box">

        <FaLink className="input-icon" />

        <input
          type="text"
          placeholder="Paste your PDF URL here..."
          value={pdfUrl}
          onChange={(e) => setPdfUrl(e.target.value)}
        />

      </div>

      <button
    className="analyze-btn"
    onClick={handleSubmit}
    disabled={loading}
>
    {loading ? "Analyzing..." : "Analyze PDF"}
</button>

    </div>

  );

}

export default PdfInput;