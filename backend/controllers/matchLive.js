const match = require('../models/matchLive');
const Match = require('../models/matchLive');

exports.createMatch = (req, res) => {
    const Mat = new Match(req.body);

    Mat.save()
        .then((match) => {
            return res.status(201).json({ match })
        })
        .catch((error) => {
            return res.status(400).json({ error })
        });

}

exports.getOneMatch = (req, res) => {
    const id = req.params.id;
    Match.findOne({ _id: id }, (err, match) => {
        if (err) {
            return res.status(400).json({ err });
        } else {
            return res.status(200).json({ match });
        }
    })
};

exports.getAllMatchs = (req, res) => {
    Match.find()
        .then((matchs) => { return res.status(200).json({ matchs }) })
        .catch((error) => { return res.status(200).json({ error }) });
};

exports.updateMatch = (req, res) => {
    const id = req.params.id;
    Match.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Impossible de modifier le match avec l'id :${id}`
                });
            } else res.send({ message: "Le match à bien été modifié !" });
        })
        .catch(err => {
            res.status(500).send({
                message: "Erreur updating Match avec l'id : " + id
            });
        });
};

exports.deleteMatch = (req, res) => {
    const id = req.params.id;

    Match.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Impossible de supprimer le match avec l'id : ${id}`
                });
            } else {
                res.send({
                    message: "Le match à bien été supprimé !"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Impossible de supprimer le match avec l'id : " + id
            });
        });
};