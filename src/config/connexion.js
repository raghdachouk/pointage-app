import mongoose from "mongoose";
import 'dotenv/config'

const connectionString= process.env.ATLAS_URI

const initDatabase = async () =>
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

export default initDatabase;
