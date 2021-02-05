const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParse: true,
    useFindAndModify: false
});

app.use(require("./routes/api.js"));
// const Workout = require("./models/Workout");
// app.get("/api/workouts", (req, res) => {
//     Workout.find().then((workout) => {
//         res.json(workout);
//     })
// })

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
})

