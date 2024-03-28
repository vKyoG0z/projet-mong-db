const express = require('express');
const { resolve } = require('path');
const connectToMongoDB = require('./connexion');
const routes = require('./route'); // Assurez-vous que le chemin est correct

const app = express();
const port = 3010;

app.use(express.static('static'));
app.use('/', routes);

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

connectToMongoDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error("Failed to start the server:", error);
    process.exit(1);
  });
