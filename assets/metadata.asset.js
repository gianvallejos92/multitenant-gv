class MetadataAsset {

  constructor () {}

  getFieldIds (objects) {
    let field_ids = [];
    for (let key in objects) {
      let fields = objects[key]['fields'];
      for (let fieldKey in fields) {
        let item = fields[fieldKey]['id'];
        field_ids.push(item);
      }
    }
    return field_ids;
  }

  generateRecordsArray (field_records) {
    let records_array = [];
    let first_iteration = true;
    for (let key in field_records) {
      let field_name = field_records[key]['name'];
      let cur_records = field_records[key]['records'];
      let ind = 0;
      for (let record in cur_records) {
        if (first_iteration) {
          let aux_res = new Object();
          aux_res[field_name] = cur_records[record]['value'];
          records_array.push(aux_res);
        } else {
          records_array[ind][field_name] = cur_records[record]['value'];
          ind++;
        }
      }
      first_iteration = false;
    }
    return records_array;
  }

  generateObject (objects, records_array) {
    const resultObj = new Object();
    resultObj.object = objects[0];
    resultObj.records = records_array;
    return resultObj;
  }
}

module.exports = MetadataAsset;
