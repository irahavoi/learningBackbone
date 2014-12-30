require.config({
	//Paths allows to define aliases to long paths:
	paths: {
		'underscore': 'lib/underscore.min',
		'jquery': 'lib/jquery.min',
		'backbone': 'lib/backbone.min',
		'mymodel' : 'model/MyModel'
	},
	shim: {
		'backbone': {
			//deps lists dependencies (anderscore and jquery) that have to be loaded before Backbone.js
			deps : ['underscore', 'jquery'],
			// Backbone does not directly support amd, so we have to specify, which global variable is going to be expported.
			exports: 'Backbone'
		}
	}
});

require( ['mymodel'] , function(MyModel){

	console.log('done loading my model and it\'s dependencies: ');
	console.log('Getting model\'s content: ');
	console.log(new MyModel().get('content'));
});

