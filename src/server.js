import bodyParser from "body-parser";
import cors from "cors";
import Express from "express";
import routes from "@routes";

export const app = new Express();
const PORT = process.env.PORT || 3030;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes.forEach((route) => app.use(route));

app.listen(PORT, (error) => {
  if (error) console.log(error);
  console.log(`app runing on port: ${PORT}!`);
});
