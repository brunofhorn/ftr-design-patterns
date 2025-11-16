const express = require("express");
const cors = require("cors");
const { translate } = require("./models/api");

const app = express();
const port = 3000;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/translate", async (req, res) => {
  const englishText = req.body["text"];

  const portugueseText = await translate(englishText);

  res.send(portugueseText);
});

app.listen(port, () => {
  console.log("Node server is running on " + port);
});
