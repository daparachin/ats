const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5433,
  user: 'pavelparachin',
  password: '',
  database: 'pavelparachin'
});

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
});