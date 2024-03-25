const express = require('express');
const { resolve } = require('path');
const connectToMongoDB = require('./connexion');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

// Connect to MongoDB when the server starts
connectToMongoDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error("Failed to start the server:", error);
    process.exit(1); // Exit the process if failed to connect to MongoDB
  });
