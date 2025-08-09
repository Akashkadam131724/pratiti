import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import ConnectDb from "./db/connection.js";
import ContentRouter from "./view/content.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your Vite frontend URL
    credentials: true, // Enable cookies and headers to be sent across origins
  })
);

const DB = process.env.DB;
const PORT = process.env.PORT || 3000; // Change PORT to 3000 if you want to run on localhost:3000

app.get("/", (req, res) => {
  res.send(`<h1>Hello world </h1>`);
});

app.use("/api/content", ContentRouter);

app.listen(PORT, async () => {
  try {
    await ConnectDb(DB);
    console.log(`Server running on http://localhost:${PORT}`);
  } catch (err) {
    console.error(`Error starting server: ${err.message}`);
  }
});
