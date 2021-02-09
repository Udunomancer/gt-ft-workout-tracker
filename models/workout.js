// === Import required Mongoose dependencies ===
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// === Models ===
// --- Exercise model used in workout model ---
const exerciseSchema = new Schema({
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
})

// --- Workout model ---
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