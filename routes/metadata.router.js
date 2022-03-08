const express = require('express');

const MetadataService = require('../services/metadata.service');
const MetadataAsset = require('../assets/metadata.asset');

const router = express.Router();
const service = new MetadataService();
const asset = new MetadataAsset();

router.get('/:id',
  async (req, res) => {
    try {
      const { id } = req.params;
      const { type } = req.query;
      if (type) {
        let results = '';
        if (type === 'org') {
          results = await service.findOrganizationMetadata(id);
        } else if (type === 'object') {
          results = await service.findObjectMetadata(id);
        } else if (type === 'field') {
          results = await service.findFieldMetadata(id);
        } else if (type === 'record') {
          let objects = await service.findObjectMetadata(id);
          let field_ids = asset.getFieldIds(objects);
          let field_records = await service.getRecordsByFields(field_ids);
          let records_array = asset.generateRecordsArray(field_records);
          results = asset.generateObject(objects, records_array);
        }
        res.json(results);
      }
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
