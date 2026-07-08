const express = require("express");
const cors = require("cors");
require("dotenv").config();
const analyzeRoutes = require("./routes/analyzeRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", analyzeRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 PDF Analyzer Backend is Running!");
});

// Test Route
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Frontend connected successfully!",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});