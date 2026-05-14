const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/home', (req, res) => {
  res.send(`
    <body style="
      background:#0b0b0b;
      color:#fff;
      display:flex;
      align-items:center;
      justify-content:center;
      height:100vh;
      font-family:Inter,sans-serif;
      letter-spacing:2px;
    ">
      EXPERIÊNCIA CARREGADA
    </body>
  `);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});