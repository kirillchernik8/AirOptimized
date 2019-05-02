// var nr = require('newrelic');

var compression = require('compression')

const express = require('express');
const path = require('path');
const app = express();

const port = 3001
const cors = require('cors')
const {getCache} = require('./DBMS/db.js')


app.use(cors())
app.use(compression())

app.use(express.static(path.join(__dirname, '../public')))

app.get('/loaderio-c6167ee21f58ee198d073e6f372f323e', (req, res)=>{
  res.sendFile(path.join(__dirname + '/loaderio-c6167ee21f58ee198d073e6f372f323e.txt'))
})


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


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});

