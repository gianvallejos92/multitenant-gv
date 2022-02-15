const { Client } = require('pg');

async function getConnection () {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: 'admin123',
    database: 'multitenant_db'
  });

  await client.connect();
  return client;
}

module.exports = getConnection;
