const express = require('express');
const http = require('http');

const bodyParser = require('body-parser');
const morgan = require('morgan');

const hostname = "localhost";
const port = "5000";

const app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end("<html><body> Hello, World !!</body></html>");
});

app.all('/dishes', (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
});

app.get('/dishes', (req, res, next) => {
  res.end('GET operation initiated');
});

app.post('/dishes', (req, res, next) => {
  res.end('POST operation initiated');
});

app.put('/dishes', (req, res, next) => {
  res.end('PUT operation initiated');
});

app.delete('/dishes', (req, res, next) => {
  res.end('DELETE operation initiated');
});

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`running server at : ${hostname}:${port}`);
})
