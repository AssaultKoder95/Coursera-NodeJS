const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route('/').all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
}).get((req, res, next) => {
  res.end("GET Operation {Promotions} Called");
}).post((req, res, next) => {
  res.end("POST Operation {Promotions} Called");
}).put((req, res, next) => {
  res.end("PUT Operation {Promotions} Called");
}).delete((req, res, next) => {
  res.end("DELETE Operation {Promotions} Called");
});

promotionRouter.route('/:promotionId').all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
}).get((req, res, next) => {
  res.end("GET Operation {Promotions} Called " + req.params.promotionId);
}).post((req, res, next) => {
  res.end("POST Operation {Promotions} Called " + req.params.promotionId);
}).put((req, res, next) => {
  res.end("PUT Operation {Promotions} Called " + req.params.promotionId);
}).delete((req, res, next) => {
  res.end("DELETE Operation {Promotions} Called " + req.params.promotionId);
});

module.exports = promotionRouter;
