// js/views/app.js

var Panel = Backbone.View.extend({
	initialize : function(options){
		console.log('Panel initialized..');
		this.foo = 'bar';
	}
});

var MegaPanel = Panel.extend({
	initialize : function(options){
		Panel.prototype.initialize.call(this, [options]);
		console.log('Mega Panel initialized..');
		console.log(this.foo);	
	}
});

var MegaPanelAdvanced = MegaPanel.extend({
	initialize : function(options){
		MegaPanel.prototype.initialize.call(this, [options]);
		console.log('Mega Panel Advanced initialized..');
	}
});



