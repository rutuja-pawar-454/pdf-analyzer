# 📄 AI PDF Analyzer

An AI-powered web application that analyzes publicly accessible PDF documents and generates concise summaries using Google Gemini AI.

This project was developed as part of a technical assignment to demonstrate full-stack development, API integration, error handling, and deployment.

---

## 🚀 Live Demo

**Application:**  
https://pdf-analyzer-frontend-i4v3.onrender.com

---

## ✨ Features

- Analyze publicly accessible PDF documents via URL
- Extract text from PDF files
- Generate AI-powered summaries using Google Gemini AI
- Copy generated summary to clipboard
- Loading progress indicators during analysis
- Comprehensive error handling with user-friendly messages
- Responsive and clean user interface
- Prevents duplicate API requests during analysis

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Axios
- React Toastify
- CSS

### Backend
- Node.js
- Express.js
- Google Gemini API
- PDF Parsing Libraries

### Deployment
- Frontend: Render (Static Site)
- Backend: Render (Web Service)

---

## 📁 Project Structure
```text
PDF-Analyzer/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## ⚙️ How It Works

1. User enters a publicly accessible PDF URL.
2. The frontend sends the request to the Express backend.
3. The backend downloads the PDF.
4. Text is extracted from the PDF.
5. Extracted text is sent to Google Gemini AI.
6. Gemini generates a concise summary.
7. The summary is displayed on the frontend.

---

## 🖼️ Application Workflow

```text
User
   │
   ▼
React Frontend
   │
   ▼
Express Backend
   │
   ▼
Download PDF
   │
   ▼
Extract Text
   │
   ▼
Google Gemini AI
   │
   ▼
Generate Summary
   │
   ▼
Display Results
```

---

## ⚠️ Error Handling

The application gracefully handles:

- Empty URL
- Invalid URL
- Non-PDF URLs
- Broken PDF links
- Corrupted PDF files
- Password-protected PDFs
- Backend connection failures
- Gemini API quota exceeded
- AI service unavailable
- Duplicate Analyze button clicks

---

## 📋 Tested Scenarios

The application has been tested with:

- Research papers
- Technical documentation
- Government PDF documents
- Large PDF files
- Image-heavy PDFs
- Broken PDF URLs
- Invalid URLs
- Empty inputs
- Network failures

---


## 🔮 Future Enhancements

- Upload local PDF files
- Highlight important sections and key insights    from the PDF.
- Maintain a history of previously analyzed PDFs.
- Add user authentication and personalized dashboards.
- Provide multiple summary formats such as brief, detailed, and bullet-point summaries.
- Authentication and user history

---

## 👩‍💻 Author

**Rutuja Pawar**

---
