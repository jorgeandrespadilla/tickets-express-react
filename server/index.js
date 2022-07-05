import express from "express";
import cors from "cors";
import path, { join } from "path";
import { fileURLToPath } from "url";

import { getPeople, getTickets } from "./data/data.js";
import { filterExpirationByDate } from "./filters.js";

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(join(__dirname, "/../client/build")));

app.get("/health", (req, res) => {
  return res.json("ok");
});

// Retrieve all persons and data
app.get("/people", (req, res) => {
  console.log("a");
  return res.json(getPeople());
});

// Retrieve all filtered persons and data by date
app.post("/", (req, res) => {
  return res.json(
    filterExpirationByDate(getPeople(), getTickets(), new Date(req.body.date))
  );
});

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "/../client/build/index.html"));
});

app.use((req, res) => {
  return res.sendStatus(404);
});

app.listen(port, () => {
  console.log("The API is running on http://localhost:" + port);
});
