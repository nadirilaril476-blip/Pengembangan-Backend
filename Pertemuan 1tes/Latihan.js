const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Selamat Datang User");
});

app.listen(port, () => {
  console.log(`Aplikasi berjalan di http://localhost:${port}`);
});

app.get("/about", (req, res) => {
  res.send("Aku Sedang Belajar Backend Dengan Express JS");
});

app.listen(port, () => {
  console.log(`Aplikasi berjalan di http://localhost:${port}`);
});
