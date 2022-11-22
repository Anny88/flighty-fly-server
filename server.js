const express = require('express');
const database = require('./database.json');
const cors = require("cors");
const port = 8080;

const app = express();
app.use(express.json());

app.use(cors({
  origin: '*',
}));

app.get('/healthcheck', (req, res) => {
  res.send('I am alive!')
})

app.get('/promotions/priceoffers/ond/:origin?/:destination?', (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(database);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
