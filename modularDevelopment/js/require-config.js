require.config({
	paths: {
		'underscore': 'lib/underscore.min',
		'jquery': 'lib/jquery.min',
		'backbone': 'lib/backbone.min'
	},
	shim: {
		'backbone': {
			deps : ['underscore', 'jquery'],
			exports: 'Backbone'
		}
	}
});

require( ['backbone'] , function(backbone){
	console.log('done loading backbone');
});

