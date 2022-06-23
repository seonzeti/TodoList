const express = require('express');
const app = express();
const router = require('./routes/router');
const bodyParser = require('body-parser');
const ejs = require("ejs");

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
app.listen(3000);