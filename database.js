const { Client } = require('pg');

const client = new Client({
  host: '',
  port: ,
  user: '',
  password: '',
  database: ''
});

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
});
