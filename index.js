"use-strict";

require("dotenv/config");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const Router = require("./src/Routes/index")


const db = require("./src/Config/database")

db.authenticate()
    .then(() => {
        console.log("Database Connected.")
    })
    .catch(err => {
        console.log("Unable to connect to the database:", err)
    });

const app = express();

app.use(cors());

const portServer = 5000;
const port = process.env.PORT || portServer;
const nodeEnv = "Development";

app.listen(port, () => {
    console.log(`Server is running in port ${port} in ${nodeEnv} Node`);
})

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/", Router);

module.exports = app;
