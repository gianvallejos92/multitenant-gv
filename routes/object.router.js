const express = require('express');

const ObjectService = require('../services/objects.service');

const router = express.Router();
const service = new ObjectService();

router.get('/', async (req, res) => {
  const objects = await service.find();
  res.json(objects);
});

module.exports = router;
