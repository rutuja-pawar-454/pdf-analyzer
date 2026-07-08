const express = require("express");
const router = express.Router();

const {
  analyzePdf,
} = require("../controllers/analyzeController");

// POST /api/analyze
router.post("/analyze", analyzePdf);

module.exports = router;