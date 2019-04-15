var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Events = require('./api/models/eventsModels'),
  Users = require('./api/models/usersModels'),
  Store = require('./api/models/storeModels'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Eventsdb');
mongoose.connect(process.env.MONGOLAB_URI)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/eventsRoutes');
routes(app);

app.listen(port);

console.log('api started on: ' + port);
