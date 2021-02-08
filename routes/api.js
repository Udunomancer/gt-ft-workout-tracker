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
    // console.log(body);
    Workout.create(body)
    .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    Workout.updateOne(
        {id: req.params.id}, 
        {$push: {exercises: req.body}}
    ).then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    })
})



module.exports = router;