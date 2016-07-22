const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use('/build', express.static(path.join(__dirname, 'build')));
app.set('views', path.join(__dirname, 'src'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

const server = app.listen(app.get('port'), function serverStart () {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`App listening at http://${host}:${port}`); // eslint-disable-line no-console
});
