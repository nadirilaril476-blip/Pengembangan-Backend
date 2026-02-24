const express = require("express");
const app = express();
const port = 5000;

//get(Mengambil data) post(Mengirim data) put(Mengedit ) delete(Menghapus data)

app.get("/", (get, res) => {
  res.send("ini home");
});
app.listen(port, () => {
  console.log(`Aplikasi berjalan https://localhost:${port}`);
});

app.get("/profile", (get, res) => {
  res.send("ini halaman profile");
});
app.listen(port, () => {
  console.log(`Aplikasi berjalan https://localhost:${port}`);
});
app.get("/Dasboard", (get, res) => {
  res.send("ini halaman dasboard");
});
app.listen(port, () => {
  console.log(`Aplikasi berjalan https://localhost:${port}`);
});
