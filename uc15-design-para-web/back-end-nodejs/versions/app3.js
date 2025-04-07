import express from "express";
const app = express();

//MOCK
const serieA = [
  {
    id: 1,
    time: "Santos",
    Estado: "Santos",
    campeao: "sim",
    qtdeTitulo: 3,
    posicaoAnoAnterior: "3º",
    foiRebaixado: "Depende",
  },
  {
    id: 2,
    time: "Bahia",
    Estado: "BA",
    campeao: "sim",
    qtdeTitulo: 1,
    posicaoAnoAnterior: "13º",
    foiRebaixado: "Sim",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World, this time youre gonna make this");
});

app.get("/serie-a", (req, res) => {
  res.send(serieA)
});


export default app;
