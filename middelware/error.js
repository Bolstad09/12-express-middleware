'use strict';

export default (err, req, res, next) => {
  console.log('In the error handler');
  res.status(500);
  res.send('Whaaat?');
};