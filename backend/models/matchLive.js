const mongoose = require('mongoose');

const mat = mongoose.Schema({
    Team1: {
        type: String,
        required: true,
    },
    Team2: {
        type: String,
        required: true,
    },
    ScoreTeam1: {
        type: Number,
        required: true,
    },
    ScoreTeam2: {
        type: Number,
        required: true,
    },
    Place: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Matches', mat);