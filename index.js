require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

app.use(cors());
app.use(express.json());

const uri = process.env.DATABASE_URL;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const notesDB = client.db("notesDB");
    const notesCollection = notesDB.collection("notesCollections");

    // GET route to fetch all notes
    app.get("/notes", async (req, res) => {
      const notes = await notesCollection.find().toArray();
      res.send(notes);
    });

    // POST route to add a new note
    app.post("/notes", async (req, res) => {
      const { title, content, email } = req.body;

      if (!title || !content) {
        return res.status(400).send("Title and content are required.");
      }

      const result = await notesCollection.insertOne({ title, content, email });
      res.status(201).send({ message: "Note added!", id: result.insertedId });
    });
    app.get("/notes/:id", async (req, res) => {
      const id = req.params.id;
      const usersData = await notesCollection.findOne({
        _id: new ObjectId(id),
      });
      res.send(usersData);
    });
    // PATCH route to update an existing note
    app.patch("/notes/:id", async (req, res) => {
      const id = req.params.id;
      const updatedData = req.body;
      const result = await notesCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedData }
      );
      res.send(result);
    });

    app.delete("/notes/:id", async (req, res) => {
      const id = req.params.id;
      const result = await notesCollection.deleteOne({
        _id: new ObjectId(id),
      });
      res.send(result);
    });

    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}
run().catch(console.log);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
