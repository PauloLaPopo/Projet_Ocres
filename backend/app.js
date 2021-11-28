var express = require('express');
var app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var RouteMatchs = require('./routes/matchLive');

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

mongoose.connect('mongodb+srv://Antoine:Antoine@testapi.2srsy.mongodb.net/DatabaseDashboard?retryWrites=true&w=majority',
    {
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(() => {
        console.log("Connexion success ! ")
    }).catch((error) => {
        console.log(error);
    }); // CONNECTION AVEC MONGOOSE DE MONGODB

app.use(express.json());
app.use(bodyParser.json());

app.use('/api/matchs', RouteMatchs);
app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
