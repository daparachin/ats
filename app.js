const express = require('express');
const db = require('./database');
const app = express();
const port = 3000;
const candidatesRouter = require('./routes/candidates.routes');


app.use('/api', candidatesRouter);

app.listen(port, () => {
  console.log(`Candidate API listening at http://localhost:${port}`);
});
