const express = require('express');
const http = require('http');

const bodyParser = require('body-parser');
const morgan = require('morgan');

const hostname = "localhost";
const port = "5000";

const app = express();

app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  res.end("<html><body> Hello, World !!</body></html>");
});

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`running server at : ${hostname}:${port}`);
})
