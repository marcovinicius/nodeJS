var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var { check, validationResult } = require('express-validator');

var app = express();
app.set('view engine', 'ejs');
app.set('view', '././app/views')

app.use(bodyParser.urlencoded({ extended: true }));

consign()
    .include('././app/routes')
    .then('././app/config/database.js')
    .then('././app/models')
    .into(app);

module.exports = app;