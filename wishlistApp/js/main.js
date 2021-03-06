// Filename: main.js

// Require.js allows us to configure mappings to paths
// as demonstrated below:
require.config({
	paths: {
		jquery: 'libs/jquery/jquery.min',
		underscore: 'libs/underscore/underscore.min',
		backbone: 'libs/backbone/backbone.min',
		localStorage : 'libs/backbone/backbone.localStorage-min',
		text: 'libs/require/text',
		jasmine : 'libs/jasmine/jasmine',
		'jasmine-html' : 'libs/jasmine-html',
		spec : 'tests/spec'
	},

	shim: {
		'underscore' : {
			exports : '_'	
		},
		'backbone': {
			//deps lists dependencies (underscore and jquery) that have to be loaded before Backbone.js
			deps : ['underscore', 'jquery'],
			// Backbone does not directly support amd, so we have to specify, which global variable is going to be expported.
			exports: 'Backbone'
		},
		jasmine: {
			exports: 'jasmine'
		},
		'jasmine-html': {
			deps: ['jasmine'],
			exports: 'jasmine'
		}

		
	}

});

require(['views/app'], function(AppView){
	var app_view = new AppView();
});