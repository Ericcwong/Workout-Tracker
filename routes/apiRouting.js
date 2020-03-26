// const express = require("express");
// const router = express.Router();
const db = require("../models");

//getting workout
// router.get("/api/workouts", (req, res) => {
//     db.Workout.find({})
//     .then(dbWorkout => {
//         res.json(dbWorkout);
//     })
//     .catch(err => {
//         res.status(400).json(err);
//     });
// });
// router.get("/api/workouts/:id", (req, res) => {
//     db.Workout.find({})
//     .sort({ date: -1})
//     .then(dbWorkout => {
//         res.json(dbWorkout);
//     })
//     .catch(err => {
//         res.status(400).json(err);
//     });
// });

// //adding a new workout
// router.post("/api/workouts", ({ body }, res) => {
//     db.Workout.create(body)
//     .then(dbWorkout => {
//         res.json(dbWorkout);
//     }).catch(err => {
//         res.status(400).json(err);
//     });
// });

//updating a workout
// router.post("/api/workouts", ({ body }, res) => {
//     Workout.create(body)
//     .then(dbWorkout => {
//         res.json(dbWorkout);
//     }).catch(err => {
//         res.status(400).json(err);
//     });
// });

module.exports = function(app) {
    app.get("/api/workouts", (req, res)  =>{
      db.Workout.find({}).then((dbWorkouts) => {
        res.json(dbWorkouts);
      });
    });
  
    app.post("/api/workouts/", function({body}, res) {
      db.Workout.create(body).then(dbWorkouts => {
          res.json(dbWorkouts);
      }).catch(err => {
          res.status(400).json(err);
      })
    });
    app.put("/api/workouts/:id", function(req, res) {
        db.Workout.findByIdAndUpdate(req.params.id, req.body, {new:true}).then(dbWorkouts => {
            res.json(dbWorkouts);
        }).catch(err => {
            res.status(400).json(err);
        })
      });
};
  

// module.exports = router;

