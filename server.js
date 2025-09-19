const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.send("Welkom bij Note Automati 🚀");
});

// Example notes route
app.get("/notes", (req, res) => {
  res.json([
    { id: 1, text: "Eerste note" },
    { id: 2, text: "Tweede note" },
    { id: 3, text: "Derde note" }
  ]);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server draait op poort ${PORT}`);
});
