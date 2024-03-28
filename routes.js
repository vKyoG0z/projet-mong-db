const express = require('express');
const router = express.Router();

const challenges = require('./challenges/challenges.json');
const verifyToken = require('./authentification'); // Import du middleware d'authentification


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


// Route pour ajouter un défi
router.post('/add-challenge', verifyToken, (req, res) => {
  // Logique pour ajouter un défi à la base de données
  res.send('Défi ajouté avec succès !');
});




module.exports = router;
