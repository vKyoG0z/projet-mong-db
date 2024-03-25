
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://julienjulienreynaud:aYPYZSzgB9rYxr8Z@cluster0.jexnol0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectToMongoDB() {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    await client.connect();
    console.log("Connected to MongoDB successfully!");
    return client.db("admin");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

module.exports = connectToMongoDB;
