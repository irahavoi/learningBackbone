// js/views/app.js

var app = app || {};

var subView = Backbone.View.extend({
	initialise : function(){
		console.log('a sub view has been initialized..')
	},
	render : function(){
		this.el.innerHTML = 'test';
	}
});

//The application
//----------------

//Top-level view
app.AppView = Backbone.View.extend({
	//bind the view to the existing element 
	el : '#body',

	initialize : function(){
		console.log('Initializing the main view..');
		this.innerView1 = new subView();
		this.innerView1.render();
		this.innerView2 = new subView();
		this.innerView2.render();
	},

	render: function() {
		this.$('.innerViewContainer').append(this.innerView1.el);
		this.$('.innerViewContainer').append(this.innerView2.el);
	}

});
