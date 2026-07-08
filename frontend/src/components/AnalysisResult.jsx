import { useState } from "react";
import "../styles/AnalysisResult.css";
function AnalysisResult({ result }) {
    const [copied, setCopied] = useState(false);
  if (!result) {
    return (
        <div className="result-placeholder">

            <div className="placeholder-icon">
                📄
            </div>

            <h2>AI Analysis</h2>

            <p>
                Paste a public PDF URL and click
                <strong> Analyze PDF </strong>
                to generate an AI-powered summary.
            </p>

            <div className="placeholder-list">

                <div>✅ Document Type</div>

                <div>✅ Title</div>

                <div>✅ Authors</div>

                <div>✅ Summary</div>

                <div>✅ Key Takeaways</div>

            </div>

        </div>
    );
}

  return (
    <div className="result-container">

      <div className="result-card">
        <h2>📄 Document Type</h2>
        <p>{result.documentType}</p>
      </div>

      <div className="result-card">
        <h2>📘 Title</h2>
        <p>{result.title}</p>
      </div>

      <div className="result-card">
        <h2>👥 Authors</h2>

        <ul>
          {result.authors.map((author, index) => (
            <li key={index}>{author}</li>
          ))}
        </ul>

      </div>

     

      <div className="result-card">
  <h2>📝 Summary</h2>

  <p>{result.summary}</p>

  <button
  className="copy-btn"
  onClick={() => {

    navigator.clipboard.writeText(result.summary);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);

  }}
>
  {copied ? "✅ Copied!" : "📋 Copy Summary"}
</button>

</div>

      <div className="result-card">
        <h2>⭐ Key Takeaways</h2>

        <ul>
          {result.keyTakeaways.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </div>

    </div>
  );
}

export default AnalysisResult;