const express = require('express');

const FieldService = require('../services/fields.service');

const router = express.Router();
const service = new FieldService();

router.get('/', async (req, res) => {
  try {
    const fields = await service.find();
    res.json(fields);
  } catch (error) {
    res.json({"message: " : error.message});
  }
});

router.get('/:id',
  async (req, res) => {
    try {
    const { id } = req.params;
    const fields = await service.findOne(id);
    res.json(fields);
    } catch (error) {
      res.json({"message: " : error.message});
    }
  }
);

router.post('/', async (req, res) => {
  const body = req.body;
  const fields = await service.create(body);
  res.json(fields);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const fields = await service.update(id, body);
  res.json(fields);
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await service.delete(id);
  res.status(201).json({id});
})

module.exports = router;
