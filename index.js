const express = require('express');
const app = express();
const port = 3000;

// Route voor de homepage
app.get('/', (req, res) => {
  res.send('Hallo, mijn naam is Leen!');
});

// Server starten
app.listen(port, () => {
  console.log(`Server draait op http://localhost:${port}`);
});
