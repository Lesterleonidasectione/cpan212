const express = require('express');
const app = express();
const port = 8000;

const routes = require('./routes');
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});