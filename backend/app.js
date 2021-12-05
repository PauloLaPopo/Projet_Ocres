var express = require('express');
var app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
var RouteMatchs = require('./routes/matchLive');
const matchModel = require('./models/matchLive');




mongoose.connect('mongodb+srv://Antoine:Antoine@testapi.2srsy.mongodb.net/DatabaseDashboard?retryWrites=true&w=majority',
    {
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(() => {
        console.log("Connexion à mongoose réussit")
    }).catch((error) => {
        console.log(error);
    }); // CONNECTION AVEC MONGOOSE DE MONGODB

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());



app.post("/addMatch", async (req, res) => {
    const Team1 = req.body.Team1;
    const Team2 = req.body.Team2;
    const ScoreTeam1 = req.body.ScoreTeam1;
    const ScoreTeam2 = req.body.ScoreTeam2;
    const Place = req.body.Place;


    const match = new matchModel({ Team1: Team1, Team2: Team2, ScoreTeam1: ScoreTeam1, ScoreTeam2: ScoreTeam2, Place: Place });
    await match.save();
    res.send("well add");
});

app.get("/readMatch", async (req, res) => {
    matchModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    });
});

app.put("/updateMatch", async (req, res) => {
    const id = req.body.id;
    const newTeam1 = req.body.newTeam1;
    const newTeam2 = req.body.newTeam2;
    const newScoreTeam1 = req.body.newScoreTeam1;
    const newScoreTeam2 = req.body.newScoreTeam2;
    const newPlace = req.body.newPlace;


    try {
        await matchModel.findById(id, (error, MatchToUpdate) => {
            MatchToUpdate.Team1 = newTeam1;
            MatchToUpdate.Team2 = newTeam2;
            MatchToUpdate.ScoreTeam1 = newScoreTeam1;
            MatchToUpdate.ScoreTeam2 = newScoreTeam2;
            MatchToUpdate.Place = newPlace;
            MatchToUpdate.save();


        })

    } catch (err) {

    }

    res.send("updated");
});

app.delete('/deleteMatch/:id', async (req, res) => {
    const id = req.params.id;
    await matchModel.findByIdAndRemove(id).exec();
    res.send("match supprimé");

});

module.exports = app;
