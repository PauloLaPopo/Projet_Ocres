const express = require('express');
const router = express.Router();
const Match = require('../controllers/matchLive');

router.post('/', Match.createMatch); // Creer dans la base

router.get('/:id', Match.getOneMatch); // AFFICHE PAR ID 

router.get('/', Match.getAllMatchs); // AFFICHE TOUS LES MATCHS 

router.put("/:id", Match.updateMatch); // UPDATE MATCH AVEC ID

router.delete("/:id", Match.deleteMatch); // SUPPRIMER MATCH AVEC ID

module.exports = router;
