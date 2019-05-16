const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');

require('./db/db');

app.use(session({
  secret: 'green sentence',
  resave: false,
  saveUninitialized: false
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200
}

app.use(cors(corsOptions));

const entryController = require('./controllers/entryController');

app.use('/api/v1/entries', entryController);

app.listen(process.env.PORT || 9000, () => {
  console.log('listening on port 9000');
})
