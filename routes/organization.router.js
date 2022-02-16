const express = require('express');

const OrganizationService = require('../services/organizations.service');

const router = express.Router();
const service = new OrganizationService();

router.get('/', async (req, res) => {
  const organizations = await service.find();
  res.json(organizations);
});

router.get('/:id',
  async (req, res) => {
    try {
    const { id } = req.params;
    const organizations = await service.findOne(id);
    res.json(organizations);
    } catch (error) {
      res.json({"message: " : error.message});
    }
  }
);

router.post('/', async (req, res) => {
  const body = req.body;
  const organizations = await service.create(body);
  res.json(organizations);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const organizations = await service.update(id, body);
  res.json(organizations);
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await service.delete(id);
  res.status(201).json({id});
})

module.exports = router;
