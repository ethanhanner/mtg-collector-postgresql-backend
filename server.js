// https://bezkoder.com/angular-11-node-js-express-postgresql/
// run with:
// node server.js

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

const db = require("./app/models");

// CALL WHEN ALL TABLES NEED TO BE DROPPED AND RESYNCED
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// CALL WHEN JUST THE TABLES THAT HAVE CHANGED NEED TO BE RESYNCED
db.sequelize.sync({ alter: true }).then(() => {
  console.log("Alter DB");
})

// CALL WHEN MODEL DEFINITIONS (TABLES) HAVE NOT CHANGED SINCE LAST RUN
// db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the mtg-collector backend." });
});

require("./app/routes/set.routes")(app);
require("./app/routes/card.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});