/**
 * Module dependencies.
 */
var express = require('express'),
    pjax = require('express-pjax'),
    routes = require('./routes');

var app = express();

// Define port
app.port = process.env.PORT || 3000;

// App configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(pjax());
  app.use(express.bodyParser());
  //app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

// Confiure error handling
app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});
app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);
app.get('/dinosaurs', routes.dinosaurs);
app.get('/aliens', routes.aliens);

// Start server
app.listen(3000);
console.log("Express server listening on port %s in %s mode", app.port, app.settings.env);
