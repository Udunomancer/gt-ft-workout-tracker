// === Importing required dependencies ===
const path = require("path");
const express = require("express");
const router = express.Router();

// === HTML Routes ===
// --- Get route for the stats page ---
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
})

// --- Get route for the exercise page ---
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

module.exports = router;