// Express middleware

'use strict';

var express = require('express');
var path = require('path');
var app = express();
var db = require('./db');

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/quote', function (req, res) {
  db.openDb();
  db.getData(function (row) {
    res.status(200).send(row);
  });
  db.closeDb();
})
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
})

module.exports = app;
