const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());

require('./db/db');

app.use(bodyParser.urlencoded({extended:false}));

const patternController = require('./controllers/patternController');

app.use('/api/v1/patterns', patternController);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
