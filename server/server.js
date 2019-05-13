var nr = require('newrelic');

const compression = require('compression')
const express = require('express');
const path = require('path');

const cors = require('cors')
const {getCache} = require('./DBMS/db.js')


const app = express();

app.use(cors())
app.use(compression())
app.use(express.static(path.join(__dirname, '../public')))


app.get('/app.js', function (req, res) {
  res.set('Content-Encoding', 'br');
  res.sendFile('../public/app.js.br');
});

app.get('/:room', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/room/:room', (req, res, next) => {
  getCache(req, res)
})


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`server running at: http://localhost:${PORT}`)
});

