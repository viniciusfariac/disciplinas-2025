import express from "express";
import { SERIEA, rodada01 } from "./mock.js";
const app = express();

app.get("/", (req, res) => {
  res.send("<h2>Serie A Brasileirão</h2> <p> Santos primeiro lugar </p>");
});

app.get("/serie-a", (req, res) => {
  res.send(SERIEA);
});

app.post("/rodada01", (req, res) => {
  rodada01.push(req.body);
  res.status(200).send("Rodada 01 brasileirão");
});

app.post("/serie-a", (req, res) => {
  SERIEA.push(req.body)
  res.status(201).send("Time criado com sucesso")  
})

export default app;