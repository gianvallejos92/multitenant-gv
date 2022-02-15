const express = require('express');

const ObjectRouter = require('./object.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/objects', ObjectRouter);
}

module.exports = routerApi;
