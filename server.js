const express = require("express");
const [notes] = require("./db/db.json");

const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api/notes", (req, res) => {
  res.json(notes);
  console.log(req);
  console.log(res);
});

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}!`);
});
