const http = require('http');
const express = require('express');

const port = process.env.PORT || 7000;
const app = express();
const server = http.createServer(app);
const host = 'http://localhost:7000';
const fs = require('fs');

app.use(express.static(`${__dirname}/public`));

app.get('/get', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({});
});

app.get('/getflag', async (req, res) => {
  const { type, size, country } = req.query;
  const file = `/flags/${type}/${size}/${country}.png`;
  fs.access(`./public${file}`, fs.F_OK, (err) => {
    if (err) {
      res.json({ response: 'not found' });
    } else {
      res.json({ url: host + file });
    }
  });
});

server.listen(port, () => console.log(`Listening on ${port}`));
