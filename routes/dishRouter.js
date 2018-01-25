const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/').all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
}).get((req, res, next) => {
  res.end("GET Operation {Dishes} Called");
}).post((req, res, next) => {
  res.end("POST Operation {Dishes} Called");
}).put((req, res, next) => {
  res.end("PUT Operation {Dishes} Called");
}).delete((req, res, next) => {
  res.end("DELETE Operation {Dishes} Called");
});

dishRouter.route('/:dishId').all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
}).get((req, res, next) => {
  res.end("GET Operation {Dishes} Called " + req.params.dishId);
}).post((req, res, next) => {
  res.end("POST Operation {Dishes} Called " + req.params.dishId);
}).put((req, res, next) => {
  res.end("PUT Operation {Dishes} Called " + req.params.dishId);
}).delete((req, res, next) => {
  res.end("DELETE Operation {Dishes} Called " + req.params.dishId);
});

module.exports = dishRouter;
    
