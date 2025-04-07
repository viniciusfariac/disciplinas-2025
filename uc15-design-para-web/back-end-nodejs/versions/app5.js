import express from "express";
import { SERIEA } from "./mock.js";
const app = express();

app.get("/", (req, res) => {
  res.send("<h2>Serie A Brasileirão</h2> <p> Santos primeiro lugar </p>");
});

app.get("/serie-a", (req, res) => {
  res.send(SERIEA);
});

app.post("rodada01", (req, res) => {
  res.status(200).send("Rodada 01 brasileirão");
});

export default app;
