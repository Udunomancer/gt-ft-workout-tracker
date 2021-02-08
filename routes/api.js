const express = require("express");
const router = express.Router();
const Workout = require("../models/Workout");

router.get("/api/workouts", (req, res) => {
    Workout.find().then((workout) => {
        res.json(workout);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find().then((workout) => {
        res.json(workout);
    });
})

router.post("/api/workouts", ({body}, res) => {
    // console.log(body);
    Workout.create({day: new Date()})
    .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    const exercise = req.body;
    Workout.updateOne(
        {_id: req.params.id}, 
        {$push: {exercises: exercise}}
    ).then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    })
})



module.exports = router;