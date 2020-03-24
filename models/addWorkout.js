const mongoose = require("mongoose");

//using mongoose schema
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    workoutName:{
        type: String,
        required: "Enter a name for this workout"
    },
    workoutSet:{
        type: Number,
        required: "How many sets do you want to do?"
    },
    workoutReps:{
        type: Number,
        required: "How many reps do you want to do?"
    },
    workoutTime:{
        type
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;