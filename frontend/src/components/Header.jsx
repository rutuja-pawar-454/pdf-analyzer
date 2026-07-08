import { FaFilePdf } from "react-icons/fa";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <FaFilePdf className="logo-icon" />
      </div>

      <h1>AI PDF Analyzer</h1>

      <p>
        Analyze publicly accessible PDF documents using Google Gemini AI
      </p>
    </header>
  );
}

export default Header;