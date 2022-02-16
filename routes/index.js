const express = require('express');

const OrganizationRouter = require('./organization.router');
const ObjectRouter = require('./object.router');
const FieldRouter = require('./field.router');
const RecordRouter = require('./record.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/organizations', OrganizationRouter);
  router.use('/objects', ObjectRouter);
  router.use('/fields', FieldRouter);
  router.use('/records', RecordRouter);
}

module.exports = routerApi;
