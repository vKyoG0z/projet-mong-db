const express = require('express');
const router = express.Router();
const challenges = require('./challenges/challenges.json');

// Route pour récupérer plusieurs défis aléatoires
router.get('/random-challenge', (req, res) => {
  let numberOfChallenges = parseInt(req.query.limit) || 1;
  numberOfChallenges = Math.min(numberOfChallenges, 100); // Limiter à 100 défis par requête
  const challengesCopy = [...challenges]; // Copie du tableau de défis initial
  const challengesToSend = []; // Tableau vide dans lequel on stocke les défis à renvoyer

  // Boucle pour générer autant de défis aléatoires que spécifié par le paramètre limit
  for (let i = 0; i < numberOfChallenges; i++) {
    const randomIndex = Math.floor(Math.random() * challengesCopy.length);
    const randomChallenge = challengesCopy.splice(randomIndex, 1)[0]; // Retire le défi sélectionné du tableau de défis copié
    challengesToSend.push(randomChallenge); // Ajoute le défi aléatoire au tableau des défis à renvoyer
  }

  res.json(challengesToSend); // Renvoie le tableau au format JSON
});




module.exports = router;
