const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
})

const workoutSchema = new Schema({
    day: {
        type: Date
    },
    exercises: [exerciseSchema],
    
},
{ toJSON: { virtuals: true} })

workoutSchema.virtual("totalDuration").get(function() {
    let total = 0;
    for (let i = 0; i < this.exercises.length; i++) {
        total = total + this.exercises[i].duration;
    }
    return total;
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;