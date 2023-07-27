const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://news-portal:6S4i2VhxtjmVaoCJ@cluster0.mj4ed9j.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("news-portal").command({ ping: 1 });
    const newsCollection = await client.db("news-portal").collection("news");

    if (req.method === "GET") {
      const news = await newsCollection.find().toArray();
      res.send({
        status: 200,
        msg: "Get all news successfully",
        data: news,
      });
    }

    if (req.method === "POST") {
      const news = await newsCollection.insertOne(req.body);
      res.send({
        status: 200,
        msg: "News created successfully",
        data: news,
      });
    }
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
export default run;

// const handler = (req, res) => {
//   res.status(200).send({
//     msg: "successfull server is running",
//   });
// };

// export default handler;
