const express = require('express');
const http = require('http');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const dishRouter = require('./routes/dishRouter');
const leaderRouter = require('./routes/leaderRouter');
const promotionRouter = require('./routes/promotionRouter');

const hostname = "localhost";
const port = "5000";

const app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.use('/dishes', dishRouter);
app.use('/leaders', leaderRouter);
app.use('/promotions', promotionRouter);

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`running server at : ${hostname}:${port}`);
})
