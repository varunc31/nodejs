
/**
 * Module dependencies.
 */

var express = require('express')
, routes = require('./routes')
, user = require('./routes/user')
, http = require('http')
, path = require('path')
, ejs = require("ejs");

var app = express();

//all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(err, result) {
	  response.writeHead(200, {"Content-Type": "text/html"});
	  response.write("<html>");
	  response.write("<head>");
	  response.write("<title>Hello World Page</title>");
	  response.write("</head>");
	  response.write("<body>");
	  response.write("Hello World!");
	  response.write("</body>");
	  response.write("</html>");
	  response.end();
	/*ejs.renderFile("client.ejs", function(req, response) {
		if(err) {
			console.error();
			response.end('<h3>something wrong</h3>');
		} else {
			console.log("started");
		}
	});*/
});

/*app.get('/', routes.index);
app.get('/users', user.list);
*/
http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
