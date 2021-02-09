// === Import required dependencies ===
const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");

// === API Routes ===
// --- Get route for all workouts ---
router.get("/api/workouts", (req, res) => {
    // Find all workouts
    Workout.find()
    // Then return them as JSON
    .then((workout) => {
        res.json(workout);
    })
    // Otherwise return an error
    .catch((err) => {
        res.json(err);
    });
});

// --- Get route for 7 most recent workouts ---
router.get("/api/workouts/range", (req, res) => {
    // Find all workouts
    Workout.find()
    // Sort for most recent workouts
    .sort({day: -1})
    // Limit results to 7
    .limit(7)
    //  Then return results as JSON
    .then((workouts) => {
        res.json(workouts);
    })
    // Otherwise return an error
    .catch((err) => {
        res.json(err);
    });
})

// --- Post route to create a workout ---
router.post("/api/workouts", ({body}, res) => {
    // Create a new workout with current date
    Workout.create({day: new Date()})
    // Then return the created workout
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    // Otherwise return an error
    .catch(err => {
        res.json(err);
    });
});

// --- Put route to update a workout with a new exercise ---
router.put("/api/workouts/:id", (req, res) => {
    // Get the exercise details from the body
    const exercise = req.body;
    // Update the workout identified by id, and push the new exercise
    Workout.updateOne(
        {_id: req.params.id}, 
        {$push: {exercises: exercise}}
    )
    // Then return the updated workout
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    // Otherwise return an error
    .catch(err => {
        res.json(err);
    })
})



module.exports = router;