var express = require("express");
var bodyParser = require("body-parser");

var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

var models = require('./models');
models.sequelize.sync();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};
app.use(allowCrossDomain);

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use('/', require('./controller/routes.js'));

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
