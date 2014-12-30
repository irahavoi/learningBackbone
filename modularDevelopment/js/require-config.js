require.config({
	paths: {
		'underscore': 'lib/underscore.min',
		'jquery': 'lib/jquery.min',
		'backbone': 'lib/backbone.min'
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

require( ['backbone'] , function(backbone){
	console.log('done loading backbone: ');
	console.log(backbone);
	console.log('As well as its\' dependencies:');
	console.log('Underscore:');
	console.log(_);
	console.log('And jquery');
	console.log(jQuery);
});

