'use strict';

import requireAll from 'require-directory';
const models = requireAll(module, '../models');

console.log('models', models);

export default (req,res,next) => {
  try {
    let model = req && req.params && req.params.model;
    console.log('try models', model, models);
    
    if ( model && models[model] && models[model].default ) {
      req.model = models[model].default;
      next();
    }
    else { throw 'Model not found'; }
  }
  catch(e) {
    throw e;
  }
};