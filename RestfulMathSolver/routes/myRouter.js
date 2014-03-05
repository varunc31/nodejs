var http = require("http");
var url = require("url");
var PATH = '/';
var math = require('./mathSolver');

exports.processPrime = app.get({path : PATH} , math.isPrime);
server.get({path : PATH +'/:jobId' , version : '0.0.1'} , generatePrimeNoList);
