const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/notes", (req, res) => {
  res.json([
    { id: 1, text: "Eerste note" },
    { id: 2, text: "Tweede note" }
  ]);
});

app.listen(port, () => {
  console.log(`Notes service draait op poort ${port}`);
});
