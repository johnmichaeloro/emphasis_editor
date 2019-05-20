const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');

require('./db/db');
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));






const patternController = require('./controllers/patternController');
app.use((req, res, next)=>{
  console.log("GOT HERE");
  console.log(req.body);
  console.log(req.url);
  next();
})
app.use('/api/v1/patterns',patternController);

app.listen(process.env.PORT || 9000, () => {
  console.log('listening on port 9000');
});
