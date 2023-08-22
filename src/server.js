import "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import Express from "express";
import { createServer } from "http";

import routes from "@routes";
import initDatabase from "./config/connexion";

export const app = new Express();
const PORT = process.env.PORT || 3030;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes.forEach((route) => app.use(route));

const server = createServer(app);

initDatabase().then(() => {
  server.listen(PORT, async (error) => {
    if (error) console.log(error);
    console.log(`server is ready on ${PORT}`);
  });
});
