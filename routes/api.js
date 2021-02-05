const express = require("express");
const router = express.Router();
const Workout = require("../models/Workout");

router.get("/api/workouts", (req, res) => {
    Workout.find().then((workout) => {
        res.json(workout);
    });
});



module.exports = router;