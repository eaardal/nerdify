const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const nerdifyRouter = require('./nerdifyRouter');

const app = express();
const APP_PORT = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/public', express.static('public'));

app.use('/nerdify', nerdifyRouter);

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.listen(APP_PORT, () => {
  console.log(`App running on port ${APP_PORT}`);
});
