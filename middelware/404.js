'use strict';

export default (req, res, next) => {
  console.log('Unknown Route');
  res.status(404);
  res.send('No idea what you want');
  res.end();
};
