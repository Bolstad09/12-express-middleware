'use strict';

export default (req,res,next) => {
  console.log('Logging something');
  next();
};