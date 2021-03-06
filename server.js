const http = require('http');
const express = require('express');

const port = process.env.PORT || 7000;
const app = express();
const server = http.createServer(app);
const fs = require('fs');
const dotenv = require('dotenv').config();

const host = process.env.HOST;

app.use(express.static(`${__dirname}/public`));

app.get('/getflag', async (req, res) => {
  const { type, size, country } = req.query;
  const file = `/flags/${type}/${size}/${country}.png`;
  fs.access(`./public${file}`, fs.F_OK, (err) => {
    if (err) {
      res.status(400).send({ error: 'Bad request' });
    } else {
      res.json({ url: host + file });
    }
  });
});

server.listen(port, () => console.log(`Listening on ${port}`));
