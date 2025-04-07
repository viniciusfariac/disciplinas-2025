import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World, this time youre gonna make this");
});

export default app;
