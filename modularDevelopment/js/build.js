({
paths: {
		'text' : 'lib/text',
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
	},
out: 'dist/main.js',
name: 'model/MyModel'
})