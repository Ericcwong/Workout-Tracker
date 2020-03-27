
const db = require("../models");

module.exports = function(app) {
    app.get("/api/workouts", (req, res)  =>{
      db.Workout.find({}).then((dbWorkouts) => {
        res.json(dbWorkouts);
      });
    });

    app.get("/api/workouts/range", (req, res)  =>{
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
        db.Workout.update({ _id: req.params.id}, {$push: {"exercises": req.body } }).then(dbWorkouts => {
            res.json(dbWorkouts);
        }).catch(err => {
            res.status(400).json(err);
        })
      });
};
  

// module.exports = router;

