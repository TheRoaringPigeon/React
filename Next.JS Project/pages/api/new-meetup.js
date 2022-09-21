import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://<username>:>password>@cluster0.g3ysge4.mongodb.net/<db>?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);
    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
