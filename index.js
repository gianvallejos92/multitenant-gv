const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
/*
const whitelist = ['http://localhost:8080'];
const options = {
  origin: (origin, cb) => {
    if (whitelist.includes(origin) || !origin) {
      cb(null, true);
    } else {
      console.log(origin);
      cb(new Error('Sitio no permitido por CORS'));
    }
  }
}

app.use(cors(options));
*/
routerApi(app);

app.use(cors());

app.listen(port, () => {
  console.log('Ejecutando en el puerto ' + port);
});
