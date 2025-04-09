import express from "express";
import { SERIE_A, rodada01 } from "./mock.js";
const app = express();
app.use(express.json());

function buscarTimePorId(id) {
  return SERIE_A.filter((time) => time.id == id);
}

app.get("/", (req, res) => {
  res.send("<h2>Serie A Brasileirão</h2> <p> Santos primeiro lugar </p>");
});

app.get("/serie-a", (req, res) => {
  res.send(SERIE_A);
});

app.get("/serie-a/:id", (req, res) => {
  res.json(buscarTimePorId(req.params.id));
  // let index = req.params.id
  // res.send(SERIE_A);
  // console.log(index)
});

app.post("/rodada01", (req, res) => {
  rodada01.push(req.body);
  res.status(201).send("Rodada cadastrada com sucesso");
});

app.get("/rodada01", (req, res) => {
  res.status(201).send(rodada01);
});

app.post("/serie-a", (req, res) => {
  SERIE_A.push(req.body);
  res.status(201).send("Time criado com sucesso");
});

export default app;
