
const jwt = require('jsonwebtoken');
const secretKey = 'toZB53ztjp'; // Clé secrète pour signer les tokens JWT

// Middleware pour vérifier l'authentification JWT
function verifyToken(req, res, next) {
  
  const token = req.headers['authorization'];// Extraction du token JWT de l'en-tête de la requête
  
  // Vérification si le token est manquant
  if (!token) {
    return res.status(401).send('Token manquant.'); //Message d'erreur
  }

  // Vérifie le token avec la méthode verify
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).send('Token invalide.');
    }
    
    // Vérification si l'utilisateur a le rôle d'administrateur
    if (decoded.role !== 'admin') {
      return res.status(403).send('Accès refusé. Vous devez être administrateur.');
    }
    
    // Si le token est valide et que l'utilisateur est un administrateur, ajoute les informations de l'utilisateur décryptées à l'objet 'req' pour les utiliser dans les routes suivantes
    req.user = decoded;
    
    // Appel du prochain middleware dans la chaîne de middleware
    next();
  });
}

module.exports = verifyToken;
