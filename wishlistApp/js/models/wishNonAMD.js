// /js/models.wish.js

var app = app || {};
	app.Wish = Backbone.Model.extend({
		defaults : {
			granted : false,
			content : 'Empty wish'
		},

		initialize : function(){
			console.log('Initializing a new wish model..');
		},

		toggle : function(){
			this.save({granted : !this.get('granted')});
		},

		clear : function(){
			this.destroy();
			this.view.remove();
		}
	});