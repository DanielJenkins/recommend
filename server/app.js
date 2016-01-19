var express = require('express');
var app = express();
var join = require('./routes/join.js')

app.use(express.static('server/public'));
app.use('/join/', join);

app.get('/movies', function(req, res) {
  var theData = [
    'Star Wars',
    'Batman',
    'Titanic'
  ];
  res.send(theData);
});

app.listen(1337, function() {
  console.log('App is running!');
});