const mongoose = require("mongoose");

//using mongoose schema
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    workoutName:{
        type: String,
        required: "Choose a workout option"
    },
    name:{
        type: String,
        required: "What is the workout name?"
    },
    duration:{
        type: Number,
        required: "How many minutes do you want to workout?"
    },
    weight:{
        type: Number,
        required: "What is the desired weight?"
    },
    reps:{
        type: Number,
        required: "How many reps do you want to do?"
    },
    sets:{
        type: Number,
        required: "How many sets do you want to do?"
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;