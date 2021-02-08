const express = require("express");
const router = express.Router();
const Workout = require("../models/Workout");

router.get("/api/workouts", (req, res) => {
    Workout.find().then((workout) => {
        res.json(workout);
    });
});

router.get("/api/workouts/range", (req, res) => {
    
})

router.post("/api/workouts", ({body}, res) => {
    const workout = new Workout(body);
    Workout.create(workout)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {

})



module.exports = router;