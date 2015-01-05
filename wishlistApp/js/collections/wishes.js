// js/collections/wishes.js

define(['underscore',
		'backbone',
		'localStorage',
		'models/wish'
	   ], function(_, Backbone, Store, Wish){
	   		var WishCollection = Backbone.Collection.extend({
				model : Wish,
				localStorage : new Store('wishes'),
				granted : function(){
					return this.filter(function(todo){return todo.get('granted');})
				},

				remaining : function(){
					return this.without.apply(this, this.granted());	
				}
			});

			return new WishCollection();
	   });