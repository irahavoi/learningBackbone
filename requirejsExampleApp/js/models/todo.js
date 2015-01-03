// js/models/todo.js

define(['underscore', 'backbone'], function(_, Backbone){
	var TodoModel = Backbone.Model.extend({
		//Default attributes for the Todo:
		defaults : {
			//Default content:
			content : 'empty todo...',
			done : 'false'
		},

		initialize : function(){
			console.log('initializing TodoModel..');
		},

		//Toggle the done state of the given todo item:
		toggle : function(){
			this.save({done : !this.get('done')});
		},

		//Remove this todo from the local storage and delete it's view:
		clear : function(){
			this.destroy();
			this.view.remove();
		}

	});

	return TodoModel;
});