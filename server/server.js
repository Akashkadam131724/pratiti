import dotenv from "dotenv";

import express from "express";
import ConnectDb from "./db/connection.js";
import ContentRouter from "./view/content.js";

dotenv.config();

const app = express();
app.use(express.json());

const DB = process.env.DB;
const PORT = process.env.PORT || 3000; // Change PORT to 3000 if you want to run on localhost:3000

app.get("/", (req, res) => {
  res.send(`<h1>Hello world </h1>`);
});

app.use("/content", ContentRouter);

app.listen(PORT, async () => {
  try {
    await ConnectDb(DB);
    console.log(`Server running on http://localhost:${PORT}`);
  } catch (err) {
    console.error(`Error starting server: ${err.message}`);
  }
});
