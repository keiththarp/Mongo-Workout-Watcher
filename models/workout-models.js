const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Please enter a type for this workout"
  },
  name: {
    type: String,
    required: "Enter an amount"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

type: "resistance",
  name: "Bicep Curl",
    duration: 20,
      weight: 100,
        reps: 10,
          sets: 4