const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
    Workout.find()
    // Workout
    // .aggregate([
    //     {"$unwind": "$exercises"},
    //     {"$addFields": {"totalDuration": {"$sum": "$exercises.duration"}}},
    //     {"$group": {
    //         "_id": "$_id",
    //         "day": {"$first": "$day"},
    //         "exercises": {
    //             "$push": "$exercises"
    //         },
    //         "totalDuration": {"$sum": "$totalDuration"}
    //         }
    //     }
    // ])
    .then((workout) => {
        res.json(workout);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find()
    // Workout
    // .aggregate([
    //     {"$unwind": "$exercises"},
    //     {"$addFields": {"totalDuration": {"$sum": "$exercises.duration"}}},
    //     {"$group": {
    //         "_id": "$_id",
    //         "day": {"$first": "$day"},
    //         "exercises": {
    //             "$push": "$exercises"
    //         },
    //         "totalDuration": {"$sum": "$totalDuration"}
    //         }
    //     }
    // ])
    .sort({day: -1})
    .then((workouts) => {
        workouts.splice(7);
        console.log(workouts);
        res.json(workouts);
    })
    // Workout
    // .aggregate
    // .addFields({
    //     totalDuration: {$sum: $exercises.duration}
    // })
    // .sort({day: -1})
    // .then((workouts) => {
    //     workouts.splice(7);
    //     res.json(workouts);
    // });
})

router.post("/api/workouts", ({body}, res) => {
    console.log(body);
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