const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req, res, next)  => {
  res.end("GET OP Called");
})
.post((req, res, next)  => {
  res.end("POST OP Called");
})
.put((req, res, next)  => {
  res.end("PUT OP Called");
})
.delete((req, res, next)  => {
  res.end("DELETE OP Called");
});

module.exports = dishRouter;
