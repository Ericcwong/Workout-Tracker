//Dependencies
//Express
const express = require("express");
//Mongoose
const mongoose = require("mongoose");
//Morgan (Logs all request details, this is also a middleware)
const morgan = require("morgan");

//assigning port for heroku and localhost
const PORT = process.env.PORT || 9000;
//Assigning app to express function
const app = express();

//middleware that logs all request details
app.use(morgan("short"));
//middleware that parses json objects and body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Uses the public folder
app.use(express.static("public"));

//Connects to mongoDB if not it would create one
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    },
    () => console.log("Connected to DB")
);
// Routing
require("./routes/htmlRouting")(app);
require("./routes/apiRouting")(app);
// app.use(require("./routes/apiRouting"));
//Create and start server
app.listen(PORT, () => {
    console.log(`Currently listening on http://localhost:${PORT}`)
})