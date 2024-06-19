import express from "express";
import bodyparser from "body-parser";
const app = express();
import routeNotes from "./routes/notes.js";

import dotenv from "dotenv";
import { testConnection } from "../databse/Db.js";
dotenv.config();

app.use(bodyparser.json());
app.use(routeNotes);

app.listen(process.env.APP_PORT, async () => {
  await testConnection();
  console.log(`Server running at http://localhost:${process.env.APP_PORT}`);
});
