// /js/models.wish.js

define(['underscore', 'backbone'], function(_, backbone){
	var WishModel = Backbone.Model.extend({
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

	return WishModel;
})