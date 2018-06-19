'use strict';

import express from 'express';
import notFound from './404.js';
import errorHandler from './error.js';
import logger from './logger.js';

let app = express();

app.use(express.json());

app.use(logger);

let dumbMW = (req, res, next) => {
  console.log('this is dumb');
  next();
};
app.use('/a', dumbMW);

app.get('/', (req, res, next) => {
  console.log('In the "/" route');
  res.status(200);
  res.send('All Good');
});

app.get('/a', (req, res, next) => {
  console.log('In the "/a" route');
  res.status(200);
  res.send('All AAAA');
});

app.get('/abc', (req, res, next) => {
  console.log('In the "/abc" route');
  throw 'abc failed';
});

app.get('/def', (req, res, next) => {
  console.log('In the "/def" route');
  next('def failed');
});

app.use('*', notFound);

app.use(errorHandler);

app.listen(3000);