
//the code below connects with mongodb

//Getting the mongo client( What is mongoclient? The MongoClient class is a class that allows for making Connections to MongoDB. remarks.)
const { MongoClient } = require('mongodb');

//main function - call functions that connect to database then disconnect from cluster ( what is cluster? MongoDB cluster allows a MongoDB database to either horizontally scale across many servers with sharding, or to replicate data ensuring high availability with MongoDB replica sets, therefore enhancing the overall performance and reliability of the MongoDB cluster.)
async function main() {

  //constant for my connection uri
  const uri = "mongodb+srv://Lcounts:haptm140AxW25kyE@sarstdb.afmestn.mongodb.net/?retryWrites=true&w=majority";

  //creates a new instance of mongoClient
  const client = new MongoClient(uri);

  try {
    //attempt to connect to server waits further execution until operation is complete
    await client.connect();

    //calls list databases function
    await listDatabases(client);

  } catch (e) {
    //sends any errors to console.error
    console.error(e);
  } finally {
    //closes connection to client
    await client.close();
  }
}

main().catch(console.error);

//list databases function
async function listDatabases(client) {

  //gets list of databases
  const databasesList = await client.db().admin().listDatabases();

  //prints each database
  console.log("Databases:");
  databasesList.databases.forEach(db => {
    console.log(`- ${db.name}`);
  })
}
//mongodb code ends...