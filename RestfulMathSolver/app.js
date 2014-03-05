
/**
 * Module dependencies.
 */

var application_root = __dirname
, express = require('express')
, routes = require('./routes')
, user = require('./routes/user')
, http = require('http')
, path = require('path')
//, ejs = require("ejs")
, math = require('./routes/mathSolver');

var app = express();

//all environments
app.set('port', process.env.PORT || 4000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.configure(function () {
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(application_root, "public")));
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

function requestLog () {
	console.log('Express server created @port:' + app.get('port'));
}
http.createServer(app, requestLog()).listen(app.get('port'));

app.get('/isPrime', math.processPrime);
app.get('/listPrimeNos', math.listPrimeNos);
