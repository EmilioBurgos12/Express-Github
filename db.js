const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pokocopia',
  password: 'Yoshi8090',
  port: 5432,
});

module.exports = pool;