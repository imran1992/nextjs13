import { MongoClient } from "mongodb";
const connectString = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.gx1mtiy.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority&appName=Cluster0`;
const Handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }
    const newMessage = { email, name, message };

    let client;

    try {
      client = await MongoClient.connect(connectString);
    } catch (e) {
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }

    const db = client?.db();

    try {
      const result = await db.collection("message").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (e) {
      client.close();
      res.status(500).json({ message: "String message failed!" });
      return;
    }

    client.close();
    res.status(201).json({ message: "SuccessFully sent", newMessage });
  }
};

export default Handler;
