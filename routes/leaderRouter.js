const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/').all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
}).get((req, res, next) => {
  res.end("GET Operation {Leaders} Called");
}).post((req, res, next) => {
  res.end("POST Operation {Leaders} Called");
}).put((req, res, next) => {
  res.end("PUT Operation {Leaders} Called");
}).delete((req, res, next) => {
  res.end("DELETE Operation {Leaders} Called");
});

leaderRouter.route('/:leaderId').all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
}).get((req, res, next) => {
  res.end("GET Operation {Leaders} Called " + req.params.leaderId);
}).post((req, res, next) => {
  res.end("POST Operation {Leaders} Called " + req.params.leaderId);
}).put((req, res, next) => {
  res.end("PUT Operation {Leaders} Called " + req.params.leaderId);
}).delete((req, res, next) => {
  res.end("DELETE Operation {Leaders} Called " + req.params.leaderId);
});

module.exports = leaderRouter;
