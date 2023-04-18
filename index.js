const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});

app.get('/prueba', (req, res) => {
  res.send('Prueba exitosa');
});

const server = app.listen(PORT, () => {
    console.log(`API escuchando en el puerto ${PORT}`);
  });

module.exports = server;