const express = require('express');

const ObjectService = require('../services/objects.service');

const router = express.Router();
const service = new ObjectService();

router.get('/', async (req, res) => {
  const objects = await service.find();
  res.json(objects);
});

router.get('/:id',
  async (req, res) => {
    try {
    const { id } = req.params;
    const objects = await service.findOne(id);
    res.json(objects);
    } catch (error) {
      res.json({"message: " : error.message});
    }
  }
);

router.post('/', async (req, res) => {
  const body = req.body;
  const objects = await service.create(body);
  res.json(objects);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const objects = await service.update(id, body);
  res.json(objects);
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await service.delete(id);
  res.status(201).json({id});
})

module.exports = router;
