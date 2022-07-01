import express from "express";
import cors from "cors";

import { getPeople } from "./data/people";
import { filterByDate } from "./filters";

const port = process.env.PORT || 5100;

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static(join(__dirname, "/../client/build")));

app.get("/health", async (req, res) => {
  return res.send("ok");
});

// Retrieve all persons and data
app.get("/", (req, res) => {
  return res.json(getPeople());
});

// Retrieve all filtered persons and data by date
app.post("/", (req, res) => {
  return res.json(filterByDate(getPeople(), req.body.date));
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
