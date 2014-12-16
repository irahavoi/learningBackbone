var application_root = __dirname,
	express = require( 'express' ), //web frameworrk
	path = require( 'path' ), //itilities for dealing with file paths
	mongoose = require( 'mongoose' ); // mongodb integration

//Create server
var app = express();

app.configure(function(){
	//parses request body and populates request.body
	app.use( express.bodyParser() );

	//checks request.bodu for http methods overrides
	app.use( express.methodOverride() );

	//perrform route lookup based on URL and HTTP method
	app.use(express.static( path.join( application_root, 'site')));

	app.use( express.errorHandler({
		dumpExceptions : true,
		showStack : true
	}))
});	

//Start server
var port = 4711;

app.listen(port , function(){
	console.log('Express server listening on port %d in %s mode', port, app.settings.env);

});