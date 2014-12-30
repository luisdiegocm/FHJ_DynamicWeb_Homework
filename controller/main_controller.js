// node modules:
var http = require('http');
var fs = require('fs');

// read the config ONCE
var config = require('../config')
console.log("About: author ",config.author," version ",config.version)

//Set the PORT
config.port = process.argv[2] || 8888;
// our custom modules:
var up = require('../helper/urlparser')
var routes = require('./routes')
var sessMgmt = require('../model/session_mgmt')
		

	
var restRouting = function(req,res,restUrl){

	// get or create a session from SessionManagement
	var cookies 	= sessMgmt.extractCookiesFromRequest(req)
	var session_id	= sessMgmt.getSessionId(cookies);
	var session 	= sessMgmt.getOrCreateSession(session_id,restUrl.params)
	sessMgmt.updateTheResponseHeaders(cookies,session,res)
  	  
	// get current User from Session
	var user = session.user;
	
	if (user == null){
  		req.url = "/page/login.html";
  		var restUrl= new up.UrlParser(req);  		
  }
  
  // routing section
  console.log("Routing: we analyse url and return 'something' for restUrl: ", restUrl);
  
  switch(routes.getController(restUrl)){
    case 'static': 
		console.log("We will return static files by url");
		var staticFileController = require('./static_files_controller')
		staticFileController.handle(restUrl,res)
	  	break;
	case 'song':
  		var songController = require('./song_controller')
		songController.handle(restUrl,res)
		break;
	case 'page':
  		var pageController = require('./page_controller')
		pageController.handle(restUrl,res)
		break;
	case 'testing':
		var testingController = require('./testing_controller')
		testingController.handle(restUrl,res,config)
		break;
	default:
		// unknown filename/path/id/format:
		res.writeHead(400, {'Content-Type': 'text/plain'});
		res.end('We will NOT return the "unknown" resource "'+restUrl.filename+'" with path="'+restUrl.path+'", id="'+restUrl.id+'" and type="'+restUrl.format+'" !\n');
  }

}
	

startup = function(){
	// we start up the server:
	http.createServer(function (req, res) {
	  console.log("\nWe got a new request: for url '"+req.url+"'\n")
		
		// we handle default url setting (re-routing):
		req.url = routes.checkForUrlRedirection(req)
	    if (req.method == 'POST' || req.method == 'PUT' ) { // POST & PUT might send data
			// try e.g.: curl -X PUT --data "user=5" "http://localhost:8888/testing/song/2.json?title=Another%20bites&artist=queen"
	        var body = '';
			req.on('data', function(data) { // we 'wait' for postData first
				body += data;
			})
	        req.on('end', function () {
 				console.log("POST, so we got a data: '"+body+"'")
 				var restUrl= new up.UrlParser(req,body);
 				restRouting(req,res,restUrl)
	        });
			
		}else{ // GET, DELETE
			var restUrl= new up.UrlParser(req);
			restRouting(req,res,restUrl)
		}
  	}).listen(config.port, config.server);
	
	console.log('Server running at http://'+config.server+':'+config.port+'/')
}

module.exports.startup=startup
