import { MongoClient } from "mongodb";

const connectionString =
  process.env.ATLAS_URI ||
  "mongodb+srv://choukraghda:raghdach055@cluster0.vefxv2x.mongodb.net/pointage?retryWrites=true&w=majority";
console.log("connectionString: ", connectionString);

const client = new MongoClient(connectionString);
const connexion = async () => {
  let conn;
  try {
    conn = await client.connect();
  } catch (e) {
    console.error(e);
  }

  conn.db("sample_training");
};

export default connexion;
