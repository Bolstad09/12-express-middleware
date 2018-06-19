'use strict';

// import requireAll from 

import express from 'express';

import Cat from '../models/cat.js';

const router = express.Router();

let sendJSON = (res, data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(data));
  res.end();
};

router.get('/api/v1/cat', (req, res) => {
  Cat.fetchAll()
    .then(data => sendJSON(res, data))
    .catch(() => {
      res.statusCode = 404;
      res.statusMessage = 'Not Found';
      res.write('Not Found');
      res.end();
    });
});

router.get('/api/v1/cat/:id', (req, res) => {
  if (req.params.id) {
    Cat.findOne(req.params.id)
      .then(data => sendJSON(res, data))
      .catch(() => {
        res.statusCode = 404;
        res.statusMessage = 'Not Found';
        res.write('Not Found');
        res.end();
      });
  }
  
  else {
    res.statusCode = 404;
    res.statusMessage = 'Not Found';
    res.write('Not Found');
    res.end();
  }
});

router.delete('/api/v1/cat', (req, res) => {
  if (req.params.id) {
    Cat.deleteOne(req.params.id)
      .then(() => {
        res.statusCode = 204;
        res.end();
      })
      .catch(console.error);
  }
});

router.post('/api/v1/cat', (req, res) => {
  let record = new Cat(req.body);
  record.save()
    .then(data => sendJSON(res, data))
    .catch(console.error);
});

router.put('/api/v1/:models/:cat', (req, res, next) => {
  req.models.updateOne(req.params.id, req.body)
    .then((data) => {
      sendJSON(res, data);
    })
    .catch(() => {
      next();
    });
});

export default router;