var express = require("express");
var bodyParser = require("body-parser");

var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

var models = require('./models');
models.sequelize.sync();

app.use(express.static("./dist"));

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname + "/dist/index.html"));
// });

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

app.get("/todos", (req,res) => {
	models.Guestbook.findAll().then((todos) => {
		res.json(todos)
	})
})

//wildcare route, when front end is refreshed, this defaults it to that page
//try the app without this route and refresh your page, see what happens
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname + "/dist/index.html"));
// });

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
