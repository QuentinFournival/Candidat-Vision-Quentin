// Candidate service vars
// Indiques ici les 2 variables qui vont été transmises pour le test
const serviceName = "LinkedIn";
const serviceId = "5fd34277c0aa4521f470267c";


const express = require("express");

const flash = require("connect-flash");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const json2xls = require("json2xls");
const cors = require("cors");
const moment = require("moment");
const data = require('./data/data.js');





// Routes
const general = require("./Routes/general");
const webApp = require("./Routes/webApp");
const dataview = require("./Routes/dataview");

const app = express();

app.set("views", [
  path.join(__dirname, "views"),
  path.join(__dirname, "views/sections"),
]);

app.set("view engine", "ejs");

app.use(flash());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public/")));
app.use(json2xls.middleware);
app.use(cors());



// Candidates
app.use((req, res, next) => {
  req.body.serviceName = serviceName;
  req.body.serviceId = serviceId;
  next()
})

// Routes
app.use("/", general);
app.use("/webApp", webApp);
app.use("/dataview", dataview);

app.use(function (err, req, res, next) {
  console.log(err);
});

let port = process.env.PORT || 8626;
app.listen(port, () => {
  console.log("App running on: http://localhost:" + port);
});
