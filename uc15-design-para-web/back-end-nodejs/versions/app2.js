import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World, this time youre gonna make this");
});

app.get("/serie-a", (req, res)=> {
    res.send("<h2>Serie A Brasileirão</h2> <p> Santos primeiro lugar </p>")
})
export default app;
