const mongoose = require("mongoose");

const candidatePwd = "kdGQNqFPq7epfoLM"
const candidateUser = "visions-candidate"

// Database
const mongoDB = "mongodb+srv://"+candidateUser+":"+candidatePwd+"@cluster0.klwyv.mongodb.net/visions-candidates?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));


mongoose.Promise = require("bluebird");