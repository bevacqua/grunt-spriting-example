'use strict';

var express = require('express');
var app = express();
var path = require('path');
var pub = path.join(__dirname, 'bin/public');

app.use(express.static(pub));
app.use(app.router);
app.get('*', function (req, res) {
  console.log('GET', req.url);
  res.sendfile('src/index.html');
});

app.listen(3001, function () {
  console.log('express listening on port 3000');
});