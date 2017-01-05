const express = require("express");

const app = express();

app.use(express.static("client"));

app.get("/supersonic-transport", (req, res) => {
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log("Listening on port 3000. Working directory is", process.cwd());
});
