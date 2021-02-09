const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParse: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: " + err);
});

app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));
// const Workout = require("./models/Workout");
// app.get("/api/workouts", (req, res) => {
//     Workout.find().then((workout) => {
//         res.json(workout);
//     })
// })

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
})

