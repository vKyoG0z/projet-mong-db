const express = require('express');
const router = express.Router();
const challenges = require('./challenges/challenges.json');

// Route pour récupérer un défi aléatoire
router.get('/random-challenge', (req, res) => {
  const randomIndex = Math.floor(Math.random() * challenges.length);
  const randomChallenge = challenges[randomIndex];
  res.json(randomChallenge);
});




// Autres routes...

module.exports = router;
