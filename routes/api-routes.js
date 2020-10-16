const db = require("../models/workout-models");

const router = require("express").Router();

router.get("/workouts", (req, res) => {
  db.find({})
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.status(400).json(err);
      console.log(err);
    });
});

router.post("/workouts", ({ body }, res) => {
  db.create(body)
    .then(newWorkout => {
      res.json(newWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
      console.log(err);
    });
});

module.exports = router;